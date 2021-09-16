import moment from "moment-timezone";
import { db, userStatic } from "../firebase/firebase-config";
import { uploadImage } from '../helpers/uploadImage';
import { generateCode } from '../helpers/generateCode';
//OBJETO PARA UN EVENTO
// {
//     gid:'',
//     name:'',
//     description: '',
//     startDate:'',
// }

export const initialState = {
    listGroup:[], 
    groupCreated:null
};

export const addNewGroup = ({ name, image='', description }) => {
    
    return async ( dispatch ) => {
        const date = moment().format('DD-MM-YYYY')
        const code = generateCode();
        const groupRef = db.collection('groups').doc();
        const { id:gid } = groupRef;
        db.collection('groups').doc(gid).collection('chat').doc().set({},{ merge: true })
        db.collection('groups').doc(gid).collection('participants').doc().set({ userStatic },{ merge: true })
        const imageURL =  await uploadImage( image, name,'img_group' );
        await groupRef.set({ 
            code, 
            creator: userStatic.uid, 
            createdat: date,
            description,
            image: imageURL, 
            name, 
        },{ merge: true });

        dispatch({
            type:'create-group',
            payload:[{ code, creator: userStatic.uid, description, name, image: imageURL, createdat: date, participants: userStatic}]
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
        
        default:
            return state;
    }
}

