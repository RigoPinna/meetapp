import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const ButtonComp = ({text}) => {
    return (
        <TouchableOpacity
            // onPress={ () => accion ( texto )}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
