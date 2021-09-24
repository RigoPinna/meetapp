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
    listEvent:[], 
    eventCreated:null
};

export const addNewEvent = ({ name, nameEvent, startDate, description }) => {
    
    return async ( dispatch ) => {
        const groupRef = db.collection('groups')
        const snapshot = await groupRef.where('name','==',name).get()
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            const gid = doc.id;

            db.collection('groups').doc(gid).collection('event').doc().set({
                nameEvent,
                startDate,
                description,
            }, {merge: false})
            // console.log(name, '=>', nameEvent, ' => ', startDate, ' => ', description)
          });
        dispatch({
            type:'create-event',
            payload:[{name, nameEvent, startDate, description}]
        })
    }
}

// export const getIdEvent = (id, eventId, setEventId) => {

//     return async ( dispatch ) => {
//         const eventRef = db.collection('groups').doc(id).collection('event')
//         const snapshot = await eventRef.orderBy('startDate', 'desc').limit(1).get()
//         if(!snapshot.empty){
//             snapshot.forEach(doc => {
//                 // console.log(doc.id,'id =>', doc.data())
//                 setEventId({...eventId,...{id: doc.id}})
//             })
//             // setEventVisible(true)
//             // console.log(eventData)
//         }
//         dispatch({
//             type:'get-event',
//             payload:[{...eventId.id}]
//         })
//     }

// }


export const eventReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'create-event': 
            return { 
                listEvent:[...state.listEvent,...action.payload ], 
                eventCreated:action.payload[0]
            };
        case 'get-event': 
            return { 
                listEvent:[...state.listEvent,...action.payload ], 
                eventCreated:action.payload[0]
            };
        default:
            return state;
    }
}

