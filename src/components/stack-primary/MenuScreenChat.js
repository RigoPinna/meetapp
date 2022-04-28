import React from 'react'
import { View } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCreateEvent } from '../icons/IconCreateEvent'
import { BlurView } from 'expo-blur';
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { IconCalendar } from '../icons/IconCalendar';
import { IconCalendarGradient } from '../icons/IconCalendarGradient';
import { IconEdith } from '../icons/IconEdith';

export const MenuScreenChat = ({navigation, name, id, code, hanldeEditGroup}) => {
    const { top } = useSafeAreaInsets();
    const hanldeNavigatorChat = () => navigation.navigate('ModalCreateEvent', {name});
    const hanldeNavigatorCalendar = () => navigation.navigate('ScreenAgenda',{name, id});
    return (
            // <BlurView intensity={80} tint="dark" style={{flexDirection:'row',width:'100%', height:60, marginTop:top,justifyContent:'space-between'}}>
            <View >
                <LinearGradient locations={[0.2,1]} colors={['rgba(0,0,0,0.7)', 'transparent']} style={{flexDirection:'row', padding:13, width:'100%', height:60, marginTop:top,justifyContent:'space-between'}} >
                    <ButtonGradient 
                            gradient ={['#F3F7FE','#F3F7FE']}
                            sizeGradient = {{width:50, height:50}}
                            styleText={{color:'white', fontWeight:'bold',}}
                            styleButton={{width:35, height:35, backgroundColor:'pink'}}
                            IconRight = { IconArrowLeftSimple }
                            colorIcon = {'#35A8FD'}
                            hanldeOnPress = { () => navigation.goBack()}
                            
                        />
                <View style = {{flexDirection: 'row'}}>
                    <ButtonGradient
                        gradient ={['#F3F7FE','#F3F7FE']}
                        textButton = {'Calendar'}
                        styleText = {{color:'#35A8FD',fontWeight:'bold', fontSize:12}}
                        styleButton = {{height:35, marginRight:2}}
                        sizeGradient={{width:150, height:100}}
                        IconLeft ={ IconCalendarGradient }
                        hanldeOnPress = { hanldeNavigatorCalendar }
                    />
                    {
                        (!!code) && <ButtonGradient
                                        gradient ={['#F3F7FE','#F3F7FE']}
                                        textButton = {'New event'}
                                        styleText = {{color:'#35A8FD',fontWeight:'bold', fontSize:12}}
                                        styleButton = {{height:35, marginRight:2}}
                                        sizeGradient={{width:150, height:100}}
                                        IconLeft ={ IconCreateEvent }
                                        hanldeOnPress = { hanldeNavigatorChat }
                                    />
                    }
                    
                    
                </View>
                </LinearGradient>
                <LinearGradient colors={['rgba(0,0,0,0)', 'transparent']} style={{alignItems: 'flex-end', width:'97%', marginTop: 120}} >
                    {(code !== '') &&   <ButtonGradient
                        gradient ={['#F3F7FE','#F3F7FE']}
                        styleText = {{color:'#35A8FD',fontWeight:'bold', fontSize:12}}
                        styleButton = {{width:65, height:35}}
                        sizeGradient={{width:65, height:100}}
                        IconLeft ={ IconEdith }
                        hanldeOnPress = { hanldeEditGroup }
                    />}
                </LinearGradient>
            </View>
        // </BlurView>
    )
}
