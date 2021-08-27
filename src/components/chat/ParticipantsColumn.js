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

                    return ( i <= 4 ) && <View style={{flexDirection:'row'}}>
                                            <Image key={uid} style = {{...styleListGroups.avatarListItemParticipants,...{borderColor:list.colorColorBordersAvatars}}} source = {{uri: image }} />
                                            <View>
                                                <Textapp keyT={uid} text={name} styles={{marginTop:20, marginLeft: 10}} weight={'bold'} size={TEXTS_SIZE.small}/>
                                                <Textapp keyT={uid} text={phone} styles={{marginLeft: 10}}/>
                                            </View>
                                        </View>
                    
                })
            }
                    
        </View>
    )
}
