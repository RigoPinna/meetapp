import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ColorPicker from 'react-native-wheel-color-picker'

export const ColorPickerApp = ({ eventData, setEventData }) => {
    const [ color, setColor ] = useState("#74BBE3")

    useEffect(() => {
        if ( color !== "#74BBE3" ) {
            setEventData({...eventData, color: color })
        }
    }, [ color ])

    return(
        <>
            <View style={{width: '100%', height: '50%'}}>
                <ColorPicker
                    color={color}
                    onColorChangeComplete={ pickColor => {setColor(pickColor)}}
                />
            </View>
        </>
    )
}