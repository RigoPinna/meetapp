import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import { styles, styles2 } from '../../theme/appTheme'
import{ LinearGradient } from 'expo-linear-gradient'
import { IconCamera } from '../icons/IconCamera'

export const ButtonCamera = ({ onPress }) => {
  
    const handleSelectImage = async () => {
        const isAccessAcepted =  await ImagePicker.requestMediaLibraryPermissionsAsync();
        if ( isAccessAcepted.granted ) {
            const imageSelected = await ImagePicker.launchImageLibraryAsync();
            ( !imageSelected.cancelled ) && onPress( imageSelected.uri );
        }

    }

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress = { handleSelectImage }
        >
            <View style = {styles2.ButtonCamera}>
                <LinearGradient colors={['#74BBE3','#91CBEC','#ABD8F1']} style={styles2.bgButtonCamera} > 

                </LinearGradient>
                <IconCamera />

            </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <TouchableNativeFeedback
            onPress = { handleSelectImage }
            background={TouchableNativeFeedback.Ripple('#28425B',false, 27)}
            >
            <View style = {styles.buttonCamara}
            >
                <LinearGradient colors={['#74BBE3','#91CBEC','#ABD8F1']} style={styles2.bgButtonCamera} />
                <IconCamera />
            </View>
            
            </TouchableNativeFeedback>
        )
    }
    
    return (Platform.OS === 'ios') ? ios() : android();
}
