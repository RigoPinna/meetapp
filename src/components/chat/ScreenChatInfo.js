import React, { useEffect } from 'react'
import { Button, Image, ScrollView, View } from 'react-native'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styleListGroups } from '../../theme/appTheme'
import { Buttonapp } from '../elements/Buttonapp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { ListParticipants } from '../listgGroup/ListParticipants'
import { MenuScreenChat } from '../stack-primary/MenuScreenChat'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { AlertEvent } from './AlertEvent'

export const ScreenChatInfo = ({ navigation, route }) => {
    const eventNew = false;
    const { params } = route;
    const { name,description,participants, image} = params;
    const hanldeGoToModal = () => {
        navigation.navigate('ModalParticipants',{participants})
    }
    return (
        <View style={{flex: 1, backgroundColor:'white'}}>
            
            <Image style = {{
                position: 'absolute',
                top:0,
                left:0,
                width: '100%',
                height: 225,
                borderBottomLeftRadius:25,
                borderBottomRightRadius:25,
               }} 
                source = {{ uri: image }} />
                <MenuScreenChat navigation={navigation} />
            <ScrollView style={{flex:1, marginTop:145, padding:10 }}>
                <View style={{alignItems: 'center', paddingHorizontal:13}}>
                    <Textapp 
                        size = { TEXTS_SIZE.medium } 
                        weight='bold' 
                        text ={name} 
                        styles={{width:'100%', textAlign: 'center', padding: 10}} 
                    />
                    <Textapp 
                        size = { TEXTS_SIZE.small } 
                        text ={description} 
                        styles={{width:'100%'}} 
                    />
                </View>
                <Textapp 
                        size = { TEXTS_SIZE.small } 
                        weight='bold' 
                        text ={'Participants'} 
                        styles={{padding:13}} 
                    />
                <View style={{justifyContent:'flex-start', paddingTop: 30,width:140}}>
                    <ListParticipants participants={ participants } colorColorBordersAvatars = {'white'} />
                    <Buttonapp
                        styleT={{backgroundColor:'transparent',width:'100%',marginLeft:10,marginTop:-35}}
                        onPress={hanldeGoToModal}
                    />
                </View>
                {
                (eventNew) && <AlertEvent/>
                }
            </ScrollView>
        </View>
    )
}
