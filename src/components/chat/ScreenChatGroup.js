
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { Image, KeyboardAvoidingView, ScrollView,TouchableOpacity, View } from 'react-native'
import { ButtonSendMessage } from '../elements/ButtonSendMessage'
import { TextInputApp } from '../elements/TextInputApp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { ItemMessage } from './ItemMessage'

const img = 'https://mdbcdn.b-cdn.net/img/new/avatars/4.jpg';
const img2 = 'https://cuidatuambiente.com/wp-content/uploads/2016/10/6-2.jpg';

export const ScreenChatGroup = ({ route }) => {
    const navigation = useNavigation();
    const handleGoToInfoGroup = () => {
        const { params } = route;
        const { name, description, participants, image  } = params;
        navigation.navigate('ScreenChatInfo',{ name,description,participants, image })
    }
    useEffect(() => {
        navigation.setOptions({
            title:route.params.name,
            headerRight: () => (
               <TouchableOpacity 
                    onPress = { handleGoToInfoGroup }>
                    <Image style = {{width:50, height:50, borderRadius:50, margin:5} } source = {{uri:route.params.image}}/>
               </TouchableOpacity>
              ),
        })
    }, [])
    return (
        <KeyboardAvoidingView 
            style={{flex: 1, backgroundColor:COLORS_APP.primary}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={79}
            >
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
           
            <View style={{justifyContent: 'space-between',flexDirection:'row', width: '100%',backgroundColor:'white',padding:5, alignItems:'flex-end'}}>
               
                <TextInputApp placeholder={'Message..'} styleT={{width:'85%', borderRadius:20, marginTop:0}} paddingHorizontal={0} />
                <ButtonSendMessage />
            </View>
        </KeyboardAvoidingView>
    )
}
