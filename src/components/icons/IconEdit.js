import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

  
export const IconEdit = ({ pathColor =( COLORS_APP.primary)}, widthP = '24', heightP = '24') => {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            width= '24'
            height= '24' 
            viewBox="0 0 24 24">
                <Path stroke = {pathColor}  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"/>
        </Svg>
        
    )
}