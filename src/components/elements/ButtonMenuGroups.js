import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { IconDots } from '../icons/IconDots'

export const ButtonMenuGroups = () => {
    return (
        <TouchableOpacity
            // onPress = { handleSelectImage }
        >
            <View style={styles.buttonDotts}>
                <IconDots />
            </View>
        </TouchableOpacity>
    )
}
