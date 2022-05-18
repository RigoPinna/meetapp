import { db, userStatic } from "../firebase/firebase-config";

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
