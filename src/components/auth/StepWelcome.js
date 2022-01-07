import React, { useState } from 'react'

import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Textapp } from '../elements/Textapp'
import { HeaderDecoration } from './HeaderDecoration'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconArrowRight } from '../icons/IconArrowRight'
import { IconApp } from '../IconApp'
import { ScreenLogin } from '../Login/ScreenLogin'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const StepWelcome = ({ steps, setStep }) => {
    const [stepLogin, setStepLoging] = useState({stepGo: false, stepBack: true})
    const hanldeGoToNextStep = () => {
        setStep({...steps, ...{stepInfoProfile: true, stepWelcome:false }})
    }
    const handleGoToLogin = () => {
        setStepLoging({...stepLogin, ...{stepGo: true, stepBack:false }})
    }
    return (
        <>
            {
                stepLogin.stepBack && <>
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
                                    textButton={`Let's start`}
                                    styleText={{color:'white', fontWeight:'bold',}}
                                    styleButton={{width:200, height:40, backgroundColor:'pink'}}
                                    IconRight = { IconArrowRight }
                                    hanldeOnPress = { hanldeGoToNextStep }
                                />
                                <Textapp
                                    size = { TEXTS_SIZE.small }
                                    weight = {'normal'}
                                    text = {'OR'}
                                    color = { COLORS_APP.black3 }
                                    styles = { { padding:10, textAlign: 'center', width:'100%', marginBottom:10, marginTop:30} }
                                />
                                <ButtonGradient 
                                    gradient={['#0ACFFE','#49B6DA']}
                                    sizeGradient = {{width:200, height:40}}
                                    textButton={`Go to Login`}
                                    styleText={{color:'white', fontWeight:'bold',}}
                                    styleButton={{width:200, height:40, backgroundColor:'pink', marginTop: 20}}
                                    IconRight = { IconArrowRight }
                                    hanldeOnPress = { handleGoToLogin }
                                />
                            </>
            }
            {
                stepLogin.stepGo && <ScreenLogin stepLogin={stepLogin} setStepLogin={setStepLoging}/>

            }
        </>
    )
}
