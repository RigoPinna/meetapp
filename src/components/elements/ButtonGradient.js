import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const ButtonGradient = ({styleButton = {}, gradient, textButton='', styleText = {}, sizeGradient={}, IconLeft = undefined,IconRight=undefined,hanldeOnPress=()=>{},disabled=false, colorIcon='white' }) => {
    return (
        <TouchableOpacity onPress={ hanldeOnPress } disabled={ disabled }>
            <View style={{ 
                flexDirection:'row',
                borderRadius: 100,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                overflow:'hidden',
                position:'relative',
                padding:10,
                opacity:disabled ? 0.2: 1,
                ...styleButton
                }}>
                    <LinearGradient colors={ gradient } style={{ flex:1, position:'absolute', top:0, left:0,...sizeGradient }} />
                    { !!IconLeft && <IconLeft pathColor={colorIcon}/>}
                    { textButton !='' && <Text style = {{marginHorizontal:5,...styleText} }>{ textButton }</Text>}
                    { !!IconRight && <IconRight pathColor={colorIcon}/>}
            </View>
        </TouchableOpacity>
    )
}
