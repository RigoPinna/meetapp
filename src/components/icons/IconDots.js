import React from 'react'
import Svg, { Path } from "react-native-svg";

export const IconDots = () => {
    return (
        <Svg width = { 40 } height = { 40 }
            fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                <Path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </Svg>
    )
}