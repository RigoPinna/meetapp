import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { AgendaApp } from '../elements/AgendaApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { COLORS_APP } from '../ui/COLORS_APP'
import * as Progress from 'react-native-progress';
import { db } from '../../firebase/firebase-config'
import { Modal } from 'react-native'
import { styleCalendar } from '../../theme/appTheme'
import { IconClose } from '../icons/IconClose'

export const ScreenAgenda = ({id, calendarVisible, setCalendarVisible}) => {
    const [state, setstate] = useState('')
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
       })
    }, [])
    
    return (
        <Modal animationType="slide" transparent={true} visible={calendarVisible} onRequestClose={() => {setCalendarVisible(false)}}>
            <View style={ styleCalendar.backgroundAgenda }>
                <View style={ styleCalendar.wrapperModal }>
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
                        <View style={{position: 'absolute', top:8, right:8,}}>
                            <ButtonGradient 
                                gradient={['#F3F7FE','#F3F7FE']}
                                sizeGradient = {{ width:35, height:35 }}
                                styleButton = {{ width:35, height:35, alignItems: 'center',justifyContent: 'center'}}
                                IconLeft = { IconClose }
                                hanldeOnPress = {() => setCalendarVisible(false) }
                                colorIcon = {COLORS_APP.black2}    
                            />
                        </View>
                        </>
                }
                </View>
            </View>
        </Modal>
    )
}
