import React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconLocation = ({width=20, height=20, color='#828282', styles ={}}) => {
    return (
        <Svg
            style = {{ ...styles }}
            width = { width }
            height = { height } 
            fill = {color} 
            viewBox="0 0 20 20">
            <Path 
                fillRule="evenodd" 
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                clipRule="evenodd" />
        </Svg>
    )
}
