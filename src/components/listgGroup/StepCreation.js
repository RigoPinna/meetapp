import React from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { IconPersons } from '../icons/IconPersons'
import { IconDocument } from '../icons/IconDocument'
import {  View, Image } from 'react-native'

export const StepCreation = ({steps, setStep, groupData, setGroupData }) => {
    const code = Math.round (Math.random() * (999 - 0)) +  Math.round (Math.random() * (999 - 0)) +  Math.round (Math.random() * (999 - 0))

    const handleOnChangeName = ( text ) => {
        setGroupData({...groupData, ...{nameGroup:text}})
    }
    const handleOnChangeDescription = ( text ) => {
        setGroupData({...groupData, ...{description:text}})
    }
    const hanldeGoToNextStep = () => {
        setStep({...steps, ...{ stepCreation: false, stepCreated:true }})
        setGroupData({...groupData, ...{code: code}})
    }

    return (
        <>
            <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                <Image
                        style={styles.tinyLogo}
                        source = {
                                groupData.image === '' 
                                    ? require('../../assets/genericGroup.png')
                                    : {uri:groupData.image}
                                }
  
                    />
                <ButtonCamera onPress={ (uriImage) => { setUserData({...groupData,...{image:uriImage}})}}/>
            </View>
                <View style={{marginTop: 20}}>
                    <Textapp 
                        size={TEXTS_SIZE.medium}
                        text={'Name group'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                    />
                    <TextInputApp 
                        IconPerson={IconPersons}
                        placeholder={'Name group'}
                        value={ groupData.nameGroup } 
                        onChange = { handleOnChangeName }
                        paddingLeftT={35}
                        styleT={{ 
                            width: '100%',
                            position: 'relative',
                            flexDirection:'row',
                            borderRadius: 100,
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
                        IconPerson={IconDocument}
                        placeholder={'Description'}
                        value={ groupData.description } 
                        onChange = { handleOnChangeDescription }
                        height={120}
                        paddingLeftT={35}
                        styleT={{ 
                            width: '100%',
                            position: 'relative',
                            alignSelf:'flex-start',
                            flexDirection:'row',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderTopLeftRadius: 10,
                        }}
                        multiline={true}
                    />
                </View>
                <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 35,}}>
                    <ButtonGradient
                        gradient={['#48C6EF','#6F86D6']}
                        sizeGradient = {{width:350, height:50}}
                        textButton={`Create Event`}
                        styleText={{color:'white', fontWeight:'bold',}}
                        styleButton={{width:350, height:50}}
                        hanldeOnPress = { hanldeGoToNextStep }
                    />
                </View>
        </>
    )
}
