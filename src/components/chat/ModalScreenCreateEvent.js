import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import { ModalApp } from '../elements/ModalApp'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { DatePickerApp } from '../elements/DatePickerApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { useDispatch, useSelector } from 'react-redux'
import { addNewEvent } from '../../reducers/eventReducer'
import { ColorPickerApp } from '../elements/ColorPickerApp'
import { color } from 'react-native-reanimated'
import { TimeData } from './TimeData'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export const ModalScreenCreateEvent = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {params} = route;
    const {name, user} = params
    const date = new Date()
    const day = ('0'+ date.getDate()).slice(-2)
    const month = ('0'+ (date.getMonth() + 1)).slice(-2)
    const [stepColor, setStepColor] = useState({stepGo: false, stepBack: true})
   const [ eventData, setEventData ] = useState({
        name: name, 
        nameEvent:'', 
        description:'',
        startDate:'',
        end: {type: undefined, time: undefined}, 
        startTime: '',
        repeatTimes: '1', 
        color:'',
        choose: 'More recurrence options',
        paid: false,
        admin: false,
        day: day,
        month: month,
        textInformation: 'Choose the most convenient repetition',
        recurrence: {type: undefined,when: undefined, timeSttgs: undefined, duration: undefined},
        checkedDays: {sun: false, mon: false, tue: false, wed: false, thu: false, fri: false, sat: false}});

    const {uid} = useSelector(state => state.authRed )

    const handleOnChange = ( text ) => {
        setEventData({...eventData, ...{nameEvent:text}})
    }
    const handleOnChangeDescription = ( text ) => {
        setEventData({...eventData, ...{description:text}})
    }
    const handleCreateEvent = () => {
        dispatch( addNewEvent( eventData ) );
        navigation.goBack()
        // console.log(eventData)
    }
    const handleColorClick = () => {
        if(eventData.color != ''){
            setEventData({...eventData, ...{color: ''}})
        }
        navigation.navigate('ModalColorChooser', {eventData, setEventData});
    }

    const handleRepeatPreferences = () => 
    {
        navigation.navigate('ModalPreferences', {eventData, setEventData});
    }
     return (
        <>
            {
                stepColor.stepBack && <>
                <ModalApp navigation={navigation} textTitle={'Create New Event'}>
                    <View style={{width: 350}}>
                        <Textapp 
                            size={TEXTS_SIZE.small}
                            text={'Event Name'}
                            color={COLORS_APP.black2}
                            weight={'bold'}
                        />
                        <TextInputApp 
                            placeholder={'Event name'}
                            value={ eventData.nameEvent } 
                            onChange = { handleOnChange }
                            styleT={{
                                width: '95%',
                                borderRadius:100,
                            }}
                        />
                        <View style={{marginTop: 20, }}>
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Description'}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                            />
                            <TextInputApp 
                                placeholder={'Description'}
                                value={ eventData.description } 
                                onChange = { handleOnChangeDescription }
                                height={150}
                                styleT={{
                                    width: '95%',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    borderTopLeftRadius: 20,
                                }}
                                multiline={true}
                            />
                        </View>
                        {
                            (eventData.color == '')   ? <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 20,}}>
                                                <ButtonGradient
                                                    gradient={['#48C6EF','#48C6EF']}
                                                    sizeGradient = {{width:350, height:50}}
                                                    textButton={`Choose a color for the event`}
                                                    styleText={{color:'white', fontWeight:'bold',}}
                                                    styleButton={{width:350, height:50}}
                                                    hanldeOnPress = { handleColorClick }
                                                />
                                            </View>
                                        :   <View style={{ flex: 1, alignItems:'center',marginTop: 20, flexDirection: 'row'}}>
                                                <Textapp 
                                                    size={TEXTS_SIZE.small}
                                                    text={'The color of the event is: '}
                                                    color={COLORS_APP.black2}
                                                    weight={'bold'}
                                                />
                                                <View style={{width: 30, height: 30,backgroundColor: eventData.color, borderRadius: 100 }}/>
                                                <ButtonGradient
                                                    gradient={['#48C6EF','#48C6EF']}
                                                    sizeGradient = {{width:100, height:50}}
                                                    textButton={`Change?`}
                                                    styleText={{color:'white', fontWeight:'bold',}}
                                                    styleButton={{width:100, height:50, marginLeft: 10}}
                                                    hanldeOnPress = { handleColorClick }
                                                />
                                            </View>

                        }
                        <TimeData>
                            <View>
                                <View style={{backgroundColor: '#F0F0F0', borderRadius: 25}}>
                                    <View style={{padding: 10}}>
                                        <Textapp 
                                            size={TEXTS_SIZE.small}
                                            text={'Starts:'}
                                            color={COLORS_APP.black2}
                                            styles={{margin: 10}}
                                        />
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <DatePickerApp 
                                                eventData= {eventData} 
                                                setEventData={setEventData}
                                                texty={(eventData.startDate.trim()!== '') ? eventData.startDate : 'Select Date...'}
                                            /> 
                                            <DatePickerApp 
                                                    eventData= {eventData} 
                                                    setEventData={setEventData}
                                                    mode={'time'}
                                                    texty={(eventData.startTime.trim()!== '') ? eventData.startTime : 'Select the Time...'}
                                            />
                                            
                                        </View>
                                            <ButtonGradient
                                                gradient={['#F0F0F0','#F0F0F0']}
                                                sizeGradient = {{width:300, height:50}}
                                                textButton={eventData.choose}
                                                styleText={{color:'black', fontWeight:'bold',justifyContent: 'flex-start'}}
                                                styleButton={{width:300, height:50, margin: 10,borderTopWidth: 2, borderBottomWidth: 2}}
                                                hanldeOnPress = { handleRepeatPreferences }
                                            />

                                    </View>
                                </View>
                            </View>
                        </TimeData>

                        <View style={{paddingTop: 5,flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                            <BouncyCheckbox
                                style={{position: 'relative', width: 30}}
                                fillColor='#48C6EF'
                                isChecked={eventData.paid}
                                onPress={() => {setEventData({...eventData, ...{paid: !eventData.paid}})}}
                            />
                            <Text style={{flex: 1, marginLeft: 5}}> 
                                This event has a cost?
                            </Text>
                        </View>
                        <View style={{paddingTop: 5,flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
                            <BouncyCheckbox
                                style={{position: 'relative', width: 30}}
                                fillColor='#48C6EF'
                                isChecked={eventData.admin}
                                onPress={() => {setEventData({...eventData, ...{admin: !eventData.admin}})}}
                            />
                            <Text style={{flex: 1, marginLeft: 5}}> 
                                You will participate?
                            </Text>
                        </View>
                        {
                            ( eventData.nameEvent.trim() !== '' && eventData.description.trim() !== '' && eventData.startDate.trim() !== '' && eventData.recurrence.type !== undefined && eventData.startTime.trim() !== '' && eventData.color.trim() !== '')
                            &&  <View style={{ flex: 1,justifyContent: 'center', alignItems:'center',marginTop: 25, paddingBottom:10}}>
                                    <ButtonGradient
                                        gradient={['#48C6EF','#6F86D6']}
                                        sizeGradient = {{width:350, height:50}}
                                        textButton={`Create Event`}
                                        styleText={{color:'white', fontWeight:'bold',}}
                                        styleButton={{justifyContent: 'center',width:350, height:50}}
                                        hanldeOnPress = { handleCreateEvent }
                                    />
                                </View>
                        }

                    </View>
                </ModalApp>
                </>
            }
        </>
         
    );
}
