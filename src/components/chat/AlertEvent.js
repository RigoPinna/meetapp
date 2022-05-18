import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { ButtonGradient } from '../elements/ButtonGradient'
import { useDispatch, useSelector } from 'react-redux'
import { joinEvent } from '../../reducers/eventReducer'
import { leaveEvent } from '../../reducers/eventReducer'
import { db } from '../../firebase/firebase-config'

export const AlertEvent = ({ event }) => {
    const dispatch = useDispatch();
    const user = useSelector( state => state.authRed )
    const [ suscribed, setSuscribed ] = useState(false)

    useEffect(()=> {
        if(event.gid != undefined && user.uid != undefined && user.uid != undefined) {
            db.collection('groups').doc(event.gid).collection('event').doc(event.eid).onSnapshot( querySnapshot => {
                const data = querySnapshot.data();
                if(data != undefined){
                    const participantes = JSON.parse((data.participants != undefined) ? data.participants : '[]');
                    if(participantes.length != 0){
                        setSuscribed(participantes.some( p => p === user.uid));
                    } else {
                        setSuscribed(false);
                    }
                } 
            } )
        }
    }, [event.gid, event.eid, user.uid])
    
    const jEvent = () => {
        dispatch( joinEvent( {...event, uid: user.uid} ) );
    }

    const lEvent = () => {
        dispatch( leaveEvent( {...event, uid: user.uid} ) );
    }

    return (
        <View style={{width: '100%', minHeight: 100,padding: 10,marginTop:10, borderRadius:20, overflow: 'hidden', position: 'relative'}}>
            <LinearGradient colors={['#FFECD2','#FCB69F']} 
                style={{ 
                width: '110%', 
                height: '130%', 
                position:'absolute',
                }}/>
                 <Textapp 
                    size= {TEXTS_SIZE.extraMedium} 
                    color = {COLORS_APP.black2}
                    text = {event.nameEvent}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    color = {COLORS_APP.black2}
                    text = { `This event start  on ${event.formatPeople}`}
            />
            <Textapp 
                    size= {TEXTS_SIZE.extraMedium} 
                    styles = {{marginTop: 10}}
                    color = {COLORS_APP.black2}
                    text = {'Description:'}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    color = {COLORS_APP.black2}
                    text = {event.description}
            />
            <View >
                {suscribed ?
                    <ButtonGradient
                        styleOpacity={{alignSelf: 'flex-end'}}
                        gradient={['#fff','#fff']}
                        sizeGradient = {{width:160, height:40}}
                        textButton={`Leave event`}
                        styleText={{color:'red', fontWeight:'bold'}}
                        styleButton={{width:160,height:40, justifyContent:'center'}}
                        hanldeOnPress = { lEvent }
                    />
                    :
                <ButtonGradient
                        styleOpacity={{alignSelf: 'flex-end'}}
                        gradient={['#fff','#fff']}
                        sizeGradient = {{width:160, height:40}}
                        textButton={`Subsribe to event`}
                        styleText={{color:'#4481EB', fontWeight:'bold'}}
                        styleButton={{width:160,height:40, justifyContent:'center'}}
                        hanldeOnPress = { jEvent }
                    />
                }
            </View> 
        </View>
    )
}
