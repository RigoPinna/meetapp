import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ItemInfoCalendar } from './ItemInfoCalendar'


export const WrapperInfoCalendar = ({ groups }) => {

    return (
        <View style={{flex: 1, padding:15, backgroundColor:'#FFFFFF'}}>
            <Text style={{fontSize:28, fontWeight:'bold', marginBottom:10, color:COLORS_APP.black1}}>My events</Text>
            <ScrollView>
                {
                    groups.map( group => <ItemInfoCalendar key={`${group.gid}-cle`} {...group}/> )
                }
            </ScrollView>
        </View>
    )
}
