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
import { DatePickerApp } from '../elements/DatePickerApp'
import { useNavigation } from '@react-navigation/native'

export const StepCreation = ({steps, setStep}) => {
    const navigation = useNavigation()
    const IMG_DEFAULT = 'https://firebasestorage.googleapis.com/v0/b/meetapp-prueba.appspot.com/o/groups_imgs_defaults%2Fimg_3.png?alt=media&token=2724ab38-867a-4d98-b971-3880faa72e93';
    LogBox.ignoreLogs(['Setting a timer for a long period of time']);
    const [ dataGroup, setDataGroup ] = useState({name:'',imageFile: null, image:'', description: '',code:'', creator: userStatic, startDate: '', finishDate: ''});
    const [ nameValidation, setNameValidation ] = useState(false);
    const dispatch = useDispatch();
    const handleOnChange = ( variable, text ) => setDataGroup({...dataGroup, [variable]: text})
    const hanldeSaveGroup = () => {
        dispatch( addNewGroup( dataGroup ) );
        setStep({...steps, ...{ stepCreation: false, stepCreated:true }});
    }



    return (
        <>
            <View style={{width: '100%'}}>
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginTop: 10, textAlign: 'center'}}
                color = {COLORS_APP.black2}
                text = {'Please, select a photo for the group'}

            />

            <View style={{backgroundColor: dataGroup.color, width: 230, height: 230, borderRadius: 110, alignSelf: 'center', justifyContent: 'center'}}>
                <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                    <Image
                            style={styles.tinyLogo}
                            source = {{uri:dataGroup.image !== "" ? dataGroup.image :  IMG_DEFAULT }}
                        />
                    <ButtonCamera onPress={ ( uriImg, file ) => {
                        setDataGroup({...dataGroup, ...{ image:uriImg, imageFile: file }})
                        }}/>
                </View>
            </View>

                <View >
                    <Textapp 
                        size={TEXTS_SIZE.medium}
                        text={'Group name'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                    />
                    <TextInputApp 
                        IconPerson={IconPersons}
                        placeholder={'Group name'}
                        // value={ groupData.name } 
                        onChange = { (value) => { setNameValidation( (value.length > 25) ), handleOnChange( 'name', value)}}
                        paddingLeftT={35}
                        styleT={{ 
                            width: '100%',
                            position: 'relative',
                            flexDirection:'row',
                            borderRadius: 100,
                        }}
                    />
                    {
                        (nameValidation) && <Textapp 
                            size= {12} 
                            styles = {{marginBottom:0, marginTop: 3, textAlign: 'center'}}
                            color = {'#D10000'}
                            text = {'Name too long. Max 25 characters'}
                        />
                    }
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
                    ( dataGroup.name.trim() !== '' && dataGroup.description.trim() !== '' && !nameValidation)
                    && <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 10, marginBottom: 10}}>
                            <ButtonGradient
                                gradient={['#48C6EF','#6F86D6']}
                                sizeGradient = {{width:300, height:50}}
                                textButton={`Create Group`}
                                styleText={{color:'white', fontWeight:'bold',}}
                                styleButton={{width:300, height:50}}
                                hanldeOnPress = { hanldeSaveGroup }
                            />
                        </View>
                }
            </View>
        </>
    )
}
