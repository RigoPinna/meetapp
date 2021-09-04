import React, { useState } from 'react'
import { ModalApp } from '../elements/ModalApp';
import { StepJoin } from './StepJoin'
import { StepJoined } from './StepJoined'

export const ModalScreenJoinGroup = ({navigation}) => {
    const [steps, setStep] = useState({ stepJoin: true, stepJoined: false});
     return (
        <ModalApp styleContainer={{height: '70%', marginBottom: 150,borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,}} navigation={navigation} textTitle={'Join Group'}>
            {
                steps.stepJoin 
                    && <StepJoin steps = { steps } setStep = { setStep }/>
            }
            {
                steps.stepJoined 
                    && <StepJoined steps = { steps } setStep = { setStep }/>
            }
        </ModalApp>    
    );
}