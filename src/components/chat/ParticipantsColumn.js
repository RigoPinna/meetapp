import React from 'react'
import { useState } from 'react'
import { Image, View } from 'react-native';
import { styleListGroups } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';

export const ParticipantsColumn = ( list ) => {
    const [ participants, setParticipants ] = useState( list.participants );
    return (
        <View style={{width:'100%'}}>
            {
                participants.map( ({ uid, image, name, phone}, i ) => {
                    return <View key={uid} style={{flexDirection:'row'}}>
                                <Image style = {{...styleListGroups.avatarListItemParticipants,...{borderColor:list.colorColorBordersAvatars}}} source = {{uri: image }} />
                                <View>
                                    <Textapp text={name} styles={{marginTop:10, marginLeft: 10}} weight={'bold'} size={TEXTS_SIZE.medium}/>
                                    <Textapp text={phone} styles={{marginLeft: 10}}/>
                                </View>
                            </View>
                })
            }
                    
        </View>
    )
}
