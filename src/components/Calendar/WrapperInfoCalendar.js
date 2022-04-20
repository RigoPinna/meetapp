import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-native-calendars';

import { View, Text, ScrollView } from 'react-native'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ItemInfoCalendar } from './ItemInfoCalendar'
import { useMarkerCalendarGeneral } from '../../hooks/useMarkerCalendarGeneral'
import { ModalViewDetailsEvent } from './ModalViewDetailsEvent';

export const WrapperInfoCalendar = ({ groups }) => {
    const [ markerEvents, setMarkerEvents] = useState([]);
    const dots = useMarkerCalendarGeneral( markerEvents )
    const date = new Date()
    const RANGE = 24;
    const [modalMarker, setmodalMarker] = useState({ modalView:false, events:[]})
    const onDayPress = day => {
        const { [day.dateString]:events } =  dots
        if ( !!events ) {
            setmodalMarker({
                modalView:true,
                events: events.dots
            })
        }
    };

    return (
        <>
            <Calendar
                current={date}
                pastScrollRange={RANGE}
                futureScrollRange={RANGE}
                onDayPress={onDayPress}
                markingType={'multi-dot'}
                markedDates={dots}
                theme={{
                selectedDayTextColor: '#A1A1A1'
                }}
            />
            <View style={{flex: 1, padding:15, backgroundColor:'#FFFFFF'}}>
                <Text style={{fontSize:28, fontWeight:'bold', marginBottom:10, color:COLORS_APP.black1}}>My events</Text>
                <ScrollView>
                    {
                        groups.map( group => { 
                            return (
                                <ItemInfoCalendar 
                                    key = {`${group.gid}-cle`} 
                                    markerEvents = { markerEvents } 
                                    setMarkerEvents = { setMarkerEvents }
                                    {...group}  
                                />
                            ) 
                    })
                    }
                </ScrollView>
            </View>
            {
                modalMarker.modalView && <ModalViewDetailsEvent modalMarker={ modalMarker } setmodalMarker={ setmodalMarker }/>
            }
        </>
    )
}
