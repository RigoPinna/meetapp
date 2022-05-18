import React from 'react'
import { Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { styles2 } from '../../theme/appTheme'

export const Buttonapp = ({ text , onPress = ()=>{}, typeButton = 'primary',disabled = false ,Icon,styleT}) => {
    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                disabled={ disabled }
            >
                <View style = { 
                        ( typeButton === 'primary' ) 
                            ? {...styles2.buttonPrimary,
                                ...styleT}
                            : styles2.buttonSeconday }>
                    <Text 
                        style = {( typeButton === 'primary' ? styles2.textButtonPrimary : styles2.textSeconday)}
                        >
                            {text}
                    </Text>
                     
                    { !!Icon && <Icon pathColor={colorIcon}/>}
                     
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
                                    ? {...styles2.buttonPrimary,
                                        ...styleT} 
                                    : styles2.buttonSeconday 
                        }>
                    <Text 
                        style={( typeButton === 'primary' ? styles2.textButtonPrimary : styles2.textSeconday)}
                        >
                            {text}
                    </Text>
                     { !!Icon && <Icon pathColor={colorIcon}/>}
                     
                </View>
            </TouchableNativeFeedback>
        )
    }
   return (Platform.OS === 'ios' ? ios() : android() );
}
