import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

export const IconCalendar = ({pathColor= COLORS_APP.black3}) => {
    return (
        <Svg
            width="27" 
            height="27" 
            fill="none" 
            viewBox="0 0 24 24" 
        >
            <Path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                // stroke-width="2"
                stroke={pathColor} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </Svg>
    )
}
