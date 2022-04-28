import React, { useEffect } from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native';
import { log } from 'react-native-reanimated';
import { styleListGroups } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LeftArrow } from '../icons/IconLeft'
import { useSelector } from 'react-redux'

export const EventsColumn = ( evtList ) => {
    const [ events, setEvents ] = useState();
    const user = useSelector(state => state.authRed )
    const { gid } = evtList;

    useEffect(()=> {setEvents(evtList.events)} , [evtList])

    const isParticipant = (participants, idUser, paid) => {
        if(participants != undefined){
            const participantes = JSON.parse((participants != undefined) ? participants : '[]');
            if(participantes.length != 0){
                if(paid){
                    return participantes.some( ({uid}) => uid === idUser);
                } else {
                    return participantes.some( p => p === idUser);
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const goToEventInfo = (eid) => {
        evtList.events.forEach( evt => {
            if(evt.eid === eid){
                evtList.navigation.navigate('ScreenEventInfo', {event: evt, gid, navigation: evtList.navigation, origin: 'events'})
            }
        })
    }

    return (
        <View style={{width:'100%'}}>
            { events != undefined &&
                events.map( ({ nameEvent, color, startDate, eid, participants, paid }) => {
                    return <View key={eid} style={{flexDirection:'row', paddingTop: 10, paddingLeft: 10}}>
                                <TouchableOpacity style={{flexDirection: 'row', paddingTop: 5}} onPress={() => {goToEventInfo(eid)}}>
                                    <View style = {{...styleListGroups.avatarListItemParticipants, backgroundColor: color}}></View>
                                    <View style={{width: '80%', marginTop: 5}}>
                                        <Textapp text={(nameEvent.length < 25) ? nameEvent : `${nameEvent.substring(0, 25)}...`} styles={{marginTop:10, marginLeft: 10}} weight={'bold'} size={17}/>
                                        <View style={{flexDirection: 'row'}}>
                                            <Textapp text={startDate} styles={{marginLeft: 10, color: '#4F4F4F'}}/>
                                            {isParticipant(participants, user.uid, paid) && <Textapp text='Suscribed' styles={{fontSize: 13, fontWeight: 'bold', color: '#36ACA5', backgroundColor: '#268b8521', height: 20, width: 80, borderRadius: 10, textAlign: 'center', textAlignVertical: 'center', left: 5}}/>}
                                        </View>
                                    </View>
                                    <View style={{position: 'absolute', right: 15, top: 27}}>
                                        <LeftArrow />
                                    </View>
                                </TouchableOpacity>
                            </View>
                })
            }

        </View>
    )
}
