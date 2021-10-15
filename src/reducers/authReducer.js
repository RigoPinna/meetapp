import { db } from "../firebase/firebase-config";
import { uploadImage } from '../helpers/uploadImage';

const initialState = {
    uid: null,
    name: null,
    image: null,
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
export const updateUser = ({ name, image }) => {

    return async ( dispatch, getState ) => {
        const userLoged = getState().authRed
        if( name.trim() !== "" && image.trim() !== "" ){
            if( name !== userLoged.name ) {
                await userRef.update({ name })
            }
            if ( image !== userLoged.image ) {
                const imageURL =  await uploadImage( image, nameNew,'img_profile' );
                await userRef.update({ image: imageURL })
            }
            dispatch({
                type:'update-user',
                payload:{ name , image}
            })
        }
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
        default:
            return state
    }
}