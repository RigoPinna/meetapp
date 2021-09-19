import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useTimeAgo } from '../../hooks/useTimeAgo'
import { styleListGroups } from '../../theme/appTheme'
import { ItemNumberNotification } from '../elements/ItemNumberNotification'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ListParticipants } from './ListParticipants'

export const ItemListGroup = ({image,name='',createdat='', participants = [],description, navigation}) => {
    // const time = useTimeAgo( createdat );
    const hanldeNavigatorChat = () => navigation.navigate('ScreenChatGroup',{image,name, participants,description});
    return (
        <TouchableOpacity onPress={ hanldeNavigatorChat } >
            <View style ={ {...styleListGroups.wrapperItem,...{backgroundColor:'#EEEEEC' }} }>
            <Image style = {styleListGroups. imageGroupItem } source = {{ uri:image }} />
            <View style = { styleListGroups.wrapperInfoItemGroup }>
                <Textapp 
                    size = { TEXTS_SIZE.extraMedium } 
                    weight='bold' 
                    text ={name} 
                    styles={{width:'90%'}} 
                />
                <Textapp 
                    size={TEXTS_SIZE.small} 
                    weight='200' 
                    text ={`Created on ${createdat}`} 
                    styles = {{marginTop:2}} 
                />
                <ListParticipants participants={ participants } colorColorBordersAvatars = {'#EEEEEC'} />
            </View>
           <ItemNumberNotification />
        </View>
        </TouchableOpacity>
        
       
    )
}
