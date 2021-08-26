import React, { Component, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Textapp } from "./Textapp";
 
export const DatePickerApp = ({eventData, setEventData}) => {
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState("Start Date")
    const [date, setDate] = useState(new Date())

    const showDateTimePicker = () => {
        setVisible(true)
    };
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        let tempDate = new Date(currentDate)
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
        setVisible(false)
        setText(fDate)
        setDate(currentDate)
        setEventData(fDate)
      };
    
    return(
        <>
            <Textapp
                text={text}
                hanldeOnPress={showDateTimePicker}
                styles={{
                    height: 50,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    marginTop: 10,
                    paddingLeft: 20,
                    paddingTop: 15,
                    alignItems: 'center',
                    backgroundColor:'#F0F0F0',
                    borderWidth:1,
                    borderColor:'#F0F0F0',
                }}
            />
            {
                visible && <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                                
                            />
                
            }
            
        </>
    ) 
}