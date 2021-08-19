import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { COLORS_APP } from '../ui/COLORS_APP'

export const IconPlus = ({pathColor = COLORS_APP.skyblue3, width=30, height=30}) => {
    return (
        <Svg width={width} height={height} fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            <Path stroke={pathColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </Svg>
    )
}
