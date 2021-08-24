import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

  
export const IconArrowRight = ({ pathColor =( COLORS_APP.primary)} ) => {
    return (
        <Svg width = {25} height = {25} fill="none" stroke="currentColor" >
            <Path  stroke = {pathColor}  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </Svg>
        
    )
}
