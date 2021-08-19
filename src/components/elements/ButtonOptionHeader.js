import React from 'react'
import { Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ButtonOptionHeader = ({ onPress=()=>{}, disabled=false, text, Icon }) => {
    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                disabled={ disabled }
            >
              
                <View style = {styles2.buttonOptionMenuHeader}>
                    { !!Icon && <Icon pathColor = { COLORS_APP.blue1 }/> }
                    <Text style = {{color:COLORS_APP.blue1, fontWeight:'bold'}}>
                            {text}
                    </Text>
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
                                    ? styles2.button 
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
