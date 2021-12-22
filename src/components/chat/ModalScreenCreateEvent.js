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

export const ModalScreenCreateEvent = ({navigation, route}) => {
    const dispatch = useDispatch();
    const {params} = route;
    const {name} = params
    const [stepColor, setStepColor] = useState({stepGo: false, stepBack: true})
    const [ eventData, setEventData ] = useState({name: name, nameEvent:'', description:'',startDate:'', color:'white'});
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
    const handleOpenColor = () => {
        setStepColor({...stepColor, ...{stepGo: true, stepBack: false}})
    }
     return (
        <>
            {
                stepColor.stepBack && <>
                <ModalApp navigation={navigation} textTitle={'Create Event'}>
                    <View style={{flex: 1, width: 380}}>
                    <View>
                            <Textapp 
                                size={TEXTS_SIZE.small}
                                text={'Name Event'}
                                color={COLORS_APP.black2}
                                weight={'bold'}
                            />
                            <TextInputApp 
                                placeholder={'Name event'}
                                value={ eventData.nameEvent } 
                                onChange = { handleOnChange }
                                styleT={{
                                    width: '100%',
                                    borderRadius:100,
                                }}
                            />
                        </View>
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
                        <View style={{marginTop: 20, marginBottom: 10}}>
                        <ButtonGradient
                            gradient={['#48C6EF','#6F86D6']}
                            sizeGradient = {{width:350, height:50}}
                            textButton={`Select Color`}
                            styleText={{color: eventData.color, fontWeight:'bold',}}
                            styleButton={{justifyContent: 'center',width:350, height:50}}
                            hanldeOnPress = { handleOpenColor }
                        />
                        </View>

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
        {
            stepColor.stepGo && <>
            {/* <ModalApp navigation={navigation} textTitle={'Create Event'}> */}
            <View style={{flex: 1}}>
            <ColorPickerApp
                                        eventData = {eventData}
                                        setEventData = {setEventData}
                                        stepColor = {stepColor}
                                        setStepColor = {setStepColor}
                                    />
                                    </View>
            {/* </ModalApp> */}
                                    
                                </>
        }
        </>
         
    );
}
