import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { stylesChat } from '../../theme/appTheme'

export const ItemMessage = ({ image,name,message, isMyMessage=true }) => {
    return (
        <View style={
            ( isMyMessage ) 
                ? stylesChat.wrapperItemMessageSended
                : stylesChat.wrapperItemMessage }
        >
            { ( !isMyMessage ) && <Image style = { stylesChat.avatar } source = {{ url:image }} /> }
            <View style={{ height:'100%'}}>
                <View style = {( isMyMessage ) 
                        ? stylesChat.wrapperTextSended  
                        : stylesChat.wrapperTextRecibed   }>
                    <LinearGradient 
                        colors = { 
                            ( isMyMessage ) 
                                ? stylesChat.bgMessageSended 
                                : stylesChat.bgMessageRecived 
                        } 
                        style = { stylesChat.bgMessage }
                    /> 
                    <Text style = {{
                            padding:10,
                            color:(isMyMessage) ? 'white': 'black'
                            }}
                        >
                            { message }
                    </Text>
                </View>
            </View>  
        </View>
    )
}
