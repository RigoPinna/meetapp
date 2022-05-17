import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text} from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { LinearGradient } from 'expo-linear-gradient';
import { Textapp } from '../elements/Textapp';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { db } from '../../firebase/firebase-config'
import { ParticipantsColumn } from './ParticipantsColumn'
import { useDispatch, useSelector } from 'react-redux'
import { joinEvent } from '../../reducers/eventReducer'
import { leaveEvent } from '../../reducers/eventReducer'
import { MenuProvider } from 'react-native-popup-menu';
import { RecurrenceInfo } from './RecurrenceInfo';

export const ScreenEventInfo = ({ route }) => {
    const { gid, event, navigation, origin } = route.params;
    const dispatch = useDispatch();
    const user = useSelector( state => state.authRed )
    const [ suscribed, setSuscribed ] = useState(false)
    const {eid, nameEvent, color, description, paid, startDate, startTime, recurrence} = event;
    const [participants, setParticipants] = useState([]);
    const info = JSON.parse((recurrence != undefined) ? recurrence : '[]');
    const [recurrenceInfo, setRecurrenceInfo] = useState({startDate: startDate, startTime: startTime,type: info[0].type, typeDuration: info[0].typeDuration, repeat: info[0].repeatTimes, duration: info[0].duration, when: info[0].when});
    const [ isCreator, setIsCreator ] = useState(false);

    useEffect(()=> {
        if(gid != undefined && user.uid != undefined && eid != undefined) {
            db.collection('groups').doc(gid).onSnapshot( querySnapshot => {
                const data = querySnapshot.data();
                setIsCreator(data.creator == user.uid);
            } )
            db.collection('groups').doc(gid).collection('event').doc(eid).onSnapshot( querySnapshot => {
                const data = querySnapshot.data();
                if(data != undefined){
                    const participantes = JSON.parse((data.participants != undefined) ? data.participants : '[]');
                    if(participantes.length != 0){
                        if(paid){
                            setSuscribed(participantes.some( ({uid}) => uid === user.uid));
                        } else {
                            setSuscribed(participantes.some( p => p === user.uid));
                        }
                        setParticipants(participantes);
                    } else {
                        setSuscribed(false);
                        setParticipants([]);
                    }
                } 
            } )
        }
    }, [gid, eid, user.uid])

    const jEvent = () => {
        dispatch( joinEvent( {gid, eid, uid: user.uid, paid: event.paid} ) );
    }

    const lEvent = () => {
        dispatch( leaveEvent( {gid, eid, idUser: user.uid, paid: event.paid} ) );
    }

    return (
        <MenuProvider>
            <View style={{flex: 1, backgroundColor:'white'}}>
                <LinearGradient locations={[0.2,1]} colors={['rgba(0,0,0,0)', 'transparent']} style={{flexDirection:'row', padding:13, width:'100%', height:60, justifyContent: 'flex-start'}} >
                    <ButtonGradient 
                            gradient ={['#F3F7FE','#F3F7FE']}
                            sizeGradient = {{width:50, height:50}}
                            styleText={{color:'white', fontWeight:'bold',}}
                            styleButton={{width:35, height:35, backgroundColor:'pink'}}
                            IconRight = { IconArrowLeftSimple }
                            colorIcon = {'#35A8FD'}
                            hanldeOnPress = { () => {
                                if(origin === 'calendar'){
                                    navigation.navigate('ScreenListGroups')
                                } 
                                navigation.goBack();
                            } }
                        />
                    <View style={{backgroundColor: color, height: 25, width: 25, borderRadius: 50, marginLeft: 10, marginTop: 8}}></View>
                    <Text numberOfLines={1} style={{fontWeight:'bold', height: 30, textAlignVertical: 'center', fontSize: 20, marginTop: 5, marginLeft: 8}}>{nameEvent}</Text> 
                    <View style={{position: 'absolute', right: 10, height:60, justifyContent: 'center'}}>
                        {suscribed ?
                            <ButtonGradient
                                styleOpacity={{alignSelf: 'flex-end'}}
                                gradient={['#FFDCDC','#FFDCDC']}
                                sizeGradient = {{width:120, height:30}}
                                textButton={`Leave event`}
                                styleText={{color:'red', fontWeight:'bold'}}
                                styleButton={{width:120,height:30, justifyContent:'center'}}
                                hanldeOnPress = { () => lEvent()}
                            />
                            :
                        <ButtonGradient
                                styleOpacity={{alignSelf: 'flex-end'}}
                                gradient={['#E3F0EF','#E3F0EF']}
                                sizeGradient = {{width:160, height:30}}
                                textButton={`Subsribe to event`}
                                styleText={{color:'#36ACA5', fontWeight:'bold'}}
                                styleButton={{width:160,height:30, justifyContent:'center'}}
                                hanldeOnPress = { () => jEvent()}
                            />
                        }
                    </View> 
                </LinearGradient>
                <ScrollView style={{flex:1, marginTop:0, paddingTop:10, paddingBottom: 10}}>
                    {paid && <View style={{marginLeft: 10, backgroundColor: '#C9E8FF', width: 168, borderRadius: 10, justifyContent: 'center', height: 25}}><Textapp text={'This event is payable'} styles={{marginLeft: 10, color: '#158BFC', fontSize: 14}} weight={'bold'}/></View>}
                    <View style={{alignItems: 'center', width: '100%'}}>
                        <Textapp 
                                size = { 16 } 
                                text ={description} 
                                styles={{width:'95%', padding: 10, textAlign: 'justify'}} 
                            />
                        <View style={{backgroundColor: '#F3F7FE', width: '95%', height: 250, borderRadius: 10}}>
                                <RecurrenceInfo recurrence = {recurrenceInfo} />
                        </View>
                        
                        <Textapp 
                            size = { TEXTS_SIZE.small } 
                            weight='bold' 
                            text ={`${participants.length} Participants`} 
                            styles={{paddingTop:13, paddingLeft: 13, width: '98%'}} 
                        />
                        <ParticipantsColumn eventParticipants={participants} type={'participants'} colorColorBordersAvatars = {'white'} isCreator={isCreator} eid={eid} gid={gid} needPaid={paid}/>
                    </View>
                </ScrollView>
            </View>
        </MenuProvider>
    )
}
