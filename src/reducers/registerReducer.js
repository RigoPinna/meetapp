import AsyncStorage from '@react-native-async-storage/async-storage';

import { db } from "../firebase/firebase-config";
import { uploadImage } from '../helpers/uploadImage';
import { setData } from "./authReducer";
export const initialState = {
    name:'',
    image:'',
    phone:0,
    countryCode:0,
    verificationId:null,
};

export const addPhoneAndVerifyData = ({ phone, countryCode, verificationId }) => ({
    type:'ADD-DATA',
    payload: { 
        phone, 
        countryCode, 
        verificationId, 
    }
})

export const addNameAndImg = ({ name, image='' }) => {
    return async ( dispatch ) => {
        dispatch({
            type:'ADD-DATA',
            payload:{name, image}
        })
    }
}
export const registerUser = ({ name, image='' }) => {
    return async ( dispatch ) => {
        console.log('NOMBRE=',name )
        const imageURL =  await uploadImage( image, name,'profile_photo' );
        const userRef = await db.collection('users').add({ 
            name: name,
            image: imageURL, 
        },{ merge: true })
        console.log('ID=', userRef.id)
        await AsyncStorage.setItem( 'uid', userRef.id )
        dispatch( setData(  userRef.id ) )
    }
}

export const registerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'ADD-DATA': 
            return { ...state, ...action.payload }
        
        default:
            return state;
    }
}

