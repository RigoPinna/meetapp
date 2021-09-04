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

export const StepJoined = ({steps, setStep, groupData, setGroupData }) => {
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)

    const handlecopyToClipboard = () => {
        Clipboard.setString(groupData.code)
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
                text={'Congratulations!!'}
                color={COLORS_APP.green}
                styles={{margin: 10}}
                size={TEXTS_SIZE.small}
            />
            <Textapp
                text={'You are already part of the group:'}
                color={COLORS_APP.green}
                // styles={{margin: 10}}
                size={TEXTS_SIZE.small}
            />
            <View style={{alignItems:'flex-end', alignSelf: 'center', marginTop: 20}}>
                <Image
                        style={styles.tinyLogo}
                        // source = {
                        //         groupData.image === '' 
                        //             ? require('../../assets/genericGroup.png')
                        //             : {uri:groupData.image}
                        //         }
                        source = {require('../../assets/genericGroup.png')}
                        
                    />
            </View>
                <View style={{marginTop: 10}}>
                    <Textapp 
                        size={TEXTS_SIZE.medium}
                        text={'name group'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                </View>
                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35,}}>
                    <ButtonGradient
                        gradient={['#3CD2A5','#2FACA5']}
                        sizeGradient = {{width:350, height:50}}
                        textButton={`Accept`}
                        styleText={{color:'white'}}
                        styleButton={{width:350, height:50,justifyContent:'center', }}
                        // hanldeOnPress = { handlecopyToClipboard }
                    />
                </View>
        </Animated.View >
    )
}
