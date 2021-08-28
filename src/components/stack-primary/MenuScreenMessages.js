import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCreateGroup } from '../icons/IconCreateGroup'
import { IconJoinGroup } from '../icons/IconJoinGroup'

export const MenuScreenMessages = () => {
    const navigation = useNavigation()
    const hanldeNavigatorCreateGroup = () => navigation.navigate('ModalCreateGroup');
    const hanldeNavigatorJoinGroup = () => navigation.navigate('ModalJoinGroup');
    return (
       
        <View style = {{flexDirection:'row'}}>
            <ButtonGradient
                gradient ={['#F3F7FE','#F3F7FE']}
                textButton = {'Create group'}
                styleText = {{color:'#35A8FD',fontWeight:'bold', fontSize:12}}
                styleButton = {{height:35, marginRight:2}}
                sizeGradient={{width:150, height:100}}
                IconLeft ={ IconCreateGroup }
                hanldeOnPress={hanldeNavigatorCreateGroup}
            />
            <ButtonGradient
                gradient ={['#F3F7FE','#F3F7FE']}
                textButton = {'Join group'}
                styleText = {{color:'#35A8FD', fontWeight:'bold', fontSize:12}}
                styleButton = {{height:35}}
                sizeGradient={{width:100, height:100}}
                IconLeft ={ IconJoinGroup }
                hanldeOnPress={hanldeNavigatorJoinGroup}
            />
            
        </View>
    )
}
