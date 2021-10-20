import { useNavigation } from '@react-navigation/native'
import { db } from '../../firebase/firebase-config'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView,View } from 'react-native'
import { ButtonSendMessage } from '../elements/ButtonSendMessage'
import { TextInputApp } from '../elements/TextInputApp'

import { HeaderChat } from './HeaderChat'
import { useSelector } from 'react-redux'
import { getDataUser } from '../../helpers/getDataUser'
import { ItemMessage } from './ItemMessage'


export const ScreenChatGroup = ({ route }) => {
    const userLoged = useSelector(state => state.authRed)
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
            style={{flex: 1, backgroundColor:'white'}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={0}
            >
           <HeaderChat route = { route }/>
            <View style={{flex:1,flexDirection: 'column', position:'relative'}}>
                <ScrollView style={{flex: 1, backgroundColor:'white', paddingHorizontal:8,}}>
                   {
                       messages.map( message =>  <ItemMessage key={ message.mid } {...message}/>)
                   }
                </ScrollView>
            </View>
           
            <View style={{justifyContent: 'space-between', height:60,flexDirection:'row', width: '100%',backgroundColor:'white',padding:5, alignItems:'flex-end'}}>
               
                <TextInputApp placeholder={'Message..'} styleT={{width:'85%', borderRadius:20, marginTop:0}} paddingHorizontal={0} />
                <ButtonSendMessage />
            </View>
        </KeyboardAvoidingView>
    )
}
