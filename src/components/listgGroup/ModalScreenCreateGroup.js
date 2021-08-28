import React, { useState } from 'react'
import { ModalApp } from '../elements/ModalApp'
import { SetpCreation } from './SetpCreation'
import { StepCreated } from './StepCreated'

export const ModalScreenCreateGroup = ({navigation}) => {
    const [steps, setStep] = useState({ stepCreation: true, stepCreated: false});
    const [ groupData, setGroupData ] = useState({nameGroup:'Name Group',image:'', description:'',code:''});
     return (
        <ModalApp navigation={navigation} textTitle={'Create Group'}>
            {
                steps.stepCreation 
                    && <SetpCreation steps = { steps } setStep = { setStep } groupData={groupData} setGroupData={setGroupData}/>
            }
            {
                steps.stepCreated 
                    && <StepCreated steps = { steps } setStep = { setStep } groupData={groupData} setGroupData={setGroupData}/>
            }
        </ModalApp>    
    );
}

