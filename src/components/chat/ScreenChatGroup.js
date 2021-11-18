import React, { useState, useRef, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView,View } from 'react-native'

import { db } from '../../firebase/firebase-config'

import { useDispatch } from 'react-redux'
import { addNotification, removeBadge } from '../../reducers/notificationsReducer'

import { HeaderChat } from './HeaderChat'
import { ItemMessage } from './ItemMessage'
import { FooterChat } from './FooterChat'

import { stylesChat } from '../../theme/appTheme'



export const ScreenChatGroup = ({ route }) => {
    const dispatch = useDispatch();
    const scrollViewRef = useRef()
    const [ messages, setMessages ] = useState([])
    const isMounted = useRef( null )
    useEffect(() => {
            db.collection('groups')
            .doc( route.params.id )
            .collection('Chat').orderBy('createdat').onSnapshot( async (snapshot) => {
                const msgs = snapshot.docs.map( (doc) => {
                    const data = doc.data();
                    return {
                        mid: doc.id,
                        ...data
                    }
                });

                if ( !!isMounted.current ) {
                    dispatch( removeBadge(route.params.id) );
                    setMessages( msgs )
                } else {
                    await dispatch( addNotification(route.params.id) )
                }
            })
    }, [])
    
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
                       messages.map( message =>  <ItemMessage key={ message.mid } {...message}/>)
                   }
                </ScrollView>
            </View>
            <FooterChat gid = { route.params.id }/>
        </KeyboardAvoidingView>
    )
}
