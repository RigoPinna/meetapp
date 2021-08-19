import React from 'react'
import { useState } from 'react'
import { Image, View } from 'react-native';
import { styleListGroups } from '../../theme/appTheme'

export const ListParticipants = ( list ) => {
    
    const [ participants, setParticipants ] = useState( list.participants );
    return (
        <View style={{width:120, height:40,position:'absolute',right:0,bottom:0, flexDirection:'row'}}>
            {
                participants.map( ({ uid, image }, i ) => {

                    return ( i <= 4 ) && <Image key={uid} style = {{...styleListGroups.avatarListItemGroup,...{borderColor:list.colorColorBordersAvatars}}} source = {{uri: image }} />
                })
            }
                    
        </View>
    )
}
