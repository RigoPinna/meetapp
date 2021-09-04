import React from 'react'
import Svg, { Path } from 'react-native-svg';

export const IconCheck = ({pathColor}) => {
    return (
        <Svg
            width ="22"
            height ="22"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
          <Path
            stroke = { pathColor }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </Svg>
      );
}
