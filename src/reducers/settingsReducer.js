import { db, userStatic } from "../firebase/firebase-config";

import { uploadImage } from '../helpers/uploadImage';

export const initialState = {
    listGroup:[], 
    groupCreated:null
};
export const getUser = () => {
    return async(dispatch) => {
        const userRef = db.collection('users').doc(userStatic.uid)
        const doc = await userRef.get()
        const {nameGet, imageGet} = doc.data()
        dispatch({
            type:'update-user',
            payload:[{name: nameGet, image: imageGet}]
        })
    } 
}
export const updateUser = (nameNew='', imageNew='', imageFile='', uid) => {

    return async ( dispatch ) => {
        const userRef = db.collection('users').doc(uid)
        const doc = await userRef.get()
        const {name, image} = doc.data()
        if(name !== nameNew || image !== imageNew){
            if(name !== nameNew) {
                await userRef.update({name: nameNew})
            } else if (image !== imageNew) {
                const imageURL =  await uploadImage( imageNew, nameNew,'img_profile' );
                await userRef.update({image: imageURL})
            }
        }
        dispatch({
            type:'update-user',
            payload:[{ name: nameNew, image: imageNew}]
        })
    }
}

export const settingsReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'update-user': 
            return { 
                listGroup:[...state.listGroup,...action.payload ], 
                groupCreated:action.payload[0]
            };
        
        default:
            return state;
    }
}
