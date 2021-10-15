import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import { RootSiblingParent } from 'react-native-root-siblings';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from '../TabNavigator';

export const AppRoot = () => {
    return (
        <Provider store = { store } >
            <RootSiblingParent>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </RootSiblingParent>
        </Provider>
    )
}
