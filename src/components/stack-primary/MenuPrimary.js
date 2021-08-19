import React from 'react'
import { Button, View } from 'react-native'

export const MenuPrimary = () => {
    return (
        <View style = {{flexDirection:'row'}}>
            <Button title="Create group"/>
            <Button title="Join group"/>
            
        </View>
    )
}
