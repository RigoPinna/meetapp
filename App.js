import React, { useEffect, useRef } from 'react';
import { Animated, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { MeetApp } from './MeetApp';


export default function App() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
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
       {/* <Animated.View style = {{opacity:opacity}}> */}
        <MeetApp />
      {/* </Animated.View > */}
    </Provider>
  );
}
