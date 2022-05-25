import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ModalApp } from '../elements/ModalApp';
import { ColorPickerApp } from '../elements/ColorPickerApp';
import { ButtonGradient } from '../elements/ButtonGradient'
import { useNavigation } from '@react-navigation/native'

export const ModalScreenColorChooser = ({navigation, route}) => {
    const handlePickColor = () => {
        navigation.goBack();
    }

    return (
        <ModalApp styleContainer={{height: 410, marginBottom: 200,borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,}} navigation={navigation} textTitle={'Pick a color for the group'} needScroll={false}>
            <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
                <ColorPickerApp
                    eventData = {route.params.eventData}
                    setEventData = {route.params.setEventData}
                />
            </View>
            <View style={{alignItems: 'center', paddingBottom: 20}}>
                <ButtonGradient
                    gradient={['#48C6EF','#6F86D6']}
                    sizeGradient = {{width: '110%', height:50}}
                    textButton={`Save`}
                    styleText={{color:'white', fontWeight:'bold'}}
                    styleButton={{width:'90%', height:50}}
                    hanldeOnPress = { handlePickColor }
                />
            </View>
        </ModalApp>    
    );
}

