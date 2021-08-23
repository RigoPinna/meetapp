import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const AlertEvent = () => {
    return (
        <View style={{width: 380, height: 250,marginHorizontal: 15, marginTop: 20, padding: 10}}>
            <LinearGradient colors={['#FFECD2','#FCB69F']} 
                style={{ 
                width: 380, 
                height: 250, 
                position:'absolute',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,}}/>
            <Textapp 
                    size= {TEXTS_SIZE.medium} 
                    styles = {{marginLeft: 10}}
                    color = {COLORS_APP.black2}
                    text = {'Name new event'}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    styles = {{marginLeft: 10}}
                    color = {COLORS_APP.black2}
                    text = {'This event start  on 17.08.2021'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.medium} 
                    styles = {{marginLeft: 10, marginTop: 10}}
                    color = {COLORS_APP.black2}
                    text = {'Descrption:'}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    styles = {{marginLeft: 10}}
                    color = {COLORS_APP.black2}
                    text = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nisl faucibus dolor non blandit dignissim. Eget orci lectus nullam pellentesque iaculis scelerisque.'}
            />
        </View>
    )
}
