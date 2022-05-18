import { db } from "../firebase/firebase-config";

export const initialState = {
    listEvent:[], 
    eventCreated:null
};

export const addNewEvent = ({ name, nameEvent, startDate, description, color, startTime, admin, end, repeatTimes, paid, recurrence, checkedDays }) => {
    
    return async ( dispatch, getState ) => {
        const groupRef = db.collection('groups')
        const snapshot = await groupRef.where('name','==',name).get()
        
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

        snapshot.forEach(doc => {
            const gid = doc.id;
            const userLoged = getState().authRed

            db.collection('groups').doc(gid).collection('event').doc().set({
                nameEvent,
                startDate,
                startTime,
                description,
                color,
                paid,
                participants: (admin) ? JSON.stringify([{uid: userLoged.uid, paid: false}] ) : JSON.stringify([] ),
                recurrence: (recurrence.type === 1) 
                                ?   JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.timeSttgs, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                : (recurrence.type === 2)
                                    ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: array, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                    : (recurrence.type === 3)
                                        ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                        : (recurrence.type === 4)
                                            ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                            : (recurrence.type === 0)
                                                && JSON.stringify([] )

            }, {merge: false})
          });
        dispatch({
            type:'create-event',
            payload:[{nameEvent,
                startDate,
                startTime,
                description,
                color,
                paid,
                participants: (admin) ? JSON.stringify([{uid: userLoged.uid}] ) : JSON.stringify([] ),
                recurrence: (recurrence.type === 1) 
                                ?   JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.timeSttgs, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                : (recurrence.type === 2)
                                    ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: array, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                    : (recurrence.type === 3)
                                        ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                        : (recurrence.type === 4)
                                            ? JSON.stringify([{type: recurrence.type, repeatTimes: repeatTimes, when: recurrence.when, typeDuration: end.type, duration: (end.type === 0) ? '' : recurrence.duration }] )
                                            : (recurrence.type === 0)
                                                && JSON.stringify([] )}]
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

