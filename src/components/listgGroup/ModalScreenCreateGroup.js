import React, { useState, useReducer } from 'react'
import { ModalApp } from '../elements/ModalApp'
import { StepCreation } from './StepCreation'
import { StepCreated } from './StepCreated'
import { ContextRegisterGroup } from '../../context-register-group/ContextRegisterGroup';
import { initialState, groupReducer, cleanGroup } from '../../reducers/groupReducer';
import { useDispatch } from 'react-redux';

export const ModalScreenCreateGroup = ({navigation}) => {
    const [steps, setStep] = useState({ stepCreation: true, stepCreated: false});
    const dispatch = useDispatch();

    const clean = () => {
        dispatch(cleanGroup())
    }
     return (
        <ModalApp navigation={navigation} textTitle={'Create New Group'} handle = {clean}>
                {
                    steps.stepCreation 
                        && <StepCreation steps = { steps } setStep = { setStep } />
                }
                {
                    steps.stepCreated 
                        && <StepCreated />
                }
        </ModalApp>    
    );
}

