import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ButtonGradient } from '../elements/ButtonGradient'
import { IconCalendar } from '../icons/IconCalendar'
import { COLORS_APP } from '../ui/COLORS_APP'

export const ButtonTabBarCalendar = ({ focused }) => {
    const nav = useNavigation();
    return (
        <ButtonGradient
            gradient={ focused ? ['#4481EB','#04BEFE']:['#FFFFFF','#FFFFFF']}
            textButton = {focused ? 'Calendar': ''}
            styleButton = {{height:50,width:130}}
            sizeGradient = {{width:200, height:50}}
            hanldeOnPress = { () => nav.navigate( 'Calendar' ) }
            IconLeft = {IconCalendar}
            colorIcon = {focused ? '#FFFFFF' : COLORS_APP.black3}
            styleText = {{
                fontWeight:'bold',
                color:'#FFFFFF'
            }}
        />
    )
}
