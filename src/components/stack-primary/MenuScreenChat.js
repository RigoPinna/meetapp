import React from 'react'
import { View } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCreateEvent } from '../icons/IconCreateEvent'
import { BlurView } from 'expo-blur';
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
export const MenuScreenChat = ({navigation, name}) => {
    const { top } = useSafeAreaInsets();
    const hanldeNavigatorChat = () => navigation.navigate('ModalCreateEvent', {name});
    return (
            // <BlurView intensity={80} tint="dark" style={{flexDirection:'row',width:'100%', height:60, marginTop:top,justifyContent:'space-between'}}>
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
                        textButton = {'New Event'}
                        styleText = {{color:'#35A8FD',fontWeight:'bold', fontSize:12}}
                        styleButton = {{height:35, marginRight:2}}
                        sizeGradient={{width:150, height:100}}
                        IconLeft ={ IconCreateEvent }
                        hanldeOnPress = { hanldeNavigatorChat }
                    />
                    
                </View>
                </LinearGradient>
        // </BlurView>
    )
}
