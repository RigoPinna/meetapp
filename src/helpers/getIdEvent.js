import { db } from "../firebase/firebase-config";

export const getIdEvent = async ( id, eventId, setEventId, eventData, setEventData ) => {
    const eventRef = db.collection('groups').doc(id).collection('event')
    const snapshot = await eventRef.orderBy('startDate', 'desc').limit(1).get()
    if(!snapshot.empty){
        snapshot.forEach( doc => {
            // setEventId({...eventId,...{id: doc.id}})
            // getEvent(id, doc.id, eventData, setEventData )
        })
    }
}

export const getEvent = async(id,eid, eventData, setEventData) => {
    const eventRef = db.collection('groups').doc(id).collection('event').doc(eid)
    const doc = await eventRef.get()
    if(!doc.empty){
        setEventData({...eventData, ...{nameEvent: doc.data().nameEvent, startDate: doc.data().startDate, description: doc.data().description,}})
    }
}