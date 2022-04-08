import React, { useEffect, useRef, useState } from 'react'
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

export const ScreenEventInfo = ({ route }) => {
    const { gid, event, navigation } = route.params;
    const dispatch = useDispatch();
    const user = useSelector( state => state.authRed )
    const [ suscribed, setSuscribed ] = useState(false)
    const {eid, nameEvent, color, description } = event;
    const [participants, setParticipants] = useState([]);

    useEffect(()=> {
        if(gid != undefined && user.uid != undefined) {
            db.collection('groups').doc(gid).collection('event').doc(eid).onSnapshot( querySnapshot => {
                const data = querySnapshot.data();
                if(data != undefined){
                    const participantes = JSON.parse((data.participants != undefined) ? data.participants : '[]');
                    if(participantes.length != 0){
                        setSuscribed(participantes.some( p => p === user.uid));
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
        dispatch( joinEvent( {gid, eid, uid: user.uid} ) );
    }

    const lEvent = () => {
        dispatch( leaveEvent( {gid, eid, uid: user.uid} ) );
    }

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
                <View style={{backgroundColor: color, height: 25, width: 25, borderRadius: 50, marginLeft: 10, marginTop: 8}}></View>
                <Text numberOfLines={1} style={{fontWeight:'bold', height: 30, textAlignVertical: 'center', fontSize: 20, marginTop: 5, marginLeft: 8}}>{nameEvent}</Text> 
                <View >
                    {suscribed ?
                        <ButtonGradient
                            styleOpacity={{alignSelf: 'flex-end'}}
                            gradient={['#fff','#fff']}
                            sizeGradient = {{width:160, height:40}}
                            textButton={`Leave event`}
                            styleText={{color:'red', fontWeight:'bold'}}
                            styleButton={{width:160,height:40, justifyContent:'center'}}
                            hanldeOnPress = { () => lEvent()}
                        />
                        :
                    <ButtonGradient
                            styleOpacity={{alignSelf: 'flex-end'}}
                            gradient={['#fff','#fff']}
                            sizeGradient = {{width:160, height:40}}
                            textButton={`Subsribe to event`}
                            styleText={{color:'#4481EB', fontWeight:'bold'}}
                            styleButton={{width:160,height:40, justifyContent:'center'}}
                            hanldeOnPress = { () => jEvent()}
                        />
                    }
                </View> 
            </LinearGradient>
            <ScrollView style={{flex:1, marginTop:10, paddingTop:10, paddingBottom: 10, backgroundColor: 'blue'}}>
                <View style={{alignItems: 'center', width: '100%'}}>
                    <Textapp 
                            size = { 16 } 
                            text ={description} 
                            styles={{width:'95%', padding: 10, textAlign: 'justify'}} 
                        />
                    <View style={{backgroundColor: '#F3F7FE', width: '95%', height: 250, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Textapp 
                                size = { TEXTS_SIZE.small } 
                                text ='Datos de fecha por definir' 
                                styles={{padding: 10, fontWeight: 'bold'}} 
                            />
                    </View>
                    <Textapp 
                        size = { TEXTS_SIZE.small } 
                        weight='bold' 
                        text ={participants.length +' Participants'} 
                        styles={{paddingTop:13, paddingLeft: 13, width: '98%'}} 
                    />
                    <ParticipantsColumn eventParticipants={participants} type={'participants'} colorColorBordersAvatars = {'white'}/>
                </View>
            </ScrollView>
        </View>
    )
}
