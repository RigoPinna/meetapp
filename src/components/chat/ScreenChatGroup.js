import { db } from '../../firebase/firebase-config'
import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView,View } from 'react-native'
import { HeaderChat } from './HeaderChat'

import { ItemMessage } from './ItemMessage'
import { stylesChat } from '../../theme/appTheme'
import { FooterChat } from './FooterChat'
import { addNotification, removeBadge } from '../../reducers/notificationsReducer'


export const ScreenChatGroup = ({ route }) => {
    const dispatch = useDispatch()
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
                <ScrollView style={ stylesChat.wrapperListMessages }>
                   {
                       messages.map( message =>  <ItemMessage key={ message.mid } {...message}/>)
                   }
                </ScrollView>
            </View>
            <FooterChat gid = { route.params.id } />
        </KeyboardAvoidingView>
    )
}
