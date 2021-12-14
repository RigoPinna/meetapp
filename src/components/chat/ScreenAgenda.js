import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { AgendaApp } from '../elements/AgendaApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { CalendarApp } from '../elements/CalendarApp'
import { Textapp } from '../elements/Textapp'
import { IconClose } from '../icons/IconClose'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import * as Progress from 'react-native-progress';
import { db } from '../../firebase/firebase-config'

export const ScreenAgenda = ({route}) => {
    const [state, setstate] = useState('')
    const {params} = route;
    const {id} = params
    const[ loading, setLoading ] = useState( true );
    const navigation = useNavigation()
    const [events, setEvents] = useState(undefined)

    useEffect(() => {
        (state !== null) && setLoading(false)
        db.collection('groups').doc(id).collection('event').orderBy('startDate', 'asc').onSnapshot((snapshot) =>{
            const eventsGet = snapshot.docs.map(doc => {
                const data = doc.data()
                return {
                    mid: doc.id,
                    ...data
                }
            });
            setEvents(eventsGet)
            // console.log('evento',events)
       })
    }, [])
    return (
        <>
        {
            (loading === true ) 
            ?   <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Progress.CircleSnail spinDuration={1000} color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
                </View>
            :   <>
                <View style={{width: '100%',height: '94%'}}>
                    {
                        !!events && <AgendaApp event = {events}/>
                    }

                </View>
                <View style={{...styles.header, justifyContent: 'center', backgroundColor: '#F5F7FA'}}>
                                
                    <ButtonGradient
                                        gradient={['#FF3838','#FF3838']}
                                        sizeGradient = {{ width:205, height:45 }}
                                        styleButton = {{ width:205, height:45, alignItems: 'center',justifyContent: 'center'}}
                                        // IconLeft = { IconClose }
                                        textButton={'Close'}
                                        styleText={{color:'white',fontWeight:'bold'}}
                                        hanldeOnPress = { () => { 
                                            navigation.goBack(); 
                                            // (!!handle) && handle()
                                        } }
                                        colorIcon = {COLORS_APP.black2}    
                    />
                                
                </View>
                </>
        }
        
        </>

    )
}
