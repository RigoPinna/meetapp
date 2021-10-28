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

export const addNewGroup = ({ name, image='', description }) => {
    
    return async ( dispatch, getState ) => {
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
        const imageURL =  await uploadImage( image, name,'img_group' );
        await groupRef.set({ 
            code, 
            creator:  userLoged.uid, 
            createdat: firebase.firestore.Timestamp.fromDate(new Date()),
            // createdat: date,
            description,
            image: imageURL, 
            name,
            participants:JSON.stringify([{uid: userLoged.uid, name: userLoged.name, image: userLoged.image}] )
        },{ merge: true });

        dispatch({
            type:'create-group',
            payload:[{ code, creator:  userLoged.uid, description, name, image: imageURL, createdat: date, participants:  userLoged}]
        })
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
                listGroup:[...state.listGroup,...action.payload ], 
                groupCreated:action.payload[0]
            };
        case 'clean-group': 
            return { 
                listGroup:[...state.listGroup,...action.payload ], 
                groupCreated:null
            };
        
        default:
            return state;
    }
}

