import React, { useEffect, useState } from 'react'
import { Image, ScrollView, View, Clipboard, TouchableOpacity} from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { MenuScreenChat } from '../stack-primary/MenuScreenChat'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { db } from '../../firebase/firebase-config'
import { useSelector } from 'react-redux'
import { Toastapp } from '../elements/ToastApp'
import { TextInputApp } from '../elements/TextInputApp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { IconCopy } from '../icons/IconCopy'
import { useActiveEvent } from '../../hooks/useActiveEvent'
import { ParticipantsColumn } from './ParticipantsColumn'
import { StarEnabled } from '../icons/StarEnabled'
import { StarDisabled } from '../icons/StarDisabled'
import { LeftArrow } from '../icons/IconLeft'
import { formatDateCustom } from '../../helpers/formatDateCustom'
import moment from 'moment'
import { ScreenAgenda } from './ScreenAgenda'


export const ScreenChatInfo = ({ navigation, route }) => {
    const { params } = route;

    const { name,participants, id} = params;
    const {groupReducer} = useSelector(state => state)
    const [codeF, setCodeF] = useState('')
    const userLoged = useSelector(state => state.authRed )
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)
    const [infoGroup, setInfoGroup] = useState({...params})
    const { activeEvent } = useActiveEvent({ id })
    const [activeEvents, setActiveEvents] = useState([])
    const [star, setStar] = useState(true)
    const [ calendarVisible, setCalendarVisible ] = useState(false)
    const [ isAdmin, setIsAdmin ] = useState(false)
    
    const handleListEvents =  () => {
        navigation.navigate('ScreenListEvents', {gid: id});
    }

    const handleModalEdit = () => {
        navigation.navigate('ModalEditInfo', {name: infoGroup.name, description: infoGroup.description, image: infoGroup.image, id})
    }

    const handlecopyToClipboard = () => {
        Clipboard.setString( codeF)
        setVisible(true)
        setMessages([...messages, 'Code copied!' + Math.random()])
    }
    
    useEffect(() => {
        setCodeF(infoGroup.code)
        if( userLoged.uid !== null ) {
            if(userLoged.uid === infoGroup.creator) {
                setIsAdmin(true)
            }
        } 
    }, [infoGroup.code, infoGroup.creator])

    useEffect(() => {
        if(!!groupReducer.listGroup){
            const group = groupReducer.listGroup.find(g => id == g.gid)
            if(!!group){
                setInfoGroup(group)
            }
        }
    }, [groupReducer.listGroup])
    
    useEffect(() => {
        if( !!id ) {
            db.collection('groups')
                .doc( id )
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
                    setStar(events.length !== 0)
                })
        }
    }, [activeEvents.length])
    
    return (
        <View style={{flex: 1,backgroundColor: 'white'}}>
            <Image style = {{
                position: 'absolute',
                top:0,
                left:0,
                width: '100%',
                height: 225,
                borderBottomLeftRadius:25,
                borderBottomRightRadius:25,
               }} 
                source = {{ uri: infoGroup.image }} />
                <MenuScreenChat navigation={navigation} name = {name} isAdmin={isAdmin} hanldeEditGroup={handleModalEdit} setCalendarVisible={setCalendarVisible}/>
            <ScrollView style={{flex:1, marginTop: (isAdmin) ? 10 : 50, paddingBottom: 10}} nestedScrollEnabled = {true}>
                <View style={{alignItems: 'center', paddingHorizontal:13}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Textapp 
                            size = { TEXTS_SIZE.medium } 
                            weight='bold' 
                            text ={(infoGroup.name.length > 20) ? `${infoGroup.name.substring(0,20)}...` : infoGroup.name} 
                            styles={{textAlign: 'center', padding: 10}} 
                        />
                    </View>
                    <Textapp 
                        size = { TEXTS_SIZE.small } 
                        text ={infoGroup.description} 
                        styles={{width:'100%', padding: 10}} 
                    />

                </View>
                <View style={{width: '100%', borderTopColor: '#EEEEEC', borderTopWidth: 1, borderBottomColor: '#EEEEEC', borderBottomWidth: 1}}>
                    <TouchableOpacity style={{flexDirection: 'row', paddingTop: 8, paddingBottom: 8}} onPress={handleListEvents}>
                        <View style={{justifyContent: 'center', paddingLeft: 10, paddingTop: 5}}>
                            {
                                (star) ? <StarEnabled/> : <StarDisabled/>
                            }
                        </View>
                        <Textapp 
                            size = { 23 } 
                            weight='bold' 
                            text ={(star) ? 'Group events' : 'There are no events'}
                            styles={{textAlign: 'left'}} 
                        />
                        <View style={{position: 'absolute', right: 15, top: 18}}>
                            {
                                (star) && <LeftArrow />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                {
                        (isAdmin) &&   <View style={{alignItems: 'center'}}>
                                                <TextInputApp 
                                                    placeholder={codeF}
                                                    height={110}
                                                    size={TEXTS_SIZE.long}
                                                    weight={'bold'}
                                                    color={COLORS_APP.green}
                                                    styleT={{ 
                                                        width: '90%',
                                                        borderTopRightRadius: 10,
                                                        borderBottomRightRadius: 10,
                                                        borderBottomLeftRadius: 10,
                                                        borderTopLeftRadius: 10,
                                                        backgroundColor: '#F9F9F9',
                                                        paddingLeft: 90
                                                    }}
                                                    editable={false}
                                                />    
                                                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 10, marginBottom: 10}}>
                                                        <ButtonGradient
                                                            IconLeft={IconCopy}
                                                            gradient={['#F3F7FE','#F3F7FE']}
                                                            sizeGradient = {{width:350, height:50}}
                                                            textButton={`Copy code`}
                                                            styleText={{color:'black', marginLeft: 10}}
                                                            styleButton={{width:350, height:50,justifyContent:'center', }}
                                                            hanldeOnPress = { handlecopyToClipboard }
                                                        />
                                                </View>
                                            </View>
                }
                {
                    visible && messages.map((message) => (
                                    <Toastapp
                                        key={message}
                                        message={'Code copied!'}
                                        onHide={() => {
                                        setMessages((messages) =>
                                            messages.filter(
                                                (currentMessage) =>
                                                currentMessage !== message
                                        ));
                                    }}
                                    />
                                ))
                }

                <Textapp 
                    size = { TEXTS_SIZE.small } 
                    weight='bold' 
                    text ={participants.length +' Participants'} 
                    styles={{paddingTop:13, paddingLeft: 13}} 
                />
                <ParticipantsColumn groupMembers={participants} colorColorBordersAvatars = {'white'} type={'members'}/>
                
            </ScrollView>
            { calendarVisible && <ScreenAgenda id={id} calendarVisible={calendarVisible} setCalendarVisible={setCalendarVisible}/>}
        </View>
    )
}
