import React from 'react'
import { Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'
import { IconArrowRight } from '../icons/IconArrowRight'
import { IconEdit } from '../icons/IconEdit'

export const Buttonapp = ({ text , onPress = ()=>{}, typeButton = 'primary',disabled = false ,icon = 'arrow'}) => {
    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                disabled={ disabled }
            >
                <View style = { ( typeButton === 'primary' ) ? styles2.buttonPrimary: styles2.buttonSeconday }>
                    <Text 
                        style = {( typeButton === 'primary' ? styles2.textButtonPrimary : styles2.textSeconday)}
                        >
                            {text}
                    </Text>
                     
                     {(icon === 'save') ? <IconEdit/> : <IconArrowRight/>}
                     
                </View>
            </TouchableOpacity>
        )
    }
    const android = () => {
        return (
            <TouchableNativeFeedback
                onPress={ onPress }
                disabled={ disabled }
            >
                <View 
                    style = {
                                ( typeButton === 'primary' ) 
                                    ? styles2.buttonPrimary 
                                    : styles2.buttonSeconday 
                        }>
                    <Text 
                        style={( typeButton === 'primary' ? styles2.textButtonPrimary : styles2.textSeconday)}
                        >
                            {text}
                    </Text>
                     
                     {(icon === 'save') ? <IconEdit/> : <IconArrowRight/>}
                     
                </View>
            </TouchableNativeFeedback>
        )
    }
   return (Platform.OS === 'ios' ? ios() : android() );
}
