import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, View } from 'react-native';


import { styles2 } from '../../theme/appTheme';
import { StepInfoProfile } from './StepInfoProfile.js';
import { StepRegisterUser } from './StepRegisterNumber';
import { StepWelcome } from './StepWelcome';


export const PresentationScreen = () => {
    const [steps, setStep] = useState({ stepWelcome: true, stepInfoProfile: false, stepVerifyPhone: false });
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

        
        <Animated.View style = {{...styles2.wrapperPresentation, opacity:opacity}}>
                {
                    steps.stepWelcome 
                        && <StepWelcome steps = { steps } setStep = { setStep } />
                }
            <SafeAreaView>
                <View style={{flex:1,alignItems:'center'}}>

                {
                    steps.stepInfoProfile 
                        && <StepInfoProfile steps = { steps } setStep = { setStep } />
                }
                {
                    steps.stepVerifyPhone 
                        && <StepRegisterUser steps = { steps } setStep = { setStep } />
                }
                </View>
            </SafeAreaView>
            </Animated.View >
    )
}
