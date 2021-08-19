import React from 'react'
import { View } from 'react-native'

export const DisplayInline = ({children}) => {
    return (
        <View style = {{
            flexWrap: 'wrap', 
            alignItems: 'flex-start',
            flexDirection:'row',
            backgroundColor: 'pink'
        }}>
            {children}
        </View>
    )
}
