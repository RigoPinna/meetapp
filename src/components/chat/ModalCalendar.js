import React from 'react'
import { View } from 'react-native'
import { AgendaApp } from '../elements/AgendaApp'
import { CalendarApp } from '../elements/CalendarApp'
import { ModalApp } from '../elements/ModalApp'

export const ModalCalendar = ({navigation}) => {
    return (
        <ModalApp navigation={navigation} textTitle={'Calendar'}>
            <View style={{flex:1}}>
                <AgendaApp/>
            </View>
        </ModalApp>
    )
}
