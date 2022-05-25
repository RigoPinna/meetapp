import React, { useState, useEffect, useRef } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
                <SafeAreaProvider style={{width: '100%'}}>
                    <ScrollView >
                            {
                                steps.stepWelcome 
                                    && <View style={{flex:1,alignItems:'center', position:'relative'}}>
                                            <StepWelcome steps = { steps } setStep = { setStep } />
                                        </View>
                            }
                            {
                                
                                steps.stepInfoProfile 
                                    && <View style={{alignItems:'center', position:'relative', width: '100%', height: 700,top: 20}}>
                                            <StepInfoProfile steps = { steps } setStep = { setStep } />
                                        </View>
                            }
                            {
                                steps.stepVerifyPhone 
                                    && <View style={{alignItems:'center', position:'relative', width: '100%', height: 700,top: 20}}>
                                            <StepRegisterUser />
                                        </View>
                            }

                    </ScrollView>
                </SafeAreaProvider>
        </Animated.View >
    )
}
