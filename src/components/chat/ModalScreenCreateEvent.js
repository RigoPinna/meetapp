import React, { useState } from 'react'
import {  View } from 'react-native'
import { ModalApp } from '../elements/ModalApp'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { styles2 } from '../../theme/appTheme'
import { DatePickerApp } from '../elements/DatePickerApp'
import { ButtonGradient } from '../elements/ButtonGradient'

export const ModalScreenCreateEvent = ({navigation}) => {
    const [ eventData, setEventData ] = useState({nameEvent:'', description:'',startDate:''});
    const handleOnChange = ( text ) => {
        setEventData({...eventData, ...{nameEvent:text}})
    }
    const handleOnChangeDescription = ( text ) => {
        setEventData({...eventData, ...{description:text}})
    }
  return (
    <View>
        <ModalApp navigation={navigation} textTitle={'Create Event'}>
            <View style={{marginLeft: -8}}>
                <View style={{marginTop: 40, }}>
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
                <View style={{marginTop: 40, }}>
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
                <View style={{marginTop: 40, }}>
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={'Start Date'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                    />
                </View>
                <DatePickerApp eventData= {eventData} setEventData={setEventData}/>
                <View style={{justifyContent: 'center',flex: 1}}>
                    <ButtonGradient
                        gradient={['#48C6EF','#6F86D6']}
                        sizeGradient = {{width:350, height:50}}
                        textButton={`Create Event`}
                        styleText={{color:'white', fontWeight:'bold',}}
                        styleButton={{justifyContent: 'center',width:350, height:50, backgroundColor:'pink'}}
                        // hanldeOnPress = { hanldeGoToNextStep }
                    />
                </View>
            </View>
        </ModalApp>
      </View>

  );
}
