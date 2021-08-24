import React, { useEffect } from 'react'
import { Button, Image, View } from 'react-native'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styleListGroups } from '../../theme/appTheme'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { ListParticipants } from '../listgGroup/ListParticipants'
import { MenuScreenChat } from '../stack-primary/MenuScreenChat'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { AlertEvent } from './AlertEvent'

export const ScreenChatInfo = ({ navigation, route }) => {
    const eventNew = false;
    const { top } = useSafeAreaInsets();
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
                source = {{ uri:route.params.imageGroup }} />
            <View style={{flexDirection:'row', padding:13, width:'100%', height:60, marginTop:top,justifyContent:'space-between'}}>
                <ButtonGradient 
                    gradient ={['#F3F7FE','#F3F7FE']}
                    sizeGradient = {{width:50, height:50}}
                    styleText={{color:'white', fontWeight:'bold',}}
                    styleButton={{width:35, height:35, backgroundColor:'pink'}}
                    IconRight = { IconArrowLeftSimple }
                    colorIcon = {'#35A8FD'}
                    hanldeOnPress = { () => navigation.navigate('ScreenListGroups')}
                    
                />
                <MenuScreenChat navigation={navigation} />
            </View>
            <View style={{flex:1, marginTop:145 }}>
                <View style={{alignItems: 'center', paddingHorizontal:13}}>
                    
                    <Textapp 
                        size = { TEXTS_SIZE.medium } 
                        weight='bold' 
                        text ={route.params.nameGroup} 
                        styles={{width:'100%', textAlign: 'center', padding: 10}} 
                    />
                    <Textapp 
                        size = { TEXTS_SIZE.small } 
                        text ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nisl faucibus dolor non blandit dignissim. Eget orci lectus nullam pellentesque iaculis scelerisque.'} 
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
                    <ListParticipants participants={ route.params.participants } colorColorBordersAvatars = {'white'} />
                </View>

            </View>
            {
                (eventNew) && <AlertEvent/>
            }
            
            
        </View>
    )
}
