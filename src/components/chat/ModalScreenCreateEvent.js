import React, { useState } from 'react'
import {  View } from 'react-native'
import { ModalApp } from '../elements/ModalApp'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { DatePickerApp } from '../elements/DatePickerApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { useDispatch } from 'react-redux'
import { addNewEvent } from '../../reducers/eventReducer'
import { ColorPickerApp } from '../elements/ColorPickerApp'
import { color } from 'react-native-reanimated'

export const ModalScreenCreateEvent = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {params} = route;
    const {name} = params
    const [stepColor, setStepColor] = useState({stepGo: false, stepBack: true})
    const [ eventData, setEventData ] = useState({name: name, nameEvent:'', description:'',startDate:'', color:''});
    const handleOnChange = ( text ) => {
        setEventData({...eventData, ...{nameEvent:text}})
    }
    const handleOnChangeDescription = ( text ) => {
        setEventData({...eventData, ...{description:text}})
    }
    const handleCreateEvent = () => {
        dispatch( addNewEvent( eventData ) );
        navigation.goBack()
    }
    const handleColorClick = () => {
        if(eventData.color != ''){
            setEventData({...eventData, ...{color: ''}})
        }
        navigation.navigate('ModalColorChooser', {eventData, setEventData});
    }
     return (
        <>
            {
                stepColor.stepBack && <>
                <ModalApp navigation={navigation} textTitle={'Create New Event'}>
                    <View style={{flex: 1, width:350}}>
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
                                width: '100%',
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
                                    width: '100%',
                                    borderTopRightRadius: 20,
                                    borderBottomRightRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    borderTopLeftRadius: 20,
                                }}
                                multiline={true}
                            />
                        </View>
                        <View style={{marginTop: 20, marginBottom: 10}}>
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Start Date'}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                            />
                        </View>
                        <DatePickerApp 
                            eventData= {eventData} 
                            setEventData={setEventData}
                        />
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
                                                <View style={{width: 30, height: 30,backgroundColor: eventData.color, borderRadius: 100}}/>
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

                        {/* <View style={{marginTop: 5, marginBottom: 10}}>
                            <ColorPickerApp
                                eventData = {eventData}
                                setEventData = {setEventData}
                                stepColor = {stepColor}
                                setStepColor = {setStepColor}
                            />
                        </View>  */}

                        {
                            ( eventData.nameEvent.trim() !== '' && eventData.description.trim() !== '' && eventData.startDate.trim() !== '')
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
