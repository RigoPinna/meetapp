import React from 'react'
import { useState } from 'react'
import { View } from 'react-native';
import { UserListItem } from './UserListItem';
import { useDispatch } from 'react-redux'
import { modifyUserPayment } from '../../reducers/eventReducer';

export const ParticipantsColumn = ( {groupMembers, colorColorBordersAvatars, eventParticipants, type, isCreator = false, eid, gid, needPaid} ) => {
    const dispatch = useDispatch();
    const [ members, setMembers ] = useState( groupMembers );
    const [ participants, setParticipants ] = useState( eventParticipants );

    const modifyPayment = (uid) => {
        dispatch( modifyUserPayment({ gid, eid, uid }) );
    }

    const usersData = () => {
        if(type === 'participants' && participants.length != 0){
            if(needPaid){
                return participants.map( ( {uid, paid} ) => {
                    return ( uid != undefined && <UserListItem key={uid} uid={uid} needPaid={needPaid} paidStatus={paid} colorColorBordersAvatars={colorColorBordersAvatars} type={type} isCreator={isCreator} modifyPayment={modifyPayment}/>)
                })
            } else {
                return participants.map( uid => {
                    return ( uid != undefined && <UserListItem key={uid} uid={uid} colorColorBordersAvatars={colorColorBordersAvatars} type={type} modifyPayment={modifyPayment}/>)
                })
            }
        } else if(type === 'members') {
            return members.map( ({ uid }) => {
                return ( uid != undefined && <UserListItem key={uid} uid={uid} colorColorBordersAvatars={colorColorBordersAvatars} type={type}/>)
            })
        }
    }

    return (
        <View style={{minHeight: 200, width:'100%'}}>
            {
                (!!participants || !!members) && usersData()
            }
        </View>
    )
}

