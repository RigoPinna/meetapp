import React, { useEffect, useRef, useState } from 'react'
import { View, KeyboardAvoidingView } from 'react-native';
import BouncyCheckboxGroup from 'react-native-bouncy-checkbox-group';
import { stylesChat } from '../../theme/appTheme';
import { ButtonGradient } from '../elements/ButtonGradient';
import { DatePickerApp } from '../elements/DatePickerApp';
import { ModalApp } from '../elements/ModalApp';
import { Textapp } from '../elements/Textapp';
import { TextInputApp } from '../elements/TextInputApp';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { DaysList } from './DaysList';

export const ModalScreenPreferences = ({navigation, route}) => {
    const [data, setData] = useState(route.params.eventData)
    const [showSettings, setshowSettings] = useState(false)
    const [showDuration, setDuration] = useState({text: '', show: false})
    const isMounted = useRef( null )
    const [showError, setShowError] = useState(false)

    const iconStyle = (borderColor) => ({
        height: 40,
        width: 40,
        borderRadius: 25,
        borderColor: borderColor,
        marginBottom: 10,
      });
      const styles = {
        container: { marginTop: 24 },
        verticalStyle: { marginTop: 16 },
        textStyle: { textDecorationLine: "none" },
        iconImageStyle: { height: 20, width: 20 },
      };
    const verticalStaticData = [
        {
            id: 0,
            text: "No Repeat",
            fillColor: "#48C6EF",
            unfillColor: "white",
            iconStyle: iconStyle("black"),
            textStyle: styles.textStyle,
            style: styles.verticalStyle,
            iconImageStyle: styles.iconImageStyle,
          },
        {
          id: 1,
          text: "Daily",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
        {
          id: 2,
          text: "Weekly",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
        {
          id: 3,
          text: "Montly",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
        {
          id: 4,
          text: "Annually",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
      ];
      const durationStaticData = [
        {
            id: 0,
            text: "Always",
            fillColor: "#48C6EF",
            unfillColor: "white",
            iconStyle: iconStyle("black"),
            textStyle: styles.textStyle,
            style: styles.verticalStyle,
            iconImageStyle: styles.iconImageStyle,
          },
        {
          id: 1,
          text: "End Date",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
      
      ];

      useEffect(() => {
        if(data.recurrence.type >0){
            setshowSettings(!showSettings)

        }
      }, [])
      
    const handleSavePreferences = () => {
        if(!data.textInformation.endsWith('repeat')){
            if((data.textInformation.endsWith('daily') && data.recurrence.timeSttgs === undefined)
                || (data.textInformation.endsWith('weekly') && (data.checkedDays.sun === false && data.checkedDays.mon === false && data.checkedDays.tue === false &&
                    data.checkedDays.wed === false && data.checkedDays.thu === false && data.checkedDays.fri === false &&
                    data.checkedDays.sat === false))){
                setShowError(true)
            } else {
                setShowError(false)
                route.params.setEventData(data)
                navigation.goBack();
            }
        } else {
            route.params.setEventData(data)
            navigation.goBack();
        }

    }
    const handleOnChange = ( text ) => {
        setData({...data, ...{repeatTimes: text}})
    }
    const handleOnTimes = ( text ) => setData({...data, ...{repeatTimes: text}})
    return (

                             <>
        <KeyboardAvoidingView
        ref={isMounted} 
        style={ stylesChat.wrapperKeyboard }
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 :90 }
            >
                
        <ModalApp styleContainer={{height: '100%',}} navigation={navigation} textTitle={'Repeat'} needScroll={true}>

                                <View style={{width: 350, height: '80%', marginTop: 10}}>
                        <Textapp 
                            size={TEXTS_SIZE.small}
                            text={data.textInformation}
                            color={COLORS_APP.black2}
                        />
                <BouncyCheckboxGroup
                    data={verticalStaticData}
                    style={{ flexDirection: "column",}}
                    initial={data.recurrence.type}
                    onChange={(selectedItem) => {
                        switch (selectedItem.text) {
                            case 'No Repeat':
                                setData({...data, ...{textInformation: 'This event will not repeat', choose: selectedItem.text, recurrence: {type: selectedItem.id,when: undefined, timeSttgs: undefined, duration: undefined}, end: {}}})
                                setshowSettings(false)
                                break;
                            case 'Daily':
                                setData({...data, ...{textInformation: 'This event will repeat daily', choose: selectedItem.text, recurrence: {type: selectedItem.id,when: undefined, timeSttgs: undefined, duration: undefined}, end: {}}})
                                setshowSettings(true)
                                break;
                            case 'Weekly':
                                setData({...data, ...{textInformation: 'This event will repeat weekly', choose: selectedItem.text, recurrence: { type: selectedItem.id,when: undefined, timeSttgs: undefined, duration: undefined}, end: {}}})
                                setshowSettings(true)
                                break;
                            case 'Montly':
                                setData({...data, ...{textInformation: 'This event will repeat montly', choose: selectedItem.text, recurrence: { type: selectedItem.id,when: undefined, timeSttgs: undefined, duration: undefined}, end: {}}})
                                setshowSettings(true)
                            break;
                            case 'Annually':
                                setData({...data, ...{textInformation: 'This event will repeat annually', choose: selectedItem.text, recurrence: { type: selectedItem.id,when: undefined, timeSttgs: undefined, duration: undefined}, end: {}}})
                                setshowSettings(true)
                            break;
                            default:
                                break;
                        }
                    }}
                />
                    {
                        (showSettings && data.recurrence.type === 1) && 

                                                <View style={{width: '100%', alignContent: 'center'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Settings'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    />
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'It will be remembered at'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 20}}
                                                    /> 
                                   
                                                        <DatePickerApp
                                                        eventData= {data} 
                                                        setEventData={setData}
                                                        mode={'time'}
                                                        evento={true}
                                                        style={{justifyContent: 'center', marginTop: 10, marginBottom: 10, width: '25%', marginLeft: 20}}
                                                        texty={data.recurrence.timeSttgs}
                                                    />
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'every day.'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginBottom: 10}}
                                                    /> 
                                                    {
                                                        (showError) &&
                                                                        <Textapp 
                                                                            size={TEXTS_SIZE.small}
                                                                            text={'Enter the information correctly'}
                                                                            color={'red'}
                                                                            weight={'bold'}
                                                                            styles={{marginBottom: 10, textAlign: 'center'}}
                                                                        /> 
                                                    }
                                                    </View>
                                                </View>

                    }
                                       {
                        (showSettings && data.recurrence.type === 2) && 

                                                <View style={{width: '100%', alignContent: 'center'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Settings'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    />
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2}}>
                                                    <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                                    <TextInputApp 
                                                        value={ data.repeatTimes } 
                                                        onChange = { handleOnTimes }
                                                        styleT={{
                                                            width: '15%',
                                                            borderRadius:100,
                                                            margin: 10,
                                                        }}
                                                        color={'#48C6EF'}
                                                        type={'numeric'}
                                                    />
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={(data.repeatTimes < 1) ? 'time a week' : 'times a week'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 5}}
                                                    /> 
                                                    </View>
                                                    <DaysList data={data} setData={setData}/>
                                                    {
                                                        (showError) &&
                                                                        <Textapp 
                                                                            size={TEXTS_SIZE.small}
                                                                            text={'You must select at least one day of the week'}
                                                                            color={'red'}
                                                                            weight={'bold'}
                                                                            styles={{marginBottom: 10, textAlign: 'center'}}
                                                                        /> 
                                                    }
                                                    </View>
                                                </View>
                    }
                     {
                         
                        (showSettings &&  data.recurrence.type === 3) && 

                        <View style={{width: '100%', alignContent: 'center'}}>
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Settings'}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                            />
                            <View style={{borderTopWidth: 2, borderBottomWidth: 2}}>
                                <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                    <TextInputApp 
                                        value={ data.repeatTimes } 
                                        onChange = { handleOnTimes }
                                        styleT={{
                                            width: '15%',
                                            borderRadius:100,
                                            margin: 10,
                                        }}
                                        color={'#48C6EF'}
                                        type={'numeric'}
                                    />
                                    <Textapp 
                                        size={TEXTS_SIZE.small}
                                        text={(data.repeatTimes <= 1) ? 'time a month' : 'times a month'}
                                        color={'#48C6EF'}
                                        weight={'bold'}
                                        styles={{marginTop: 5}}
                                    /> 
                                </View>
                                <DatePickerApp 
                                    eventData= {data} 
                                    setEventData={setData}
                                    evento={true}
                                    texty={`Repeat every ${data.day}`}
                                    style={{justifyContent: 'center',height: 35,
                                    width: 200,
                                    borderRadius: 25,
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    alignSelf: 'center',
                                    marginBottom: 20}}
                                />
                            </View>
                        </View>
                    }
                     {
                        (showSettings && data.recurrence.type === 4) && 

                            <View style={{width: '100%', alignContent: 'center'}}>
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Settings'}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                            />
                            <View style={{borderTopWidth: 2, borderBottomWidth: 2}}>
                                <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
                                    <TextInputApp 
                                        value={ data.repeatTimes } 
                                        onChange = { handleOnChange }
                                        styleT={{
                                            width: '15%',
                                            borderRadius:100,
                                            margin: 10,
                                        }}
                                        color={'#48C6EF'}
                                        type={'numeric'}
                                    />
                                    <Textapp 
                                        size={TEXTS_SIZE.small}
                                        text={(data.repeatTimes <= 1) ? 'time a month' : 'times a month'}
                                        color={'#48C6EF'}
                                        weight={'bold'}
                                        styles={{marginTop: 5}}
                                    /> 
                                </View>
                                <DatePickerApp 
                                    eventData= {data} 
                                    setEventData={setData}
                                    evento={true}
                                    texty={`Repeat every ${data.day}/${data.month}`}
                                    style={{justifyContent: 'center',height: 35,
                                            width: 200,
                                            borderRadius: 25,
                                            borderColor: 'black',
                                            borderWidth: 2,
                                            alignSelf: 'center',
                                            marginBottom: 20}}
                                    month={true}
                                />
                            </View>
                    </View>
                    }
                    {
                        (showSettings || data.recurrence.type >0) &&
                        <View style={{marginTop: 40}}>
                        <Textapp 
                            size={TEXTS_SIZE.small}
                            text={'Duration'}
                            color={COLORS_APP.black2}
                            weight={'bold'}
                        />
                                        <BouncyCheckboxGroup
                        data={durationStaticData}
                        style={{ flexDirection: "column",}}
                        initial={data.end.type }
                        onChange={(selectedItem) => {
                        switch (selectedItem.text) {
                            case 'Always':
                                setData({...data, end:{type: 0,}, recurrence: {...data.recurrence, duration: ''}})
                                setDuration({...showDuration, ...{show: false}})
                                break;
                            case 'End Date':
                                setData({...data, end:{type: 1}})
                                setDuration({...showDuration, ...{text: selectedItem.text, show: true}})
                                break;
                            default:
                                break;
                        }
                        }}
                        />            
                        {
                        (data.end.type === 1) && 

                                                <View style={{width: '100%', alignContent: 'center'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Settings'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    />
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Until'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 20}}
                                                    /> 
                                                    <DatePickerApp 
                                                        eventData= {data} 
                                                        setEventData={setData}
                                                        style={{justifyContent: 'center', marginTop: 10, marginBottom: 10, width: '80%', marginLeft: 20}}
                                                        decision={'end'}
                                                        evento={true}
                                                        texty={data.end.time}
                                                    /> 
                                                    </View>
                                                </View>

                        }
                        </View>
                    }
                   {
                       (data.end.type !== undefined || data.recurrence.type === 0) &&                 <ButtonGradient
                                                            gradient={['#48C6EF','#6F86D6']}
                                                            sizeGradient = {{width:350, height:50}}
                                                            textButton={`Save`}
                                                            styleText={{color:'white', fontWeight:'bold'}}
                                                            styleButton={{justifyContent: 'center',width:350, height:50, marginTop: 25, marginBottom: 20}}
                                                            hanldeOnPress = { handleSavePreferences }
                                                        />
                   }

            </View>
        </ModalApp>    
        </KeyboardAvoidingView>
        </>
       
        
    );
}