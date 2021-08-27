import React from 'react'
import Svg, { Path } from 'react-native-svg';

export const IconClose = ({pathColor="black"}) => {
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
            d="M6 18L18 6M6 6l12 12"
          />
        </Svg>
      );
}
