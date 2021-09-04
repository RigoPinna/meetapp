import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconKey = () => {
    return (
        <Svg 
            width={25}
            height={25} 
            fill="none" 
            stroke="black" 
            viewBox="0 0 24 24"
            position={'absolute'} 
            marginLeft={10}
        >
            <Path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1" 
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z">
            </Path>
        </Svg>
    )
}
