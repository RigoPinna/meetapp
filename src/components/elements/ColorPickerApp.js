import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ColorPicker, fromHsv, toHsv } from 'react-native-color-picker'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ButtonGradient } from './ButtonGradient'

export const ColorPickerApp = ({ eventData, setEventData }) => {
    const [ color, setColor ] = useState("#74BBE3")

    useEffect(() => {
        if ( color !== "#74BBE3" ) {
            let colorHEX = fromHsv(color)
            setEventData({...eventData, color: colorHEX })
        }
    }, [ color ])

    return(
        <>
            <View style={{width: '100%', height: 200 }}>
                <ColorPicker
                    defaultColor="#74BBE3"
                    onColorChange={ color => setColor(color) }
                    style={{flex: 1}}
                />
            </View>
        </>
    )
}