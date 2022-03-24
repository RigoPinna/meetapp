import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const AlertEvent = ({ event }) => {
    
    return (
        <View style={{width: '100%', minHeight: 100,padding: 10,marginTop:10, borderRadius:20, overflow: 'hidden', position: 'relative'}}>
            <LinearGradient colors={['#FFECD2','#FCB69F']} 
                style={{ 
                width: '110%', 
                height: '130%', 
                position:'absolute',
                }}/>
                 <Textapp 
                    size= {TEXTS_SIZE.extraMedium} 
                    color = {COLORS_APP.black2}
                    text = {event.nameEvent}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    color = {COLORS_APP.black2}
                    text = { `This event start  on ${event.formatPeople}`}
            />
            <Textapp 
                    size= {TEXTS_SIZE.extraMedium} 
                    styles = {{marginTop: 10}}
                    color = {COLORS_APP.black2}
                    text = {'Description:'}
                    weight={'bold'}
            />
            <Textapp 
                    size= {TEXTS_SIZE.small} 
                    color = {COLORS_APP.black2}
                    text = {event.description}
            />
           
        </View>
    )
}
