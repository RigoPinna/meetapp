import React, { useState } from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import {  View } from 'react-native'
import { IconKey } from '../icons/IconKey'
import { useSelector } from 'react-redux'

import { db } from '../../firebase/firebase-config'

import { Toastapp } from '../elements/ToastApp'

export const StepJoin = ({steps, setStep}) => {
    const [code, setCode] = useState('')
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false);

    const userLoged = useSelector(state => state.authRed )
    const handleOnChangeName = ( text ) => {
        setCode(text)
    }
    const changeParticipants = async(gid, allParticipants, gname, gimage, desc) => {
        await db.collection('groups').doc(gid).update({participants: allParticipants})
        setStep({...steps, ...{ stepJoin: false, stepJoined: true, gid: gid, gname: gname, gimage: gimage, description:desc}})
    }
    const hanldeGoToNextStep = async () => {
        if( userLoged.uid !== null ) {
            const groupRef = db.collection('groups');
            const snapshot = await groupRef.where('code', '==', code).get();

            if(snapshot.empty) {
                setVisible(true)
                setMessages([...messages, 'Wrong Code!' + Math.random()])
                return;
            } 
            snapshot.forEach(doc => {
                const data = doc.data();
                const codeGet = data.code;
                if(code === codeGet) {
                    const gid = doc.id;
                    const gname = data.name;
                    const gimage = data.image;
                    const participants = JSON.parse( data.participants );
                    const allParticipants = JSON.stringify([...participants, userLoged])
                    const desc = data.description;
                    changeParticipants(gid, allParticipants, gname, gimage, desc)
                }
            })
        }
    }

    return (
        <View style={{width: '100%', marginTop: (code!=='') ? 40 : 80}}>
                <View style={{marginTop: 20}}>
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={'Enter the code to join a group'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                    <TextInputApp 
                        IconPerson={IconKey}
                        placeholder={'Code'}
                        value={ code } 
                        onChange = { handleOnChangeName }
                        paddingLeftT={40}
                        styleT={{ 
                            width: '100%',
                            position: 'relative',
                            flexDirection:'row',
                            borderRadius: 100,
                            height: 50
                        }}
                        type={'numeric'}
                    />
                </View>
                {
                    (code!=='') &&  <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35}}>
                                        <ButtonGradient
                                            gradient={['#BA48EF','#E75551','#C86FD6']}
                                            sizeGradient = {{width:'110%', height:50}}
                                            textButton={`Join Group`}
                                            styleText={{color:'white', fontWeight:'bold',}}
                                            styleButton={{width:'100%', height:50}}
                                            hanldeOnPress = { hanldeGoToNextStep }
                                        />
                                    </View>
                }
                {
                    visible && messages.map((message) => (
                                    <Toastapp
                                        key={message}
                                        message={'Wrong Code!'}
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
        </View>
    )
}