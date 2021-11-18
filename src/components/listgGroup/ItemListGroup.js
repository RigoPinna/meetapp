import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useTimeAgo } from '../../hooks/useTimeAgo'
import { styleListGroups } from '../../theme/appTheme'
import { ItemNumberNotification } from '../elements/ItemNumberNotification'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ListParticipants } from './ListParticipants'
import { db, userStatic } from '../../firebase/firebase-config'

export const ItemListGroup = ({ id,image,name='',createdat='', participants = [],description, navigation }) => {
    const time = useTimeAgo( createdat );
    const hanldeNavigatorChat = () => navigation.navigate('ScreenChatGroup',{ id, image, name, participants, description });
    const userLoged = useSelector(state => state.authRed )
    const hanldeNavigatorEliminateGroup = () => navigation.navigate('ModalEliminateGroup', {id,name});
    const onLongPressButton = async () => {
        if( userLoged.uid !== null ) {
            const groupRef = db.collection('groups').doc(id);
            const doc = await groupRef.get();
            if(doc.exists){
                const data = doc.data();
                const participants = JSON.parse( data.participants );
                const {uid,name,image} = participants[0];

                if(userLoged.uid === uid) {
                    hanldeNavigatorEliminateGroup()
                }
            }
        } 
    }
    return (
        <TouchableOpacity onPress={ hanldeNavigatorChat } onLongPress={onLongPressButton}>
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
                    text ={`Created on ${time}`} 
                    styles = {{marginTop:2}} 
                />
                <ListParticipants participants={ participants } colorColorBordersAvatars = {'#EEEEEC'} />
            </View>
           <ItemNumberNotification id = { id } />
        </View>
        </TouchableOpacity>
       
    )
}
