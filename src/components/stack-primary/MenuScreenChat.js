import React from 'react'
import { Image, View } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCreateEvent } from '../icons/IconCreateEvent'

export const MenuScreenChat = ({navigation}) => {
    const hanldeNavigatorChat = () => navigation.navigate('ModalCreateEvent');
    return (
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
    )
}
