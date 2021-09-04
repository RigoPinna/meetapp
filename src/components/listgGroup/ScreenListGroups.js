import React, { useEffect } from 'react'

import { View } from 'react-native'
import { MenuScreenMessages } from '../stack-primary/MenuScreenMessages'
import { ListGroup } from './ListGroup'

export const ScreenListGroups = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (<MenuScreenMessages  />),
        })

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor:'white', padding:10}}>
          <ListGroup navigation = { navigation }/>
        </View>
      
    )
}
