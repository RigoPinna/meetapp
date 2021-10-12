import moment from "moment-timezone";
import { db, userStatic, firebase } from "../firebase/firebase-config";
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
    
    return async ( dispatch ) => {
        const date = moment().format('DD-MM-YYYY')
        const code = generateCode();
        const groupRef = db.collection('groups').doc();
        const imageURL =  await uploadImage( image, name,'img_group' );
        await groupRef.set({ 
            code, 
            creator: userStatic.uid, 
            createdat: firebase.firestore.Timestamp.fromDate(new Date()),
            // createdat: date,
            description,
            image: imageURL, 
            name,
            participants:JSON.stringify([{uid: userStatic.uid, name:userStatic.name, image:userStatic.image}] )
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

