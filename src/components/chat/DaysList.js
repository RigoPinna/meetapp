import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';

export const DaysList = () => {
    const [isChecked, setCheked] = useState({sun: false, mon: false, tue: false, wed: false, thu: false, fri: false, sat: false});
    const iconStyle = (borderColor) => ({
        height: 35,
        width: 35,
        borderRadius: 25,
        borderColor: borderColor,
        marginLeft: 10
      });

  return (
      <View style={{flexDirection: 'row', width: '100%', marginBottom: 20, marginTop: 10, justifyContent: 'center'}}>
            <BouncyCheckbox
                style={{position: 'relative'}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={true}
                onPress={() => {setCheked(!isChecked.sun)}}
                textComponent={<Text style={{position: 'absolute', left: 20, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.sun) ? 'red' : 'white')}}>S</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.mon}
                onPress={() => {setCheked(!isChecked.mon)}}
                textComponent={<Text style={{position: 'absolute', left: 18, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.mon) ? 'black' : 'white')}}>M</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.tue}
                onPress={() => {setCheked(!isChecked.tue)}}
                textComponent={<Text style={{position: 'absolute', left: 20, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.tue) ? 'black' : 'white')}}>T</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.wed}
                onPress={() => {setCheked(!isChecked.wed)}}
                textComponent={<Text style={{position: 'absolute', left: 18, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.wed) ? 'black' : 'white')}}>W</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.thu}
                onPress={() => {setCheked(!isChecked.thu)}}
                textComponent={<Text style={{position: 'absolute', left: 20, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.thu) ? 'black' : 'white')}}>T</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.fri}
                onPress={() => {setCheked(!isChecked.fri)}}
                textComponent={<Text style={{position: 'absolute', left: 20, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.fri) ? 'black' : 'white')}}>F</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={isChecked.sat}
                onPress={() => {setCheked(!isChecked.sat)}}
                textComponent={<Text style={{position: 'absolute', left: 20, fontSize: TEXTS_SIZE.medium, color: ((!isChecked.sat) ? 'black' : 'white')}}>S</Text>}
                checkIconImageSource={<Image></Image>}
            />
      </View>

  )
}
