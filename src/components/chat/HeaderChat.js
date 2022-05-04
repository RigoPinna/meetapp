import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useActiveEvent } from '../../hooks/useActiveEvent';
import { ButtonGradient } from '../elements/ButtonGradient';
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple';
import { COLORS_APP } from '../ui/COLORS_APP';

export const HeaderChat = ({ route }) => {
    const navigation = useNavigation();
    const { params } = route;
   
    const { activeEvent } = useActiveEvent( params )
    const { top } = useSafeAreaInsets();
    const handleGoToInfoGroup = () => {
        const { name, description, participants, image, id, code, creator } = params;
        navigation.navigate('ScreenChatInfo',{ name,description,participants, image, id, code, creator })
    }
    return (
        <>
        <View style={{ width: '100%', height: 80, paddingTop:top,paddingHorizontal:10, justifyContent:'space-between',flexDirection:'row', alignItems:'center' }}>
        <ButtonGradient 
                gradient ={['#F3F7FE','#F3F7FE']}
                sizeGradient = {{width:50, height:50}}
                styleText={{color:'white', fontWeight:'bold',}}
                styleButton={{width:35, height:35}}
                IconRight = { IconArrowLeftSimple }
                colorIcon = {'#35A8FD'}
                hanldeOnPress = { () => navigation.goBack()}/>
        <Text numberOfLines={1} style={{fontWeight:'bold', width:250, textAlign:'center'}}>{route.params.name}</Text>
        <TouchableOpacity onPress = { handleGoToInfoGroup }>
                <Image style = {{width:50, height:50, borderRadius:50, margin:5} } source = {{uri:route.params.image}}/>
        </TouchableOpacity>
    </View>
    { !!activeEvent 
        && <View style={{ width:"100%", height:30, padding:5, backgroundColor:COLORS_APP.blue3}}>
                <Text style={{color:COLORS_APP.primary, fontSize:12, fontWeight:'bold',}}>New event: { activeEvent.nameEvent } on {activeEvent.formatPeople}</Text>
            </View>}
    </>
    )
}
