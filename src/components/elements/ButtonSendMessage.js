import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import{ LinearGradient } from 'expo-linear-gradient'
import { stylesChat } from '../../theme/appTheme'
import { IconSendMessage } from '../icons/IconSendMessage'

export const ButtonSendMessage = () => {


    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                
        >
            <View style = {stylesChat.buttonSendMessage}>
                <LinearGradient colors={['#48C6EF','#6F86D6']} style={stylesChat.bgSendMessage} /> 
                <IconSendMessage />

            </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#28425B',false, 27)}
            >
            <View style = {styles.buttonCamara}
            >
                <LinearGradient colors={['#48C6EF','#6F86D6']} style={stylesChat. bgSendMessage} />
                <IconSendMessage />
            </View>
            
            </TouchableNativeFeedback>
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android();
}
