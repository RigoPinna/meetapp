import React from 'react'
import { Text, View } from 'react-native'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ItemNumberNotification = ({ number=0 }) => {
    return (
        <View style = {{width:25, height:25,backgroundColor:COLORS_APP.black2, borderRadius:20, justifyContent: 'center', alignItems:'center', position:'absolute', right:10, top:10}}>
                <Text style = {{color:'white'}}>{ number }</Text>
            </View>
    )
}
