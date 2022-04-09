import React, { useRef, useState } from 'react'
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

export const ModalScreenPreferences = ({navigation, route}) => {
    const [data, setData] = useState(route.params.eventData)
    const [textInformation, setTextInformation] = useState('This event will not repeat')
    const [showSettings, setshowSettings] = useState(false)
    const isMounted = useRef( null )
    // const [showSettings, setshowSettings] = useState({daily: false, weekly: false, montly: false, annually: false})
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
    const handlePickColor = () => {
        navigation.goBack();
    }
    const handleOnChange = ( text ) => {
        // ({...route.params.eventData, ...{repeatTimes:text}})
        setData({...data, ...{repeatTimes: text}})
    }
    return (
        <>
        <KeyboardAvoidingView
        ref={isMounted} 
        style={ stylesChat.wrapperKeyboard }
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 :90 }
            >
                
        <ModalApp styleContainer={{height: '100%',}} navigation={navigation} textTitle={'Repeat'} needScroll={false}>

                                <View style={{width: 350, height: '80%', marginTop: 10}}>
                        <Textapp 
                            size={TEXTS_SIZE.small}
                            text={textInformation}
                            color={COLORS_APP.black2}
                            // weight={'bold'}
                        />
                <BouncyCheckboxGroup
                    data={verticalStaticData}
                    style={{ flexDirection: "column",}}
                    initial={0}
                    onChange={(selectedItem) => {
                        switch (selectedItem.text) {
                            case 'No Repeat':
                                setTextInformation('This event will not repeat')
                                setshowSettings(false)
                                break;
                            case 'Daily':
                                setTextInformation('This event will repeat daily')
                                setshowSettings(true)
                                break;
                            case 'Weekly':
                                setTextInformation('This event will repeat weekly')
                                setshowSettings(true)
                                break;
                            case 'Montly':
                            setTextInformation('This event will repeat montly')
                            setshowSettings(true)
                            break;
                            case 'Annually':
                            setTextInformation('This event will repeat annually')
                            setshowSettings(true)
                            break;
                            default:
                                break;
                        }
                    }}
                />
                    {
                        (showSettings && textInformation.endsWith('daily')) && 

                                                <View style={{width: '100%', alignContent: 'center'}}>
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Settings'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    />
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                                                    {/* <TextInputApp 
                                                        // placeholder={'Event name'}
                                                        value={ data.repeatTimes } 
                                                        onChange = { handleOnChange }
                                                        styleT={{
                                                            width: '15%',
                                                            borderRadius:100,
                                                            margin: 10,
                                                                                                                        // color: '#48C6EF',
                                                        }}
                                                        color={'#48C6EF'}
                                                        type={'numeric'}
                                                    />*/}
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
                                                        style={{justifyContent: 'center', marginTop: 10, marginBottom: 10, width: '25%'}}
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
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2, flexDirection: 'row',justifyContent: 'center', alignItems: 'center'}}>
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
                                                        text={'once a week'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 5}}
                                                    /> 
                                                    </View>
                                                </View>
                    }
                     {
                        (showSettings && textInformation.endsWith('montly')) && 

                        <View style={{width: '100%', alignContent: 'center'}}>
                        {/* <Textapp 
                            size={TEXTS_SIZE.small}
                            text={'Settings'}
                            color={COLORS_APP.black2}
                            weight={'bold'}
                        /> */}
                        <View style={{borderTopWidth: 2, borderBottomWidth: 2, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', padding: 20}}>
                        {/* <TextInputApp 
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
                            text={'once a week'}
                            color={'#48C6EF'}
                            weight={'bold'}
                            styles={{marginTop: 5}}
                        />  */}
                        <Textapp 
                            size={TEXTS_SIZE.small}
                            text={'Coming soon'}
                            color={COLORS_APP.black2}
                            weight={'bold'}
                        />
                        </View>
                    </View>
                    }
                     {
                        (showSettings && textInformation.endsWith('annually')) && 

                                                <View style={{width: '100%', alignContent: 'center'}}>
                                                    {/* <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Settings'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    /> */}
                                                    <View style={{borderTopWidth: 2, borderBottomWidth: 2, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', padding: 20}}>
                                                    {/* <TextInputApp 
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
                                                        text={'once a week'}
                                                        color={'#48C6EF'}
                                                        weight={'bold'}
                                                        styles={{marginTop: 5}}
                                                    />  */}
                                                    <Textapp 
                                                        size={TEXTS_SIZE.small}
                                                        text={'Coming soon'}
                                                        color={COLORS_APP.black2}
                                                        weight={'bold'}
                                                    />
                                                    </View>
                                                </View>
                                                
                    }
                <ButtonGradient
                    gradient={['#48C6EF','#6F86D6']}
                    sizeGradient = {{width:350, height:50}}
                    textButton={`Save`}
                    styleText={{color:'white', fontWeight:'bold'}}
                    styleButton={{justifyContent: 'center',width:350, height:50, marginTop: 25}}
                    hanldeOnPress = { handlePickColor }
                />
            </View>

                                
                                
                                


            
        </ModalApp>    
        </KeyboardAvoidingView>
        </>
        
    );
}