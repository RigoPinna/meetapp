import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, styles2 } from '../../theme/appTheme'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { Textapp } from './Textapp'
import { IconPlus } from '../icons/IconPlus'

export const ButtonCreateGroups = () => {
    return (
        <TouchableOpacity
            // onPress = { handleSelectImage }
            >
                <View style={styles.buttonCreate}>
                    <LinearGradient colors={['#74BBE3','#91CBEC','#ABD8F1']} style={styles2.bgButtonCamera} /> 
                    <IconPlus/>
                    <Textapp
                        text={'Create new group'}
                        size={TEXTS_SIZE.medium}
                        weight={'normal'}
                        color={COLORS_APP.skyblue3}
                        // styles={{}}
                    />
                </View>
        </TouchableOpacity>
    )
}
