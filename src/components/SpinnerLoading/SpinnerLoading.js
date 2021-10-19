import React from 'react'
import { View } from 'react-native'
import * as Progress from 'react-native-progress'

export const SpinnerLoading = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Progress.CircleSnail 
                spinDuration={1000} 
                color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
        </View>
    )
}
