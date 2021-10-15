import React, { useState } from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import {  View } from 'react-native'
import { IconKey } from '../icons/IconKey'

export const StepJoin = ({steps, setStep}) => {
    const [code, setCode] = useState('')
    const userLoged = useSelector(state => state.authRed )
    const handleOnChangeName = ( text ) => {
        setCode(text)
    }
    const hanldeGoToNextStep = () => {
        setStep({...steps, ...{ stepJoin: false, stepJoined: true }})
        
    }

    return (
        <View style={{width: 350, marginTop: 130}}>
                <View style={{marginTop: 20}}>
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={'Enter the code to join a group'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                        styles={{textAlign: 'center'}}
                    />
                    <TextInputApp 
                        IconPerson={IconKey}
                        placeholder={'Code'}
                        value={ code } 
                        onChange = { handleOnChangeName }
                        paddingLeftT={40}
                        styleT={{ 
                            width: '100%',
                            position: 'relative',
                            flexDirection:'row',
                            borderRadius: 100,
                            height: 50
                        }}
                    />
                </View>
                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35,}}>
                    <ButtonGradient
                        gradient={['#BA48EF','#E75551','#C86FD6']}
                        sizeGradient = {{width:350, height:50}}
                        textButton={`Join Group`}
                        styleText={{color:'white', fontWeight:'bold',}}
                        styleButton={{width:350, height:50}}
                        hanldeOnPress = { hanldeGoToNextStep }
                    />
                </View>
        </View>
    )
}
