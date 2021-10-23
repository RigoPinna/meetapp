import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconArrowLeft = () => {
    return (
        <Svg 
            fill="none" 
            width ="22"
            height ="22"
            stroke="currentColor" 
            viewBox="0 0 24 24" >
                <Path
                    stroke = { 'black' }
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M15 19l-7-7 7-7"/>
        </Svg>
    )
}
