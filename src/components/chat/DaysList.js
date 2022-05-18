import React from 'react'
import { Image, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';

export const DaysList = ({data, setData = () => {}}) => {
    const iconStyle = (borderColor) => ({
        height: 35,
        width: 35,
        borderRadius: 25,
        borderColor: borderColor,
        marginLeft: 5
      });
  return (
      <View style={{flexDirection: 'row', width: '100%', marginBottom: 20, marginTop: 10, justifyContent: 'center'}}>
            <BouncyCheckbox
                style={{position: 'relative'}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={(data.checkedDays.sun) ? true : false}
                onPress={() => {

                    setData({...data, ...{checkedDays: {...data.checkedDays, sun: !data.checkedDays.sun}}})}}
                textComponent={<Text style={{position: 'absolute', left: 16, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.sun) ? 'red' : 'white')}}>S</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.mon}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, mon: !data.checkedDays.mon}}})}}
                textComponent={<Text style={{position: 'absolute', left: 13, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.mon) ? 'black' : 'white')}}>M</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.tue}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, tue: !data.checkedDays.tue}}})}}
                textComponent={<Text style={{position: 'absolute', left: 16, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.tue) ? 'black' : 'white')}}>T</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.wed}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, wed: !data.checkedDays.wed}}})}}
                textComponent={<Text style={{position: 'absolute', left: 13, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.wed) ? 'black' : 'white')}}>W</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.thu}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, thu: !data.checkedDays.thu}}})}}
                textComponent={<Text style={{position: 'absolute', left: 16, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.thu) ? 'black' : 'white')}}>T</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.fri}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, fri: !data.checkedDays.fri}}})}}
                textComponent={<Text style={{position: 'absolute', left: 16, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.fri) ? 'black' : 'white')}}>F</Text>}
                checkIconImageSource={<Image></Image>}
            />
            <BouncyCheckbox
                style={{position: 'relative', marginLeft: 10}}
                fillColor={"#48C6EF"} 
                unfillColor={"white"} 
                iconStyle={iconStyle("black")} 
                isChecked={data.checkedDays.sat}
                onPress={() => {setData({...data, ...{checkedDays: {...data.checkedDays, sat: !data.checkedDays.sat}}})}}
                textComponent={<Text style={{position: 'absolute', left: 16, fontSize: TEXTS_SIZE.medium, color: ((!data.checkedDays.sat) ? 'black' : 'white')}}>S</Text>}
                checkIconImageSource={<Image></Image>}
            />
      </View>

  )
}
