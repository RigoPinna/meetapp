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

export const addNewEvent = ({ name, nameEvent, startDate, description, color }) => {
    
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
                color,
            }, {merge: false})
            // console.log(name, '=>', nameEvent, ' => ', startDate, ' => ', description)
          });
        dispatch({
            type:'create-event',
            payload:[{name, nameEvent, startDate, description, color}]
        })
    }
}

export const joinEvent = ({ gid, eid, uid, paid }) => {
    return async ( ) => {
        const eventRef = await db.collection('groups').doc(gid).collection('event').doc(eid);
        const event = await eventRef.get();
        const data = event.data();

        if(data.participants == undefined){
            if(paid){
                const participants = JSON.stringify([{uid, paid: false}]);
                await eventRef.update({ ...data, participants })
            } else {
                const participants = JSON.stringify([uid]);
                await eventRef.update({ ...data, participants })
            }
        } else {
            const arrayParticipants = JSON.parse(data.participants);
            if(paid){
                const participants = JSON.stringify([...arrayParticipants, {uid, paid: false}]);
                await eventRef.update({ ...data, participants})
            } else {
                const participants = JSON.stringify([...arrayParticipants, uid]);
                await eventRef.update({ ...data, participants})
            }
        }
    }
}

export const modifyUserPayment = ({ gid, eid, uid }) => {
    return async ( ) => {
        const eventRef = await db.collection('groups').doc(gid).collection('event').doc(eid);
        const event = await eventRef.get();
        const data = event.data();

        const arrayParticipants = JSON.parse(data.participants);

        const modifyArray = arrayParticipants.map( p => {
            return {
                uid: p.uid,
                name: p.name,
                paid: (p.uid == uid ) ? !p.paid : p.paid
            }
        });
        
        const participants = JSON.stringify(modifyArray);
        await eventRef.update({ ...data, participants})
    }
}


export const leaveEvent = ({ gid, eid, idUser, paid }) => {
    return async ( ) => {
        const eventRef = await db.collection('groups').doc(gid).collection('event').doc(eid);
        const event = await eventRef.get();
        const data = event.data();

        if(data.participants != undefined){
            const arrayParticipants = JSON.parse(data.participants);
            if(paid){
                const participants = JSON.stringify(arrayParticipants.filter( ({uid}) => uid != idUser));
                await eventRef.update({ ...data, participants})
            } else {
                const participants = JSON.stringify(arrayParticipants.filter( p => p != idUser));
                await eventRef.update({ ...data, participants})
            }
        }
    }
}


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

