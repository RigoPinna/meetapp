import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import { SafeAreaView, StatusBar } from 'react-native';
import { PresentationScreen } from './src/components/auth/PresentationScreen';
import { ScreenChatInfo } from './src/components/chat/ScreenChatInfo';
import { PrincipalScreen } from './src/components/personalGroups/PrincipalScreen';
import { SettingsScreen } from './src/components/settings/SettingsScreen';
import { StackNavigatorPrimary } from './src/components/stack-primary/StackNavigatorPrimary';
import { TabNavigator } from './src/components/TabNavigator';



export default function App() {
  return (

    // <>
    //   <StatusBar  barStyle="default" />
      // <PresentationScreen/>
    // </>
    <NavigationContainer>
      <TabNavigator />
      {/* <ScreenChatInfo/> */}
    </NavigationContainer>
  );
}
