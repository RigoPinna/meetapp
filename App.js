import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux'
import { Animated, LogBox, SafeAreaView, StatusBar, View } from 'react-native';
import { PresentationScreen } from './src/components/auth/PresentationScreen';
import { ScreenChatInfo } from './src/components/chat/ScreenChatInfo';
import { PrincipalScreen } from './src/components/personalGroups/PrincipalScreen';
import { SettingsScreen } from './src/components/settings/SettingsScreen';
import { StackNavigatorPrimary } from './src/components/stack-primary/StackNavigatorPrimary';
import { TabNavigator } from './src/components/TabNavigator';
import { styles, styles2 } from './src/theme/appTheme';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STATE_USER_LOADING = {
  loading:undefined,
  empty: [],
}

export default function App() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  const [ user, setUser ] = useState( STATE_USER_LOADING.loading );
  const [steps, setStep] = useState({ stepPresentation: true, stepApp: false});
  const opacity = useRef(new Animated.Value(0) ).current;
  const storeDataGet = async () => {
    try {
      // const jsonValue = JSON.stringify(value)
      // await AsyncStorage.
      const jsonValue = await AsyncStorage.getItem('@MyApp_USER')
      // return jsonValue != null ? JSON.parse(jsonValue) : null
      if(jsonValue !== null){
        JSON.parse(jsonValue)
      } 
      console.log(jsonValue)
    } catch (e) {
      console.log(e)
    }
  }
    useEffect(() => {
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:500,
                useNativeDriver:true,
            }
        ).start();
        storeDataGet()
    }, [])
  return (
    // <Animated.View style = {{opacity:opacity}}>
    //   {
    //     steps.stepPresentation && <>
    //                                 <StatusBar  barStyle="default" />
    //                                 <PresentationScreen stepPrincipal = {steps} setStepPrincipal={setStep}/>
    //                               </>
    //   }
    //   {
    //     steps.stepApp &&  <View style= {{height: '100%'}}>
    //                       <Provider store = { store } >
    //                         <RootSiblingParent>
    //                           <NavigationContainer>
                                
    //                             <TabNavigator />
                                
    //                           </NavigationContainer>
    //                         </RootSiblingParent>
    //                       </Provider>
    //                       </View>
    //   }
      
    // </Animated.View >
    // <>
    //   <StatusBar  barStyle="default" />
    //   <PresentationScreen/>
    // </>
    <Provider store = { store } >
      <RootSiblingParent>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </RootSiblingParent>

    </Provider>

  );
}
