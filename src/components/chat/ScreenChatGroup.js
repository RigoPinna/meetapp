import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { Image, KeyboardAvoidingView, ScrollView,Text,TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonGradient } from '../elements/ButtonGradient'
import { ButtonSendMessage } from '../elements/ButtonSendMessage'
import { TextInputApp } from '../elements/TextInputApp'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { COLORS_APP } from '../ui/COLORS_APP'
import { HeaderChat } from './HeaderChat'
import { ItemMessage } from './ItemMessage'

const img = 'https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg';
const img2 = 'https://cuidatuambiente.com/wp-content/uploads/2016/10/6-2.jpg';

export const ScreenChatGroup = ({ route }) => {
    
    return (

        <KeyboardAvoidingView 
            style={{flex: 1, backgroundColor:'white'}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={0}
            >
           <HeaderChat route = { route }/>
            <View style={{flex:1,flexDirection: 'column', position:'relative'}}>
                <ScrollView style={{flex: 1, backgroundColor:'white', paddingHorizontal:8}}>
                    <ItemMessage message={'Hi!!'}/>
                    <ItemMessage image={img} isMyMessage = { false } message={'Hi! welcome'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'yeah'}/>
                    <ItemMessage message={'Who are you?'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'find'}/>
                    <ItemMessage image={img} isMyMessage = { false } message={'findsdklfsdhfsdhfdsjkf sdjfsdkjfhjsdkhfdsj sdjfhsdkhfjdshfjkds dhfkdshfjsdhkjfsk'}/>
                    <ItemMessage message={'what?'}/>
                    <ItemMessage message={'afaskfasjf skjfhskhfsakjh kshksh'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'find'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'find'}/>
                </ScrollView>
            </View>
           
            <View style={{justifyContent: 'space-between', height:60,flexDirection:'row', width: '100%',backgroundColor:'white',padding:5, alignItems:'flex-end'}}>
               
                <TextInputApp placeholder={'Message..'} styleT={{width:'85%', borderRadius:20, marginTop:0}} paddingHorizontal={0} />
                <ButtonSendMessage />
            </View>
        </KeyboardAvoidingView>
    )
}
