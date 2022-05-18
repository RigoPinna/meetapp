import React from 'react'
import { Image, View } from 'react-native';

export const IconApp = ({ position }) => {
    return (
        <View style = {{ width: '100%',alignItems: 'center',...position}}>
                    <Image source={require('../assets/icon-App.png')}/>
        </View>
    )
}
