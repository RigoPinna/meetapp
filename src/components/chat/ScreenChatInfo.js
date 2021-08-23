import React, { useEffect } from 'react'
import { Button, View } from 'react-native'
import { Textapp } from '../elements/Textapp'
import { ListParticipants } from '../listgGroup/ListParticipants'
import { MenuScreenChat } from '../stack-primary/MenuScreenChat'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { AlertEvent } from './AlertEvent'

export const ScreenChatInfo = ({ navigation, route }) => {
    const eventNew = false;
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<MenuScreenChat  />),
            
        })

    }, [])
    return (
        <View style={{ flex: 1}}>
            <View style={{alignItems: 'center'}}>
                <Textapp 
                    size = { TEXTS_SIZE.long } 
                    weight='bold' 
                    text ={route.params.nameGroup} 
                    styles={{width:'90%', textAlign: 'center', padding: 10}} 
                />
                <Textapp 
                    size = { TEXTS_SIZE.extraMedium } 
                    text ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nisl faucibus dolor non blandit dignissim. Eget orci lectus nullam pellentesque iaculis scelerisque.'} 
                    styles={{width:'90%'}} 
                />
            </View>
            <Textapp 
                    size = { TEXTS_SIZE.medium } 
                    weight='bold' 
                    text ={'Participants'} 
                    styles={{marginLeft: 10,padding: 10}} 
                />
            <View style={{marginRight: 260, paddingTop: 30}}>
                <ListParticipants participants={ route.params.participants } colorColorBordersAvatars = {'#EEEEEC'} />
            </View>
            {
                (eventNew) && <AlertEvent/>
            }
            
            
        </View>
    )
}
