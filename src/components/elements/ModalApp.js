import React, { useEffect, useRef, useState } from 'react'
import { Modal, View, Animated, ScrollView } from 'react-native'
import { BlurView } from 'expo-blur'
import { styles } from '../../theme/appTheme'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Textapp } from './Textapp'
import { ButtonGradient } from './ButtonGradient'
import { IconClose } from '../icons/IconClose'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ModalApp = ({navigation,children,textTitle, closeModal=true,styleContainer, handle = () => {}}) => {
    const [ showModal, setShowModal ] = useState(closeModal);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        toggleModal();
    }, [showModal]);
    const toggleModal = () => {
        if ( showModal ) {
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
        <Modal transparent visible={showModal} >
            <BlurView  tint="dark" intensity={85} style={[{alignItems: 'center', flex: 1, justifyContent:'flex-end',}]}>
                <Animated.View style={[{...styles.modalContainer,...styleContainer}, {transform: [{scale: scaleValue}]}]}>
                    <View style={styles.header}>
                        <Textapp
                            size={ TEXTS_SIZE.medium }
                            text={ textTitle }
                            weight={'bold'}
                        />
                       { 
                            closeModal &&  <ButtonGradient 
                                                gradient={['#F3F7FE','#F3F7FE']}
                                                sizeGradient = {{ width:35, height:35 }}
                                                styleButton = {{ width:35, height:35, alignItems: 'center',justifyContent: 'center'}}
                                                IconLeft = { IconClose }
                                                hanldeOnPress = { () => { 
                                                    setShowModal(false); navigation.goBack(); 
                                                    (!!handle) && handle()
                                                } }
                                                colorIcon = {COLORS_APP.black2}    
                                            />
                        }
                    </View>
                    <ScrollView style={{flex:1}} bounces={ false }>
                            {children}
                    </ScrollView>
                </Animated.View>
            </BlurView>
        </Modal>
 
    );
}
