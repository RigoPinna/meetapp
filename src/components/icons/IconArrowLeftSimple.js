import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

export const IconArrowLeftSimple = ({ pathColor =( COLORS_APP.primary)}) => {
    return (
        <Svg 
            width = {25} 
            height = {25}   
            fill="currentColor" 
            viewBox="0 0 20 20"
            fill = {pathColor}
            >
                <Path
                    // stroke = {pathColor} 
                    fillRule="evenodd" 
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                    clipRule="evenodd"/>
        </Svg>
    )
}
