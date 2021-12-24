import moment from 'moment'
import { useState, useEffect } from 'react'
import { db } from '../firebase/firebase-config'
import { formatDateCustom } from '../helpers/formatDateCustom'

export const useActiveEvent = ({ id }) => {

    const [ activeEvent, setActiveEvent ] = useState({})

    useEffect(() => {
        if( !!id ) {
            db.collection('groups')
                .doc( id )
                .collection('event')
                .orderBy('startDate', 'desc')
                .limit(1)
                .onSnapshot(( snapshot ) => {
                    const evt  = snapshot.docs.map( doc => {
                        const evt = {...doc.data() }
                        const { formatCalendar, formatPeople, dateNowForated } = formatDateCustom( evt.startDate )
                        if ( moment( dateNowForated ).isBefore( formatCalendar ) || moment( formatCalendar ).isSame( dateNowForated )) {
                            const evtFormateDates = {...evt, startDate: formatCalendar, formatPeople }
                            return { eid:doc.id, gid:id, ...evtFormateDates }
                        }
                    })
                    setActiveEvent( evt[0] )
    
    
                })
        }
    }, [ id ])

    return { activeEvent }
    
}
