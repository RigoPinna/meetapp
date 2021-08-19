
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { Button, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { styleListGroups } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonSendMessage } from '../elements/ButtonSendMessage'
import { TextInputApp } from '../elements/TextInputApp'
import { COLORS_APP } from '../ui/COLORS_APP'
import{ LinearGradient } from 'expo-linear-gradient'
import { ItemMessage } from './ItemMessage'
const img = 'https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg';
const img2 = 'https://cuidatuambiente.com/wp-content/uploads/2016/10/6-2.jpg';
export const ScreenChatGroup = ({ route }) => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle:'',
            title:route.params.nameGroup,
            headerRight: () => (
                <Image style = {{width:50, height:50, borderRadius:50, margin:5} } source = {{uri:route.params.imageGroup}}/>
              ),
        })
    }, [])
    return (
        <KeyboardAvoidingView 
            style={{flex: 1, backgroundColor:COLORS_APP.primary}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={79}
            >
            <View style={{flex:1,flexDirection: 'column', backgroundColor:'pink', position:'relative'}}>
                <ScrollView style={{flex: 1, backgroundColor:'white', paddingHorizontal:8}}>
                    <ItemMessage message={'Hi!!'}/>
                    <ItemMessage image={img} isMyMessage = { false } message={'Hi! welcome'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'yeah'}/>
                    <ItemMessage message={'Who are you?'}/>
                    <ItemMessage image={img2} isMyMessage = { false } message={'find'}/>
                    <ItemMessage image={img} isMyMessage = { false } message={'findsdklfsdhfsdhfdsjkf sdjfsdkjfhjsdkhfdsj sdjfhsdkhfjdshfjkds dhfkdshfjsdhkjfsk'}/>
                    <ItemMessage message={'what?'}/>
                    <ItemMessage message={'afaskfasjf skjfhskhfsakjh kshksh'}/>
                </ScrollView>
            </View>
           
            <View style={{justifyContent: 'space-between',flexDirection:'row', width: '100%',padding:5, backgroundColor:'white', alignItems:'center'}}>
               
                <TextInputApp placeholder={'Message..'} width={'85%'} paddingHorizontal={0} />
                <ButtonSendMessage />
            </View>
        </KeyboardAvoidingView>
    )
}
