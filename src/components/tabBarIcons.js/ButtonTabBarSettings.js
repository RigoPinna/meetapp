import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconSettings } from '../icons/IconSettings'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ButtonTabBarSettings = ({ focused }) => {
    const nav = useNavigation();
    return (
        <ButtonGradient 
            gradient={ focused ? ['#4481EB','#04BEFE']:['#FFFFFF','#FFFFFF']}
            textButton = {focused ? 'Settings': ''}
            styleButton = {{height:50,width:'90%'}}
            sizeGradient = {{width:'200%', height:50}}
            hanldeOnPress = { () => nav.navigate( 'Settings' ) }
            IconLeft = {IconSettings}
            colorIcon = {focused ? '#FFFFFF' : COLORS_APP.black3}
            styleText = {{
                fontWeight:'bold',
                color:'#FFFFFF'
            }}
        />
    )
}
