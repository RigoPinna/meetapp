import React, { useState } from 'react'
import { View } from 'react-native'
import { ColorPicker, fromHsv, toHsv } from 'react-native-color-picker'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ButtonGradient } from './ButtonGradient'

export const ColorPickerApp = ({eventData, setEventData, stepColor, setStepColor}) => {
    const [color, setColor] = useState({color: toHsv('green')})

    const onColorChange = (color) => {
        setColor(color)
    }

    const saveState = () => {
        let colorHEX = fromHsv(color)
        setEventData({...eventData, ...{color: colorHEX}})
        setStepColor({...stepColor, ...{stepGo: false, stepBack: true}})
    };
    
    return(
        <>
            <View style={{flex: 1, padding: 45, backgroundColor: '#212021'}}>
                <ColorPicker
                    color={color}
                    onColorChange={color => onColorChange(color)}
                    // style={{flex: 1}}
                />

            <View style={{marginTop: 100,  backgroundColor: 'red'}}>
                            <ButtonGradient 
                    gradient={['#F0F0F0','#F0F0F0']}
                    sizeGradient = {{width:330, height:50}}
                    textButton={ 'Save' }
                    styleText={{ 
                        color:COLORS_APP.black2, 
                        // fontWeight: (( "Select date..." === text ) ? 'normal':'bold'),
                        // paddingLeft:Platform.OS === "ios" && visible ? 10 : 10
                    }}
                    styleButton={{ 
                                width:330, 
                                height:50, 
                                justifyContent:'center',
                                borderRadius: 25,
                                // borderBottomLeftRadius: Platform.OS === "ios" && visible ? 0 : 25,
                                // borderBottomRightRadius:Platform.OS === "ios" &&  visible ? 0 : 25, 
                            }}
                    hanldeOnPress = { saveState }/>
                </View>

            </View>
        </>
    )
}