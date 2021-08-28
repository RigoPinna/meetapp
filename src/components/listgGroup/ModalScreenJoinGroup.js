import React, { useState,useRef,useEffect } from 'react'
import {  Animated } from 'react-native'
import { styles2 } from '../../theme/appTheme'
import { SetpCreation } from './SetpCreation'
import { StepCreated } from './StepCreated'

export const ModalScreenJoinGroup = ({navigation}) => {
    const [steps, setStep] = useState({ stepCreation: true, stepCreated: false});
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
                {
                    steps.stepCreation 
                        && <SetpCreation steps = { steps } setStep = { setStep } />
                }
                {
                    steps.stepCreated 
                        && <StepCreated steps = { steps } setStep = { setStep } />
                }
        </Animated.View >       
    );
}