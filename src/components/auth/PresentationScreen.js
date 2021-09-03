import React, { useState, useEffect, useRef, useReducer } from 'react';
import { ContextRegister } from '../../context-register-user/ContextRegister';
import { Animated, SafeAreaView, ScrollView, View } from 'react-native';
import { styles2 } from '../../theme/appTheme';
import { StepInfoProfile } from './StepInfoProfile.js';
import { StepRegisterUser } from './StepRegisterNumber';
import { StepWelcome } from './StepWelcome';
import { initialState, registerReducer } from '../../reducers/registerReducer';


export const PresentationScreen = () => {
    const [ dataRegister, dispatch ] = useReducer(registerReducer,initialState );
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
            <ContextRegister.Provider value ={{ dataRegister, dispatch }}>
                {
                    steps.stepWelcome 
                        && <StepWelcome steps = { steps } setStep = { setStep } />
                }
                <SafeAreaView>
                    <ScrollView>
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
                    </ScrollView>
                </SafeAreaView>
            </ContextRegister.Provider>
        </Animated.View >
    )
}
