import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

import { styleCalendar } from '../../theme/appTheme'

import { ModalViewDetailsEvent } from './ModalViewDetailsEvent'
export const ItemEvent = ({ group, events }) => {

    const [modalMarker, setmodalMarker] = useState({ modalVisible:false, events:[]})

    return (
        <>
            <TouchableOpacity activeOpacity={ 0.75 } onPress = { () =>{ setmodalMarker({
                modalVisible:true,
                events: [events]
            }) }}>
                <View style={styleCalendar.wrapperItem}>
                    <View style={{position: 'relative'}}>
                        <View style={{ backgroundColor:events.color,...styleCalendar.badgeItemCalendar }}></View>
                        <Image style = {styleCalendar. groupImg} source = {{uri:group.image}}/>
                    </View>
                    <View style={{flex:1,  paddingLeft:10}}>
                        <Text style={styleCalendar.nameEventText}>{ events.nameEvent }</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styleCalendar.groupNameText}>Group: { group.name }</Text>
                            {/* <Text style={styleCalendar.autorText}>by autor</Text> */}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
           <ModalViewDetailsEvent modalMarker={ modalMarker } setmodalMarker={ setmodalMarker }/>
        </>
    )
}
