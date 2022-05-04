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
    
    const tempDate = new Date(props.createdat)

    const formatDate = () => {
        let month = ''
        
        switch ( tempDate.getMonth() ) {
            case 0:
                month = 'Jan'
                break;
            case 1:
                month = 'Feb'
                break;
            case 2:
                month = 'Mar'
                break;
            case 3:
                month = 'Apr'
                break;
            case 4:
                month = 'May'
                break;
            case 5:
                month = 'Jun'
                break;
            case 6:
                month = 'Jul'
                break;
            case 7:
                month = 'Aug'
                break;
            case 8:
                month = 'Sep'
                break;
            case 9:
                month = 'Oct'
                break;
            case 10:
                month = 'Nov'
                break;
            case 11:
                month = 'Dec'
                break;
        }

        return `${tempDate.getDate()} ${month} ${tempDate.getFullYear()}`
    }
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
                    text ={`Created on ${formatDate()}`} 
                    styles = {{marginTop:2}} 
                />
                <ListParticipants participants={  props.participants } colorColorBordersAvatars = {'#EEEEEC'} />
            </View>
           <ItemNumberNotification id = {  props.id } />
        </View>
        </TouchableOpacity>
       
    )
}
