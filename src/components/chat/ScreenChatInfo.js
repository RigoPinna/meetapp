import React, { useEffect, useRef, useState } from 'react'
import { Button, Image, ScrollView, View, Clipboard} from 'react-native'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styleListGroups } from '../../theme/appTheme'
import { Buttonapp } from '../elements/Buttonapp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { IconArrowLeftSimple } from '../icons/IconArrowLeftSimple'
import { ListParticipants } from '../listgGroup/ListParticipants'
import { MenuScreenChat } from '../stack-primary/MenuScreenChat'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { AlertEvent } from './AlertEvent'
import { db, userStatic } from '../../firebase/firebase-config'
import { getIdEvent, getEvent } from '../../helpers/getIdEvent'
import { useSelector } from 'react-redux'
import { Toastapp } from '../elements/ToastApp'
import { TextInputApp } from '../elements/TextInputApp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { IconCopy } from '../icons/IconCopy'
import { useActiveEvent } from '../../hooks/useActiveEvent'


export const ScreenChatInfo = ({ navigation, route }) => {
    const { params } = route;
    const { name,description,participants, image, id} = params;
    const [codeF, setCodeF] = useState('')
    const userLoged = useSelector(state => state.authRed )
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)
    const { activeEvent } = useActiveEvent({ id })
    const getCode = async () => {
        if( userLoged.uid !== null ) {
            const groupRef = db.collection('groups').doc(id);
            const doc = await groupRef.get();
            if(doc.exists){
                const data = doc.data();
                const participants = JSON.parse( data.participants );
                const {uid,name,image} = participants[0];

                if(userLoged.uid === uid) {
                    const code = data.code;
                    setCodeF(code)
                }
            }
        } 
    }
    

    const handlecopyToClipboard = () => {
        Clipboard.setString( codeF)
        setVisible(true)
        setMessages([...messages, 'Code copied!' + Math.random()])
    }


    useEffect(() => {
        getCode();
    }, [])


    const hanldeGoToModal = () => {
        navigation.navigate('ModalParticipants',{participants})
    }
    return (
        <View style={{flex: 1, backgroundColor:'white'}}>
            
            <Image style = {{
                position: 'absolute',
                top:0,
                left:0,
                width: '100%',
                height: 225,
                borderBottomLeftRadius:25,
                borderBottomRightRadius:25,
               }} 
                source = {{ uri: image }} />
                <MenuScreenChat navigation={navigation} name = {name} id={id}/>
            <ScrollView style={{flex:1, marginTop:145, padding:10 }}>
                <View style={{alignItems: 'center', paddingHorizontal:13}}>
                    <Textapp 
                        size = { TEXTS_SIZE.medium } 
                        weight='bold' 
                        text ={name} 
                        styles={{width:'100%', textAlign: 'center', padding: 10}} 
                    />
                    <Textapp 
                        size = { TEXTS_SIZE.small } 
                        text ={description} 
                        styles={{width:'100%'}} 
                    />

                </View>
                <Textapp 
                        size = { TEXTS_SIZE.small } 
                        weight='bold' 
                        text ={'Participants'} 
                        styles={{padding:13}} 
                    />
                <View style={{justifyContent:'flex-start', paddingTop: 30,width:140}}>
                    <ListParticipants participants={ participants } colorColorBordersAvatars = {'white'} />
                    <Buttonapp
                        styleT={{backgroundColor:'transparent',width:'100%',marginLeft:10,marginTop:-35}}
                        onPress={hanldeGoToModal}
                    />
                </View>
                {
                ( !!activeEvent ) && <AlertEvent event = { activeEvent }/>
                }
                {
                        (codeF !== '') &&   <>
                                                <TextInputApp 
                                                    placeholder={codeF}
                                                    height={150}
                                                    size={TEXTS_SIZE.long}
                                                    weight={'bold'}
                                                    color={COLORS_APP.green}
                                                    styleT={{ 
                                                        width: '100%',
                                                        borderTopRightRadius: 10,
                                                        borderBottomRightRadius: 10,
                                                        borderBottomLeftRadius: 10,
                                                        borderTopLeftRadius: 10,
                                                        backgroundColor: '#F9F9F9',
                                                        paddingLeft: 90
                                                    }}
                                                    editable={false}
                                                />    
                                                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35,}}>
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
                                            </>
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
            </ScrollView>
        </View>
    )
}
