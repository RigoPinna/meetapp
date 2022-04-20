import React, { useRef, useState } from 'react'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
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
    const [textInformation, setTextInformation] = useState('This event will not repeat')
    const [showSettings, setshowSettings] = useState(false)
    const [showDuration, setDuration] = useState({text: '', show: false})
    const isMounted = useRef( null )
    const date = new Date()
    const day = ('0'+ date.getDate()).slice(-2)
    const month = ('0'+ (date.getMonth() + 1)).slice(-2)
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
          text: "Specific Number of Times",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
        {
          id: 2,
          text: "End Date",
          fillColor: "#48C6EF",
          unfillColor: "white",
          iconStyle: iconStyle("black"),
          textStyle: styles.textStyle,
          style: styles.verticalStyle,
          iconImageStyle: styles.iconImageStyle,
        },
      
      ];
    const handleSavePreferences = () => {
        route.params.setEventData(data)
        navigation.goBack();
    }
    const handleColorClick = () => {
            <DatePickerApp 
            eventData= {data} 
            setEventData={setData}
            mode={'time'}
            event={true}
            style={{justifyContent: 'center', marginTop: 10, marginBottom: 10, width: '25%', marginLeft: 20}}
        />
    }
    const handleOnChange = ( text ) => {
        // ({...route.params.eventData, ...{repeatTimes:text}})
        setData({...data, ...{repeatTimes: text}})
    }
    const handleOnChangeTimes = ( text ) => setData(setData({...data, ...{...endless, ...{times: text }}}))
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
                            text={textInformation}
                            color={COLORS_APP.black2}
                        />
                <BouncyCheckboxGroup
                    data={verticalStaticData}
                    style={{ flexDirection: "column",}}
                    initial={data.initial}
                    onChange={(selectedItem) => {
                        switch (selectedItem.text) {
                            case 'No Repeat':
                                setTextInformation('This event will not repeat')
                                setData({...data, ...{choose: selectedItem.text, initial: 0, endless: {}}})
                                setshowSettings(false)
                                break;
                            case 'Daily':
                                setTextInformation('This event will repeat daily')
                                setData({...data, ...{choose: selectedItem.text, initial: 1, endless: {}}})
                                // setData({...data, endless:{}})
                                setshowSettings(true)
                                break;
                            case 'Weekly':
                                setTextInformation('This event will repeat weekly')
                                setData({...data, ...{choose: selectedItem.text, initial: 2, endless: {}}})
                                setshowSettings(true)
                                break;
                            case 'Montly':
                            setTextInformation('This event will repeat montly')
                            setData({...data, ...{choose: selectedItem.text, initial: 3, endless: {}}})
                            setshowSettings(true)
                            break;
                            case 'Annually':
                            setTextInformation('This event will repeat annually')
                            setData({...data, ...{choose: selectedItem.text, initial: 4, endless: {}}})
                            setshowSettings(true)
                            break;
                            default:
                                break;
                        }
                    }}
                />
                    {
                        (showSettings && textInformation.endsWith('daily') || data.initial === 1) && 

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
                                                        event={true}
                                                        style={{justifyContent: 'center', marginTop: 10, marginBottom: 10, width: '25%', marginLeft: 20}}
                                                    />
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'every day.'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginBottom: 10}}
                                                    /> 
                                                    </View>
                                                </View>

                    }
                                       {
                        (showSettings && textInformation.endsWith('weekly')) && 

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
                                                        text={(data.repeatTimes < 1) ? 'time a week' : 'times a week'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 5}}
                                                    /> 
                                                    </View>
                                                    <DaysList/>
                                                    </View>
                                                </View>
                    }
                     {
                        (showSettings && textInformation.endsWith('montly')) && 

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
                                <ButtonGradient
                                    gradient={['white','white']}
                                    sizeGradient = {{width:350, height:50}}
                                    textButton={`Repeat every ${day}`}
                                    styleText={{color:'#48C6EF', fontWeight:'bold'}}
                                    styleButton={{justifyContent: 'center',height: 35,
                                    width: 200,
                                    borderRadius: 25,
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    alignSelf: 'center',
                                    marginBottom: 20}}
                                    // hanldeOnPress = { handlePickColor }
                                />
                            </View>
                        </View>
                    }
                     {
                        (showSettings && textInformation.endsWith('annually')) && 

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
                                <ButtonGradient
                                    gradient={['white','white']}
                                    sizeGradient = {{width:350, height:50}}
                                    textButton={`Repeat every ${day}/${month}`}
                                    styleText={{color:'#48C6EF', fontWeight:'bold'}}
                                    styleButton={{justifyContent: 'center',height: 35,
                                    width: 200,
                                    borderRadius: 25,
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    alignSelf: 'center',
                                    marginBottom: 20}}
                                    // hanldeOnPress = { handlePickColor }
                                />
                            </View>
                    </View>
                    }
                    {
                        (showSettings || data.initial >0) &&
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
                        initial={(data.endless.initial !== undefined) && data.endless.initial }
                        onChange={(selectedItem) => {
                        switch (selectedItem.text) {
                            case 'Always':
                                setData({...data, endless:{ ...data.endless, always:true, initial: 0}})
                                setDuration({...showDuration, ...{show: false}})
                                break;
                            case 'Specific Number of Times':
                                setDuration({...showDuration, ...{text: selectedItem.text, show: true}})
                                break;
                            case 'End Date':
                                setDuration({...showDuration, ...{text: selectedItem.text, show: true}})
                                break;
                            default:
                                break;
                        }
                        }}
                        />
                                                        {
                        (showDuration.show && showDuration.text.endsWith('Times')) && 

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
                                                        value={ data.endless.spec.times } 
                                                        onChange = { handleOnChangeTimes }
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
                                                        text={'times in all'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 5}}
                                                    /> 
                                                    </View>
                                                    <DaysList/>
                                                    </View>
                                                </View>
                        }
                        {
                        (showDuration.show && showDuration.text.endsWith('Date')) && 

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
                                                    /> 
                                                    </View>
                                                </View>

                        }
                        </View>
                    }
                   
                <ButtonGradient
                    gradient={['#48C6EF','#6F86D6']}
                    sizeGradient = {{width:350, height:50}}
                    textButton={`Save`}
                    styleText={{color:'white', fontWeight:'bold'}}
                    styleButton={{justifyContent: 'center',width:350, height:50, marginTop: 25, marginBottom: 20}}
                    hanldeOnPress = { handleSavePreferences }
                />
            </View>
        </ModalApp>    
        </KeyboardAvoidingView>
        </>
       
        
    );
}