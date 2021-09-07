import React, { useState,useRef,useEffect, useContext } from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { styles, styles2 } from '../../theme/appTheme'
import {  View, Image, Animated, Clipboard } from 'react-native'
import { IconCopy } from '../icons/IconCopy'
import { Toastapp } from '../elements/ToastApp'
import { ContextRegisterGroup } from '../../context-register-group/ContextRegisterGroup'

export const StepCreated = ({steps, setStep }) => {
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)
    const { dataRegister } = useContext( ContextRegisterGroup );
    const handlecopyToClipboard = () => {
        Clipboard.setString(dataRegister.code)
        setVisible(true)
        setMessages([...messages, 'Code copied!' + Math.random()])
    }

    const opacity = useRef(new Animated.Value(0) ).current;
    useEffect(() => {
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:500,
                useNativeDriver:true,
            }
        ).start();
    }, [])

    return (
        <Animated.View style = {{...styles2.wrapperPresentation, opacity:opacity, backgroundColor:'transparent'}}>
            <Textapp
                text={'The group has been successfully created!'}
                color={COLORS_APP.green}
                styles={{margin: 10}}
                size={TEXTS_SIZE.small}
            />
            <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                <Image
                        style={styles.tinyLogo}
                        source = {
                                dataRegister.image === '' 
                                    ? require('../../assets/genericGroup.png')
                                    : {uri:dataRegister.image}
                                }
                        
                    />
            </View>
                <View style={{marginTop: 10}}>
                    <Textapp 
                        size={TEXTS_SIZE.medium}
                        text={dataRegister.name}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={'Use this code to let your friends join your group'}
                        color={COLORS_APP.black2}
                    />
                </View>
                <TextInputApp 
                        placeholder={dataRegister.code}
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
                            paddingLeft: 60
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
                                            )
                                            );
                                        }}
                                        />
                                    ))
                }
        </Animated.View >
    )
}
