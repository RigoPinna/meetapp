import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { useMarkerCalendarGeneral } from '../../hooks/useMarkerCalendarGeneral'
import { ModalViewDetailsEvent } from '../Calendar/ModalViewDetailsEvent'; 


export const AgendaApp = ({event}) => {
    const RANGE = 24;
    const [ markerEvents, setMarkerEvents] = useState([]);
    const dots = useMarkerCalendarGeneral( markerEvents )
    const [modalMarker, setmodalMarker] = useState({ modalView:false, events:[]})
    const [ events, setEvent ] = useState(event)

    const onDayPress = day => {
        const { [day.dateString]:events } =  dots
        if ( !!events ) {
            setmodalMarker({
                modalView:true,
                events: events.dots
            })
        }
    };
    
    useEffect(()=> {
        if(!!events) {
            const formatEvents = events.map( evt => ({ key: evt.mid, date: evt.startDate, color:evt.color, ...evt }))
            setMarkerEvents([...markerEvents, ...formatEvents])
        }
    }, [ events ])
    return (
        <View style={{flex: 1, marginTop: 20}}>
            <Calendar
                pastScrollRange={RANGE}
                futureScrollRange={RANGE}
                onDayPress={onDayPress}
                markingType={'multi-dot'}
                markedDates={dots}
                theme={{
                selectedDayTextColor: '#A1A1A1'
                }}
            />
            {
                modalMarker.modalView && <ModalViewDetailsEvent modalMarker={ modalMarker } setmodalMarker={ setmodalMarker } needGoTo={false}/>
            }
        </View>
    )
}
