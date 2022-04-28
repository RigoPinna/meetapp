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

export const addNewEvent = ({ name, nameEvent, startDate, description, color, startTime, admin, end, repeatTimes, paid, recurrence, checkedDays }) => {
    
    return async ( dispatch, getState ) => {
        const groupRef = db.collection('groups')
        const snapshot = await groupRef.where('name','==',name).get()
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            const gid = doc.id;
            const userLoged = getState().authRed
            let array = []

            if(checkedDays.mon){
                array.push(0)
            }
            if(checkedDays.tue){
                array.push(1)
            }
            if(checkedDays.wed){
                array.push(2)
            }
            if(checkedDays.thu){
                array.push(3)
            }
            if(checkedDays.fri){
                array.push(4)
            }
            if(checkedDays.sat){
                array.push(5)
            }
            if(checkedDays.sun){
                array.push(6)
            }
            console.log('array',array)
            db.collection('groups').doc(gid).collection('event').doc().set({
                nameEvent,
                startDate,
                startTime,
                description,
                color,
                paid,
                participants: (admin) ? JSON.stringify([{uid: userLoged.uid, paid: false}] ) : JSON.stringify([{}] ),
                recurrence: (recurrence.type === 1) 
                                ?   JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: timeSttgs, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                : (recurrence.type === 2)
                                    ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: array, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                    : (recurrence.type === 3)
                                        ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                        : (recurrence.type === 4)
                                            ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                            : (recurrence.type === 0)
                                                && JSON.stringify([{}] )

            }, {merge: false})
            // console.log(name, '=>', nameEvent, ' => ', startDate, ' => ', description)
          });
        dispatch({
            type:'create-event',
            payload:[{nameEvent,
                startDate,
                startTime,
                description,
                color,
                paid,
                participants: (admin) ? JSON.stringify([{uid: userLoged.uid}] ) : JSON.stringify([{}] ),
                recurrence: (recurrence.type === 1) 
                                ?   JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: timeSttgs, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                : (recurrence.type === 2)
                                    ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: array, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                    : (recurrence.type === 3)
                                        ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                        : (recurrence.type === 4)
                                            ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                            : (recurrence.type === 0)
                                                && JSON.stringify([{}] )}]
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

