import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useItemListGroup } from '../../hooks/useItemListGroup'

import { useTimeAgo } from '../../hooks/useTimeAgo'
import { styleListGroups } from '../../theme/appTheme'
import { ItemNumberNotification } from '../elements/ItemNumberNotification'
import { Textapp } from '../elements/Textapp'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ListParticipants } from './ListParticipants'
/* 
    @props 
        id = string
        image(url) = string 
        name = string
        createdat = timestamp 
        participants = Array[]
        description = string
        navigation = Object{navigation}
        tokenNotification = string
*/
export const ItemListGroup = ( props ) => {

    const {  hanldeNavigatorChat, onLongPressButton } = useItemListGroup( props )
    
    // const time = useTimeAgo(  props.createdat )
    const tempDate = new Date(props.createdat)
    let fDate = ('0'+ tempDate.getDate()).slice(-2) + "/" + ('0'+ (tempDate.getMonth() + 1)).slice(-2) + "/" + tempDate.getFullYear()

    return (
        <TouchableOpacity onPress={ hanldeNavigatorChat } onLongPress={onLongPressButton}>
            <View style ={ {...styleListGroups.wrapperItem,...{backgroundColor:'#EEEEEC' }} }>
            <Image style = {styleListGroups. imageGroupItem } source = {{ uri: props.image }} />
            <View style = { styleListGroups.wrapperInfoItemGroup }>
                <Textapp 
                    size = { TEXTS_SIZE.extraMedium } 
                    weight='bold' 
                    text ={props.name} 
                    styles={{width:'90%'}} 
                />
                <Textapp 
                    size={TEXTS_SIZE.small} 
                    weight='200' 
                    text ={`Created on ${fDate}`} 
                    styles = {{marginTop:2}} 
                />
                <ListParticipants participants={  props.participants } colorColorBordersAvatars = {'#EEEEEC'} />
            </View>
           <ItemNumberNotification id = {  props.id } />
        </View>
        </TouchableOpacity>
       
    )
}
