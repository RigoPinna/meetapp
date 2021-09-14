import { BottomTabBar } from "@react-navigation/bottom-tabs";
import moment from "moment-timezone";
import { db, userStatic } from "../firebase/firebase-config";
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
        const code = generateCode();
        const groupRef = db.collection('groups').doc();
        const { id:gid } = groupRef;
        db.collection('groups').doc(gid).collection('chat').doc().set({},{ merge: true })
        db.collection('groups').doc(gid).collection('participants').doc().set({ userStatic },{ merge: true })
        const imageURL =  await uploadImage( image, name,'img_group' );
        await groupRef.set({ 
            code, 
            creator: userStatic.uid, 
            description,
            image: imageURL, 
            name, 
        },{ merge: true });

        dispatch({
            type:'create-group',
            payload:[{ code, creator: userStatic.uid, description, name, image: imageURL}]
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

