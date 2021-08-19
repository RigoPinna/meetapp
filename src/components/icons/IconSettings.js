import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

export const IconSettings = ({pathColor= COLORS_APP.black3}) => {
    return (
        <Svg
        width="27" 
        height="27" 
        fill="none" 
        viewBox="0 0 24 24" >
            <Path 
            stroke-linecap="round" 
            stroke-linejoin="round"
            stroke={pathColor} 
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <Path 
            stroke-linecap="round" 
            stroke-linejoin="round"
            stroke={pathColor} 
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </Svg>
    )
}