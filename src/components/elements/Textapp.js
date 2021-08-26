import React from 'react';
import { Text } from 'react-native';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';


export const Textapp = ({ size = (TEXTS_SIZE.extraSmall), weight = 'normal', color = (COLORS_APP.black1), text,styles={},hanldeOnPress=()=>{}}) => {
    return (
        <Text 
        onPress={hanldeOnPress}
        style={{
            fontSize:size,
            fontWeight:weight,
            color: color,
            ...styles
        }}>
            { text }
        </Text>
    )
}
