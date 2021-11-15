import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonGradient } from '../elements/ButtonGradient';
import { ModalApp } from '../elements/ModalApp';
import { Textapp } from '../elements/Textapp';
import { TextInputApp } from '../elements/TextInputApp';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { StepJoin } from './StepJoin'
import { StepJoined } from './StepJoined'

import { db,firebase, userStatic } from '../../firebase/firebase-config'

export const ModalScreenEliminateGroup = ({route}) => {
    const navigation = useNavigation()
    const eliminateGroup = async () => {
        await db.collection('groups').doc(route.params.id).delete()

        const imgRef = firebase.storage().ref( route.params.name ).child('img_group');

        imgRef.delete().then(
            navigation.goBack()
        ).catch(error => {
            console.log(error)
        })
        
    }
      

     return (
        <ModalApp styleContainer={{height: 300, marginBottom: 200, borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,}} navigation={navigation} textTitle={`Delete Group`}>
            <Textapp
                text={'Are you sure you want to delete the group?'}
                size={TEXTS_SIZE.extraMedium}
                color={COLORS_APP.black1}
                styles={{marginTop: 40,textAlign: 'center', fontWeight:'bold'}}
            />
            <Textapp
                text={`If you delete the group "${route.params.name}", all messages and events will be lost`}
                size={TEXTS_SIZE.small}
                color={"#FF4646"}
                styles={{marginTop: 20, marginBottom: 50, textAlign: 'center'}}
            />
            <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <ButtonGradient
                    gradient={['#F5F7FA','#F5F7FA']}
                    sizeGradient = {{width:190, height:50}}
                    textButton={`Cancel`}
                    styleText={{color:'#A3AAB6'}}
                    styleButton={{width:180, height:50,justifyContent:'center',fontWeight:'bold'}}
                    hanldeOnPress = { () => {navigation.goBack()} }
                />
                <ButtonGradient
                    gradient={['#FF3838','#FF3838']}
                    sizeGradient = {{width:190, height:50}}
                    textButton={`Yes, delete`}
                    styleText={{color:'white',fontWeight:'bold'}}
                    styleButton={{width:180, height:50,justifyContent:'center', }}
                    hanldeOnPress = { () =>{eliminateGroup()} }
                />
            </View>
        </ModalApp>    
    );
}