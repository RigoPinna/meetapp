import { useTheme } from '@react-navigation/native'
import { useCardAnimation } from '@react-navigation/stack'
import React, { useEffect, useRef, useState } from 'react'
import { Modal, View, Animated, Pressable, Text, Button } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Buttonapp } from './Buttonapp'
import { ButtonGradient } from './ButtonGradient'
import { Textapp } from './Textapp'

export const ModalApp = ({navigation,visible,children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        }
    };
    return (
        <Modal transparent visible={showModal} style={{justifyContent: 'center'}}>
            <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
                <Animated.View
                style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
                {children}
                </Animated.View>
            </View>
        </Modal>
    );
}
