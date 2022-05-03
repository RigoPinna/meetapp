import moment from "moment-timezone";
import { db, firebase } from "../firebase/firebase-config";
import { uploadImage } from '../helpers/uploadImage';
import { generateCode } from '../helpers/generateCode';
//OBJETO PARA UN GRUPO
// {
//     gid:'',
//     name:'',
//     image:'',
//     description: '',
//     code:'',
//     createdat: '',
//     participants: ''.
// }

export const initialState = {
    listGroup:[], 
    groupCreated:null
};

export const setGroups = (groups) => {
    return {
        type: 'set-groups',
        payload: {listGroup: groups}
    }
}

export const addNewGroup = ({ name, image='', description }) => {
    
    return async ( dispatch, getState ) => {
        const IMG_DEFAULT = 'https://firebasestorage.googleapis.com/v0/b/meetapp-prueba.appspot.com/o/groups_imgs_defaults%2Fimg_3.png?alt=media&token=2724ab38-867a-4d98-b971-3880faa72e93';
        const userLoged = getState().authRed
        const date = moment().format('DD-MM-YYYY')
        let code = generateCode();
        //TODO: hacer chequeo de codigo
        const groupRefQuery = db.collection('groups');
        const snapshot = await groupRefQuery.where('code', '==', code).get();
        if(!snapshot.empty) {
            code = generateCode()
            console.log('code =>', code)
        } 
        const groupRef = db.collection('groups').doc();
        const imageURL = !!image && await uploadImage( image, name,'img_group' );
        await groupRef.set({ 
            gid: groupRef.id,
            code, 
            creator:  userLoged.uid, 
            createdat: firebase.firestore.Timestamp.fromDate(new Date()),
            // createdat: date,
            description,
            image: !!image ? imageURL : IMG_DEFAULT, 
            name: name.trim() !== '' ?name.trim() : "Group Name" ,
            participants:JSON.stringify([{uid: userLoged.uid, name: userLoged.name, image: userLoged.image}] )
        },{ merge: true });

        dispatch({
            type:'create-group',
            payload:[{ 
                gid: groupRef.id,
                code, 
                creator:  userLoged.uid, 
                description, 
                name: name.trim() !== '' ?name.trim() : "Group Name" , 
                image: !!image ? imageURL : IMG_DEFAULT, 
                createdat: date,
                participants:  userLoged}]
        })
    }
}

export const updateGroup = ({ name,image, description, id }) => {

    return async ( dispatch, getState) => {
        try {
            const {groupReducer} = getState()
            const group = groupReducer.listGroup.find(g => id == g.gid)

            // console.log(group)
            if( name.trim() !== "" || image.trim() !== "" || description.trim() !== ""){
                const groupRef = db.collection('groups').doc( id )
                if( name !== group.name ) {
                    await groupRef.update({ name })
                }
                if( description !== group.description ) {
                    await groupRef.update({ description })
                }
                if (!!image) {
                    const newImg =  await uploadImage( image, name,'img_group' );
                    await groupRef.update({ image: newImg })
                }
                dispatch({
                    type:'update-group',
                    payload:{ 
                        gid: id,
                        name, 
                        description,
                        image:image
                    }
                })
            }

        } catch( e ) {
            console.log(e)

        }
       
    }
}

export const cleanGroup = () =>{
    return (dispatch) => {
        dispatch({
            type:'clean-group',
            payload:initialState.listGroup
        })
    }
}



export const groupReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'create-group': 
            return { 
                listGroup:[...state.listGroup ], 
                groupCreated:action.payload[0]
            };
        case 'clean-group': 
            return { 
                listGroup:[...state.listGroup,...action.payload ], 
                groupCreated:null
            };
            case 'update-group':
                const groups = state.listGroup.map(g => {
                                                        return action.payload.id == g.gid ? action.payload : g
                                                        })
                return { ...state, listGroup: groups }
                case 'set-groups':
                return { ...state, ...action.payload }
        default:
            return state;
    }
}

