import React, { useEffect, useRef } from 'react';
import { Animated, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { MeetApp } from './MeetApp';
import {ColorPickerApp} from './src/components/elements/ColorPickerApp'
import { PresentationScreen } from './src/components/auth/PresentationScreen';
// import { StepRegisterNumber } from './src/components/auth/StepRegisterNumber';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const opacity = useRef(new Animated.Value(0) ).current;
        useEffect(() => {
            Animated.timing(
                opacity,
                {
                    toValue:1,
                    duration:500,
                    useNativeDriver:true,
                }
            ).start();
        }, [])

  return (
    <Provider store = { store } >
        <MeetApp />
        {/* <PresentationScreen/> */}
    </Provider>
  );
}
