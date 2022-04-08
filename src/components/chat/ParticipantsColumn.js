import React from 'react'
import { useState } from 'react'
import { View } from 'react-native';
import { UserListItem } from './UserListItem';

export const ParticipantsColumn = ( {groupMembers, colorColorBordersAvatars, eventParticipants, type } ) => {
    const [ members, setMembers ] = useState( groupMembers );
    const [ participants, setParticipants ] = useState( eventParticipants );
    
    const usersData = () => {
        console.log('1 ' + type);
        if(type === 'participants'){
            console.log('2 ' + participants);
            return participants.map( ( uid ) => {
                console.log('3 ' + uid);
                {(uid != undefined) 
                    return <UserListItem key={uid} uid={uid} colorColorBordersAvatars={colorColorBordersAvatars}/>
                }
            })
        } else if(type === 'members') {
            return members.map( ({ uid }) => {
                console.log('4 ' + uid);
                {(uid != undefined) 
                    return <UserListItem key={uid} uid={uid} colorColorBordersAvatars={colorColorBordersAvatars}/>
                }
            })
        }
        
    }

    return (
        <View style={{minHeight: 200, width:'100%', backgroundColor: 'green'}}>
            {
                usersData()
            }
        </View>
    )
}
