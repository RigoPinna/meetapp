import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import{ LinearGradient } from 'expo-linear-gradient'

import { db, firebase } from '../../firebase/firebase-config'

import { styles, stylesChat } from '../../theme/appTheme'

import { IconSendMessage } from '../icons/IconSendMessage'


export const ButtonSendMessage = ({ gid, message,setMessage}) => {
    const { uid } = useSelector( state => state.authRed )
    const hanldeSendMessage = () => {
        if( message.trim() !== '' ) {
            db.collection('groups')
                .doc( gid )
                .collection('Chat')
                .add({ 
                    uid,
                    message,
                    createdat: firebase.firestore.Timestamp.fromDate(new Date())
                },{ merge: true })
            setMessage('')
        }
    }

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={ 0.75 } onPress={ hanldeSendMessage }>
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
                background={ TouchableNativeFeedback.Ripple('#28425B',false, 27) }
                onPress={ hanldeSendMessage } >
                    <View style = {styles.buttonCamara}>
                        <LinearGradient colors={['#48C6EF','#6F86D6']} style={stylesChat.bgSendMessage} />
                        <IconSendMessage />
                    </View>
            </TouchableNativeFeedback>
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android();
}
