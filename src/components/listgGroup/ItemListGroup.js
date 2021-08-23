import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styleListGroups } from '../../theme/appTheme'
import { ItemNumberNotification } from '../elements/ItemNumberNotification'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ListParticipants } from './ListParticipants'

export const ItemListGroup = ({imageGroup,nameGroup='',createdat='', participants = [], navigation}) => {


    const hanldeNavigatorChat = () => navigation.navigate('ScreenChatInfo',{imageGroup,nameGroup, participants, imageGroup});
    return (
        <TouchableOpacity onPress={ hanldeNavigatorChat } >
            <View style ={ {...styleListGroups.wrapperItem,...{backgroundColor:'#EEEEEC' }} }>
            <Image style = {styleListGroups. imageGroupItem } source = {{ uri:imageGroup }} />
            <View style = { styleListGroups.wrapperInfoItemGroup }>
                <Textapp 
                    size = { TEXTS_SIZE.extraMedium } 
                    weight='bold' 
                    text ={nameGroup} 
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
