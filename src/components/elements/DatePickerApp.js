import React, { Component, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Textapp } from "./Textapp";
import { BlurView } from 'expo-blur'
import { Platform, View } from "react-native";
import { COLORS_APP } from "../ui/COLORS_APP";
import { ButtonGradient } from "./ButtonGradient";

export const DatePickerApp = ({eventData, setEventData, decision='start', mode='date', style}) => {
    const [visible, setVisible] = useState( false )
    const [text, setText] = useState(`Select ${mode}...`)
    const [date, setDate] = useState(new Date())

    const showDateTimePicker = () => {
        setVisible(!visible)
    };
    

    const onChange = ( event, selectedDate ) => {
        if(event.type == "set") {
            const currentDate = selectedDate || date
            let tempDate = new Date( currentDate )
            if(mode === 'date') {
                let fDate = ('0'+ tempDate.getDate()).slice(-2) + "/" + ('0'+ (tempDate.getMonth() + 1)).slice(-2) + "/" + tempDate.getFullYear()
                let FDateState = tempDate.getFullYear() + "-" + ('0'+ (tempDate.getMonth() + 1)).slice(-2) + "-" + ('0'+ tempDate.getDate()).slice(-2)
                setVisible( false )
                setText( fDate )
                setDate( currentDate )
                if(decision==='start'){
                    setEventData({...eventData, ...{startDate: FDateState}}) 
                } else {
                    setEventData({...eventData, ...{endDate: FDateState}}) 
                } 
            } else {
                let Ftime = ('0'+(tempDate.getHours())).slice(-2) + ':'+ ('0'+(tempDate.getMinutes())).slice(-2)
                setVisible( false )
                setText( Ftime )
                setDate( currentDate )
                if(decision==='start'){
                    setEventData({...eventData, ...{startTime: Ftime}}) 
                } else {
                    setEventData({...eventData, ...{endTime: Ftime}}) 
                } 
            }
            // console.log(selectedDate)
        } else {
            setVisible(false)
        }
        
      };
    return(
        <>
            <ButtonGradient 
                gradient={['#F0F0F0','#F0F0F0']}
                // sizeGradient = {{width:'120%', height:50}}
                textButton={ text }
                styleText={{ 
                    color:COLORS_APP.black2, 
                    fontWeight: (( text.includes("Select")) ? 'normal':'bold'),
                    paddingLeft:Platform.OS === "ios" && visible ? 10 : 10,
                }}
                styleButton={{ 
                            width: ((mode === "date") ? '80%' : '60%'), 
                            height:50, 
                            justifyContent:'center',
                            borderRadius: 25,
                            borderWidth: 2,
                            borderBottomLeftRadius: Platform.OS === "ios" && visible ? 0 : 25,
                            borderBottomRightRadius:Platform.OS === "ios" &&  visible ? 0 : 25,
                            marginRight: ((mode === "time") ? 20 : 0),
                            ...style
                        }}
                hanldeOnPress = { showDateTimePicker }/>
            {
                visible && <View style={ Platform.OS === "ios" && { width:'100%', backgroundColor:'pink', borderBottomRightRadius: 20, borderBottomLeftRadius: 20,}}>
                        <DateTimePicker
                                    value={date}
                                    mode={mode}
                                    display="default"
                                    onChange={onChange}
                                    
                                />
                    </View>
                
            }
            
        </>
    ) 
}