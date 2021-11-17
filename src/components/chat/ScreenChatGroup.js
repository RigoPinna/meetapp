import { db } from '../../firebase/firebase-config'
import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView,View } from 'react-native'
import { HeaderChat } from './HeaderChat'

import { ItemMessage } from './ItemMessage'
import { stylesChat } from '../../theme/appTheme'
import { FooterChat } from './FooterChat'


export const ScreenChatGroup = ({ route }) => {
    const scrollViewRef = useRef()
    let bottom
    const [ messages, setMessages ] = useState([])
    useEffect(() => {
            db.collection('groups')
                .doc( route.params.id )
                .collection('Chat').orderBy('createdat').onSnapshot((snapshot) => {
                const msgs = snapshot.docs.map( (doc) => {
                    const data = doc.data();
                    return {
                        mid: doc.id,
                        ...data
                    }
                })
                setMessages( msgs )

            })
    }, [])
    
    return (

        <KeyboardAvoidingView 
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
                       messages.map( message =>  <ItemMessage key={ message.mid } {...message}/>)
                   }
                </ScrollView>
            </View>
            <FooterChat gid = { route.params.id }/>
        </KeyboardAvoidingView>
    )
}
