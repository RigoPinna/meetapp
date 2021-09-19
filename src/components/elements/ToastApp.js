import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Animated,
  Button,
  Text,
  View,
} from 'react-native';

export const Toastapp = (props) => {
  const opacity = useRef(new Animated.Value(0))
    .current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
  }, []);

  return (
    <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          ...props.style
        }}
      >
              <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        borderRadius: 100,
        alignItems: 'center'
      }}
    >
      <Text>{props.message}</Text>
    </Animated.View>
      </View>

  );
};
