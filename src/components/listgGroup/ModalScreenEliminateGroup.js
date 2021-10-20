import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View } from 'react-native';
import { ButtonGradient } from '../elements/ButtonGradient';
import { ModalApp } from '../elements/ModalApp';
import { Textapp } from '../elements/Textapp';
import { TextInputApp } from '../elements/TextInputApp';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { StepJoin } from './StepJoin'
import { StepJoined } from './StepJoined'

export const ModalScreenEliminateGroup = ({route}) => {
    const navigation = useNavigation()
     return (
        <ModalApp styleContainer={{height: '50%', marginBottom: 200,borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,}} navigation={navigation} textTitle={`Eliminate ${route.params.name}`}>
            <Textapp
                text={'Are you sure do you want eliminate group?'}
                size={TEXTS_SIZE.medium}
                color={COLORS_APP.black1}
                styles={{marginTop: 40, marginBottom: 20, textAlign: 'center'}}
            />
            <Textapp
                text={'All the information (messages, participants and events) will be eliminated'}
                size={TEXTS_SIZE.small}
                color={COLORS_APP.black1}
                styles={{marginTop: 20, marginBottom: 40, textAlign: 'center'}}
            />
            <View style={{flexDirection: 'row',}}>
                <ButtonGradient
                    // IconLeft={IconCopy}
                    gradient={['#3CBA92','#0BA360']}
                    sizeGradient = {{width:190, height:50}}
                    textButton={`Yes, Eliminate Group`}
                    styleText={{color:'black', marginLeft: 10}}
                    styleButton={{width:190, height:50,justifyContent:'center', }}
                    // hanldeOnPress = { handlecopyToClipboard }
                />
                <ButtonGradient
                    // IconLeft={IconCopy}
                    gradient={['#F19184','#DB1723']}
                    sizeGradient = {{width:190, height:50}}
                    textButton={`Cancel`}
                    styleText={{color:'black', marginLeft: 10}}
                    styleButton={{width:190, height:50,justifyContent:'center', marginLeft: 5}}
                    // hanldeOnPress = { handlecopyToClipboard }
                />
            </View>
        </ModalApp>    
    );
}