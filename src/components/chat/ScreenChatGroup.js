import React, { useState, useRef, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView,View } from 'react-native'

import { db } from '../../firebase/firebase-config'

import { useDispatch, useSelector } from 'react-redux'
import { addNotification, removeBadge } from '../../reducers/notificationsReducer'

import { HeaderChat } from './HeaderChat'
import { ItemMessage } from './ItemMessage'
import { FooterChat } from './FooterChat'

import { stylesChat } from '../../theme/appTheme'
import { sendNotification } from '../../helpers/sendNotification'
import { addMessages } from '../../reducers/chatReducer'



export const ScreenChatGroup = ({ route }) => {
    const dispatch = useDispatch();
    const { chatReducer } = useSelector(state => state)
    const scrollViewRef = useRef()
    const [ messages, setMessages ] = useState([])
    const isMounted = useRef( null )
    useEffect(() => {
        // if ( !!isMounted.current ) {
            console.log("REDUCER=", chatReducer)
            if( chatReducer.length > 0 ) {
                const chat = chatReducer.find( chats => chats.gid === route.params.id )
                console.log("chat=", chat)
                if( !!chat ) {
                    setMessages( chat.messages )
                } else {
                    const initChat = {
                        gid: route.params.id,
                        messages:[]
                    }
                    setMessages([])
                }
            }
            dispatch( removeBadge(route.params.id) );
            // }
    }, [ chatReducer ])
    
    return (

        <KeyboardAvoidingView
            ref={isMounted} 
            style={ stylesChat.wrapperKeyboard }
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 :90 }
            >
           <HeaderChat route = { route }/>
            <View style={stylesChat.wrapperColumnChat }>
                <ScrollView 
                    ref={scrollViewRef}
                    onContentSizeChange = {() => !!scrollViewRef.current && scrollViewRef.current.scrollToEnd({animated: true})}
                    style={ stylesChat.wrapperListMessages }>
                   {
                       messages.length > 0 && messages.map( message =>  <ItemMessage key={ message.mid } {...message}/>)
                   }
                </ScrollView>
            </View>
            <FooterChat gid = { route.params.id }/>
        </KeyboardAvoidingView>
    )
}
