import React, { Component, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Textapp } from "./Textapp";
import { BlurView } from 'expo-blur'
import { Platform, View } from "react-native";
import { COLORS_APP } from "../ui/COLORS_APP";
import { ButtonGradient } from "./ButtonGradient";
export const DatePickerApp = ({eventData, setEventData}) => {
    const [visible, setVisible] = useState( false )
    const [text, setText] = useState("Select date...")
    const [date, setDate] = useState(new Date())

    const showDateTimePicker = () => {
        setVisible(!visible)
    };
    

    const onChange = ( event, selectedDate ) => {
        if(event.type == "set") {
            const currentDate = selectedDate || date
            let tempDate = new Date( currentDate )
            let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
            setVisible( false )
            setText( fDate )
            setDate( currentDate )
            // setEventData( fDate )
            setEventData({...eventData, ...{startDate: fDate}})
        } else {
            setVisible(false)
        }
        
      };
    return(
        <>
            <ButtonGradient 
                gradient={['#F0F0F0','#F0F0F0']}
                sizeGradient = {{width:1000, height:50}}
                textButton={ text }
                styleText={{ 
                    color:COLORS_APP.black2, 
                    fontWeight: (( "Select date..." === text ) ? 'normal':'bold'),
                    paddingLeft:Platform.OS === "ios" && visible ? 10 : 10
                }}
                styleButton={{ 
                            width:'100%', 
                            height:50, 
                            justifyContent:'flex-start',
                            borderRadius: 25,
                            borderBottomLeftRadius: Platform.OS === "ios" && visible ? 0 : 25,
                            borderBottomRightRadius:Platform.OS === "ios" &&  visible ? 0 : 25, 
                        }}
                hanldeOnPress = { showDateTimePicker }/>
            {
                visible && <View style={ Platform.OS === "ios" && { width:'100%', backgroundColor:'pink', borderBottomRightRadius: 20, borderBottomLeftRadius: 20,}}>
                        <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={onChange}
                                    
                                />
                    </View>
                
            }
            
        </>
    ) 
}