import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, View, Text, BackHandler} from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { LinearGradient } from 'expo-linear-gradient';
import { Textapp } from '../elements/Textapp';
import { EventsColumn } from './EventsColumn';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { useIsFocused } from "@react-navigation/native";
import { db } from '../../firebase/firebase-config'
import { formatDateCustom } from '../../helpers/formatDateCustom'
import moment from 'moment'


export const ScreenEvents = ({ navigation, route }) => {
    const isFocused = useIsFocused();
    const { params } = route;
    const { gid } = params;
    const [activeEvents, setActiveEvents] = useState([])

    useEffect(()=> {
        if( !!gid ) {
            db.collection('groups')
                .doc( gid )
                .collection('event')
                .orderBy('startDate', 'desc')
                .onSnapshot(( snapshot ) => {
                    const evt  = snapshot.docs.map( doc => {
                        const evt = {...doc.data() }
                        const { formatCalendar, dateNowForated } = formatDateCustom( evt.startDate )
                        if ( moment( dateNowForated ).isBefore( formatCalendar ) || moment( formatCalendar ).isSame( dateNowForated )) {
                            return {...evt, eid: doc.id}
                        }
                    })
                    const events = evt.filter( e => !!e )
                    setActiveEvents(events);
                })
        }

    }, [navigation, route, isFocused])

    return (
        <View style={{flex: 1, backgroundColor:'white'}}>
            <LinearGradient locations={[0.2,1]} colors={['rgba(0,0,0,0)', 'transparent']} style={{flexDirection:'row', padding:13, width:'100%', height:60, justifyContent: 'flex-start'}} >
                <ButtonGradient 
                        gradient ={['#F3F7FE','#F3F7FE']}
                        sizeGradient = {{width:50, height:50}}
                        styleText={{color:'white', fontWeight:'bold',}}
                        styleButton={{width:35, height:35, backgroundColor:'pink'}}
                        IconRight = { IconArrowLeftSimple }
                        colorIcon = {'#35A8FD'}
                        hanldeOnPress = { () => navigation.goBack()}
                        
                    />
                <Text numberOfLines={1} style={{fontWeight:'bold', height: 30, textAlignVertical: 'center', fontSize: 20, paddingLeft: 8, paddingTop: 2}}> Events for Group Name</Text> 
            </LinearGradient>
            <ScrollView style={{flex:1, marginTop:10, paddingTop:10, paddingBottom: 10 }} nestedScrollEnabled = {true}>
                <Textapp text={activeEvents.length + ' events'} styles={{marginLeft: 10, color: '#4F4F4F', paddingLeft: 10}} size={TEXTS_SIZE.medium} />
                <EventsColumn events={activeEvents} gid={gid} navigation={navigation} colorColorBordersAvatars = {'white'}/>
            </ScrollView>
        </View>
    )
}
