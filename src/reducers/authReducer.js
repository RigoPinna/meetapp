import { db } from "../firebase/firebase-config";
import { uploadImage } from '../helpers/uploadImage';
import AsyncStorage  from "@react-native-async-storage/async-storage";

const initialState = {
    uid: null,
    name: null,
    image: null,
    phone: null,
}

export const setData = ( uid ) => {
    return async ( dispatch ) => {
        try {
            const userRef = db.collection('users').doc( uid )
            const doc = await userRef.get()
            if ( doc.exists ) {
                const user = doc.data()
                dispatch({
                    type: 'set-data-user',
                    payload: {
                        uid,
                        name: user.name,
                        image: user.image,
                        phone: user.phone,
                    }
                })
            } else {
                dispatch({
                    type:'not-fount-user',
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}
export const updateUser = ({ name, image, imageURL }) => {

    return async ( dispatch, getState ) => {
        try {
            const userLoged = getState().authRed
            if( name.trim() !== "" || imageURL.trim() !== "" ){
                const userRef = db.collection('users').doc(  userLoged.uid )
                if( name !== userLoged.name ) {
                    await userRef.update({ name })
                }
                if ( !!image ) {
                    const newImg =  await uploadImage( imageURL, userLoged.name,'img_profile' );
                    await userRef.update({ image: newImg })
                }
                dispatch({
                    type:'update-user',
                    payload:{ 
                        name, 
                        image:imageURL
                    }
                })
            }

        } catch( e ) {
            console.log(e)

        }
       
    }
}

export const logoutUser = () => {
    return ( dispatch ) => {
        AsyncStorage.removeItem('uid');
        dispatch({
            type: 'delete-id-user',
            payload: {
                uid: null,
                name: null,
                image: null,
                phone: null,
            }
        })
    }
}

export const authRed = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'set-data-user':
            return action.payload

        case 'not-fount-user':
            return initialState

        case 'update-user':
            return { ...state, ...action.payload }
        case 'delete-id-user' :
            return action.payload;
        default:
            return state
    }
}