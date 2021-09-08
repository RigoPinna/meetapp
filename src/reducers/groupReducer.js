import { db, userStatic } from "../firebase/firebase-config";
//OBJETO PARA UN GRUPO
// {
//     gid:'',
//     name:'',
//     image:'',
//     description: '',
//     code:'',
// }

export const initialState = {
    listGroup:[], 
    groupCreated:null
};

export const addNewGroup = ({ name, image='', description }) => {
    
    return async ( dispatch ) => {
        const code = Math.round(Math.random() * (999 - 0)) + ' ' +  Math.round (Math.random() * (999 - 0)) + ' ' + Math.round (Math.random() * (999 - 0));
        const groupRef = db.collection('groups').doc();
        const { id:gid } = groupRef;
        db.collection('groups').doc(gid).collection('chat').doc().set({},{ merge: true })
        db.collection('groups').doc(gid).collection('participants').doc().set({ uid:userStatic },{ merge: true })
        await groupRef.set({ code, creator: userStatic, description, name },{ merge: true });
        dispatch({
            type:'create-group',
            payload:[{ code, creator: userStatic, description, name, image }]
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

