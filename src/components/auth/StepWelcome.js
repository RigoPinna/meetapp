import React from 'react'
import { Image, View,StyleSheet } from 'react-native'
import { styles2 } from '../../theme/appTheme'

import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Buttonapp } from '../elements/Buttonapp'
import { Textapp } from '../elements/Textapp'
import { BlurView } from 'expo-blur';
import { HeaderDecoration } from './HeaderDecoration'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconArrowRight } from '../icons/IconArrowRight'
import { IconApp } from '../IconApp'
export const StepWelcome = ({ steps, setStep }) => {
    const hanldeGoToNextStep = () => {
        setStep({...steps, ...{stepInfoProfile: true, stepWelcome:false }})
    }
    return (
        <>
           <HeaderDecoration />
           <IconApp position={{position:'absolute',top:0,left:0, marginTop:150}} />
           
            <Textapp
                size = { TEXTS_SIZE.medium }
                weight = {'bold'}
                text = {'Welcome to meetapp'}
                color = { COLORS_APP.black1 }
                styles = { { marginTop: 5} }
            />
            <Textapp
                size = { TEXTS_SIZE.small }
                weight = {'normal'}
                text = {'Organize your friends, family or work groups. Create or join a group chat.'}
                color = { COLORS_APP.black3 }
                styles = { { padding:10, textAlign: 'center', width:'100%', marginBottom:30, marginTop:30} }
            />
            <ButtonGradient 
                gradient={['#48C6EF','#6F86D6']}
                sizeGradient = {{width:200, height:40}}
                textButton={`Let's go`}
                styleText={{color:'white', fontWeight:'bold',}}
                styleButton={{width:200, height:40, backgroundColor:'pink'}}
                IconRight = { IconArrowRight }
                hanldeOnPress = { hanldeGoToNextStep }
            />
        </>
    )
}
