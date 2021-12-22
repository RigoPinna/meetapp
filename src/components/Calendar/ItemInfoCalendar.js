import React, { useEffect, useState } from 'react'

import { db } from '../../firebase/firebase-config'

import { formatDateCustom } from '../../helpers/formatDateCustom'
import { ItemEvent } from './ItemEvent'
export const ItemInfoCalendar = ( group ) => {

    const [ events, setEvent ] = useState(undefined)
    

    useEffect( () => {
        db.collection('groups')
                .doc( group.gid )
                .collection('event').onSnapshot( async (snapshot) => {
                    const evt  = snapshot.docs.map( doc => {
                        const evt = {...doc.data()}
                        const { formatCalendar, formatPeople } = formatDateCustom( evt.startDate )
                        const evtFormateDates = {...evt, startDate: formatCalendar, formatPeople }
                        return { eid:doc.id, gid:group.gid, ...evtFormateDates }
                    });
                    setEvent( evt )
                })

    }, [])
    useEffect(()=> {
        if(!!events) {
            const { markerEvents, setMarkerEvents } = group;
            const formatEvents = events.map( evt => ({ key: evt.eid, date: evt.startDate, color:evt.color, ...evt }))
            setMarkerEvents([...markerEvents, ...formatEvents])
        }
    }, [ events ])

    return (
        <>
            {
                !!events 
                    && events.map(evt => <ItemEvent key={`${evt.eid}-${group.gid}`} events = { evt } group = { group }/>)
            }
        </>
    )
}