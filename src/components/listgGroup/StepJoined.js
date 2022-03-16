import React, { useState,useRef,useEffect } from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { styles, styles2 } from '../../theme/appTheme'
import {  View, Image, Animated, Clipboard } from 'react-native'
import { IconCopy } from '../icons/IconCopy'
import { Toastapp } from '../elements/ToastApp'

import { db } from '../../firebase/firebase-config'

export const StepJoined = ({steps, setStep}) => {
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)

    const gid = steps.gid;
    const gname = steps.gname;
    const gimage = steps.gimage;
    const desc = steps.description;


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
                text={'Congratulations!!'}
                color={COLORS_APP.green}
                styles={{margin: 10}}
                size={TEXTS_SIZE.small}
            />
            <Textapp
                text={'You are already part of the group:'}
                color={COLORS_APP.green}
                size={TEXTS_SIZE.small}
            />
            <View style={{alignItems:'flex-end', alignSelf: 'center', marginTop: 20}}>
                <Image
                        style={styles.tinyLogo}
                        source = {
                                gimage === '' 
                                    ? require('../../assets/genericGroup.png')
                                    : {uri:gimage}
                                }
                    />
            </View>
                <View style={{marginTop: 10}}>
                    <Textapp 
                        size={TEXTS_SIZE.long}
                        text={gname}
                        color={COLORS_APP.black1}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                </View>
                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 10,}}>
                    {/* <ButtonGradient
                        gradient={['#3CD2A5','#2FACA5']}
                        sizeGradient = {{width:350, height:50}}
                        textButton={`Accept`}
                        styleText={{color:'white'}}
                        styleButton={{width:350, height:50,justifyContent:'center', }}
                        // hanldeOnPress = { handlecopyToClipboard }
                    /> */}
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={desc}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                </View>
        </Animated.View >
    )
}
