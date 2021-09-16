import React, { useState } from 'react'
import { Textapp } from '../elements/Textapp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { ButtonGradient } from '../elements/ButtonGradient'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { IconPersons } from '../icons/IconPersons'
import { IconDocument } from '../icons/IconDocument'
import {  View, Image, LogBox } from 'react-native'
import { addNewGroup } from '../../reducers/groupReducer'
import { userStatic } from '../../firebase/firebase-config'
import { useDispatch } from 'react-redux'

export const StepCreation = ({steps, setStep}) => {

    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    const [ dataGroup, setDataGroup ] = useState({name:'',imageFile: null, image:'', description: '',code:'', creator: userStatic});
    const dispatch = useDispatch();
    const handleOnChange = ( variable, text ) => setDataGroup({...dataGroup, [variable]: text})
    const hanldeSaveGroup = () => {
        dispatch( addNewGroup( dataGroup ) );
        setStep({...steps, ...{ stepCreation: false, stepCreated:true }});
    }
    return (
        <>
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13, textAlign: 'center'}}
                color = {COLORS_APP.black2}
                text = {'Please, select a photo for the group'}

            />

            <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                <Image
                        style={styles.tinyLogo}
                        source = {
                            dataGroup.image === '' 
                                    ? require('../../assets/genericGroup.png')
                                    : {uri:dataGroup.image}
                                }
                    />
                <ButtonCamera onPress={ ( uriImg, file ) => {
                    setDataGroup({...dataGroup, ...{ image:uriImg, imageFile: file }})
                }}/>
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
                        // value={ groupData.name } 
                        onChange = { (value) => handleOnChange( 'name', value)}
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
                        // value={ groupData.description } 
                        onChange = { (value) => handleOnChange( 'description', value)}
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
                {
                // ( groupData.nameGroup.trim() !== '' && groupData.description.trim() !== '' && groupData.image.trim() !== '' )
                    ( dataGroup.name.trim() !== '' && dataGroup.description.trim() !== '')
                    && <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 10,}}>
                            <ButtonGradient
                                gradient={['#48C6EF','#6F86D6']}
                                sizeGradient = {{width:350, height:50}}
                                textButton={`Create Event`}
                                styleText={{color:'white', fontWeight:'bold',}}
                                styleButton={{width:350, height:50}}
                                hanldeOnPress = { hanldeSaveGroup }
                            />
                        </View>
                }
                
        </>
    )
}
