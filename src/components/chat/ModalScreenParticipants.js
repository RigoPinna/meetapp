import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import { ModalApp } from '../elements/ModalApp'
import { ParticipantsColumn } from './ParticipantsColumn'

export const ModalScreenParticipants = ({navigation,route}) => {
    const { params } = route;
    const { participants} = params;
     return (
        <ModalApp navigation={navigation} textTitle={'Participants'}>
            <View style={{width:400, height:700}}>
                <ParticipantsColumn participants={participants} colorColorBordersAvatars = {'white'}/>
            </View>
        </ModalApp>
    );
}
