import React, { useRef, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';
import { ButtonGradient } from '../elements/ButtonGradient';

export const TimeData = ({children}) => {
    const [show, setShow] = useState(false)
    const viewRef = useRef()

    const showDataTime = () => {
        setShow(!show)
    }
  return (
    <View style={{marginTop: 20, alignItems: 'center', width: '100%'}}>
      <ButtonGradient
          gradient={['#48C6EF','#48C6EF']}
          sizeGradient = {{width:'110%', height:50}}
          textButton={`Open recurrence options`}
          styleText={{color:'white', fontWeight:'bold',}}
          styleButton={{width:'100%', height:50}}
          hanldeOnPress = { showDataTime }
      />

    {
      (show) && <Animatable.View ref={viewRef} animation="fadeInDown" style={{margin: 10, alignItems: 'center', width: '90%'}}>
                  {children}
              </Animatable.View>
    }
    </View>

  )
}
