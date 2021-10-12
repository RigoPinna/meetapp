import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { db, userStatic, firebase } from "../firebase/firebase-config";
export const initialState = {
    name:'',
    image:'',
    phone:0,
    countryCode:0,
    verificationId:null,
};

export const addPhoneAndVerifyData = ({ phone, countryCode, verificationId, }) => ({
    type:'ADD-DATA',
    payload: { phone, countryCode, verificationId, }
})

export const addNameAndImg = ({ name, image='' }) => {
    console.log('aqioo',name,image)
    useAsyncStorage('@MyApp_USER','set', name)
    return async ( dispatch ) => {
        const userRef = db.collection('users').doc();
        const imageURL =  await uploadImage( image, name,'profile_photo' );
        console.log('magegegee',imageURL, userRef)
        await userRef.set({ 
            name: name,
            image: imageURL, 
        },{ merge: true });

        dispatch({
            type:'ADD-DATA',
            payload:{name, image}
        })
    }
//     type:'ADD-DATA',
//     payload: { name,image, }
}

export const registerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD-DATA': 
            return { ...state, ...action.payload }
        
        default:
            return state;
    }
}

