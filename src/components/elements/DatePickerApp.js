import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, View } from "react-native";
import { COLORS_APP } from "../ui/COLORS_APP";
import { ButtonGradient } from "./ButtonGradient";

export const DatePickerApp = ({eventData, setEventData, decision='start', mode='date', style,evento=false, texty = `Select ${mode}...`, month=false}) => {
    const [visible, setVisible] = useState( false )
    const [text, setText] = useState(texty)
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
    
                    if(evento){
                        if(month) {
                            setText(`Repeat every ${('0'+ tempDate.getDate()).slice(-2)}/${('0'+ (tempDate.getMonth() + 1)).slice(-2)}`)
                        } else {
                            setText(`Repeat every ${('0'+ tempDate.getDate()).slice(-2)}`)
                        }
                        setEventData({...eventData, day:('0'+ tempDate.getDate()).slice(-2) ,
                                                    month: ('0'+ (tempDate.getMonth() + 1)).slice(-2),
                                                    recurrence: {...eventData.recurrence, when: FDateState}})
                    }else {
                        setEventData({...eventData, ...{startDate: FDateState}}) 
                    }
                } else if(decision==='end') {
                    setEventData({...eventData, recurrence: {...eventData.recurrence, duration: FDateState}, end: {...eventData.end, time: fDate}}) 
                } 
            } else {
                let Ftime = ('0'+(tempDate.getHours())).slice(-2) + ':'+ ('0'+(tempDate.getMinutes())).slice(-2)
                setVisible( false )
                    setText( Ftime )


                setDate( currentDate )
                if(decision==='start'){
                    if(evento){
                        setEventData({...eventData, recurrence: {...eventData.recurrence, timeSttgs: Ftime}}) 
                    }else {
                        setEventData({...eventData, ...{startTime: Ftime}}) 
                    }
                }
            }
        } else {
            setVisible(false)
        }
        
      };
    return(
        <>
            <ButtonGradient 
                gradient={['#F0F0F0','#F0F0F0']}
                textButton={text}
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