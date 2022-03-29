import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ModalApp } from '../elements/ModalApp';
import { ColorPickerApp } from '../elements/ColorPickerApp';
import { ButtonGradient } from '../elements/ButtonGradient'
import { useNavigation } from '@react-navigation/native'

export const ModalScreenColorChooser = ({navigation, route}) => {
    const nav = useNavigation()
    const [color, setColor] = useState(route.params.dataGroup.color);
    const [visibleModal, setVisibleModal] = useState(true);
    const handlePickColor = () => {
        route.params.setDataGroup({...route.params.dataGroup, color: color.color});
        nav.goBack();
    }

    return (
        <ModalApp styleContainer={{height: '50%', marginBottom: 200,borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,}} navigation={navigation} textTitle={'Pick a color for the group'} needScroll={false}>
            <View style={{width: 350, height: 200, marginTop: 35}}>
                <ColorPickerApp
                    eventData = {color}
                    setEventData = {setColor}
                />
            </View>
            <ButtonGradient
                    gradient={['#48C6EF','#6F86D6']}
                    sizeGradient = {{width:350, height:50}}
                    textButton={`Save`}
                    styleText={{color:'white', fontWeight:'bold'}}
                    styleButton={{justifyContent: 'center',width:350, height:50, marginTop: 25}}
                    hanldeOnPress = { handlePickColor }
                />
        </ModalApp>    
    );
}

