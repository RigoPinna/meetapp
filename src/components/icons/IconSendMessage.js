import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconSendMessage = ({width=22, height=22}) => {
    return (
        <Svg 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            width={width} 
            height={height}
         >
            <Path stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </Svg>
    )
}
