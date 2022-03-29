import React, { useState, useReducer } from 'react'
import { ModalApp } from '../elements/ModalApp'
import { cleanGroup, updateGroup } from '../../reducers/groupReducer';
import { useDispatch } from 'react-redux';
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

export const ModalScreenEditInfo = ({navigation, route}) => {
     const IMG_DEFAULT = 'https://firebasestorage.googleapis.com/v0/b/meetapp-prueba.appspot.com/o/groups_imgs_defaults%2Fimg_3.png?alt=media&token=2724ab38-867a-4d98-b971-3880faa72e93';
    const { params } = route;
    const { name, description, image, id} = params;
    const [ dataGroup, setDataGroup ] = useState({name:name,image: image, description: description, id: id});
    const [ nameValidation, setNameValidation ] = useState(false);
    const dispatch = useDispatch();
    const handleOnChange = ( variable, text ) => setDataGroup({...dataGroup, [variable]: text})
    const hanldeSaveGroup = () => {
        console.log(dataGroup.image)
        dispatch( updateGroup( dataGroup ) );
        navigation.goBack()
    }
    const clean = () => {
        dispatch(cleanGroup())
    }
    return (
        <ModalApp navigation={navigation} textTitle={'Edit Group'} handle = {clean}>
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13, textAlign: 'center'}}
                color = {COLORS_APP.black2}
                weight={'bold'}
                text = {'Image of group'}

            />

            <View style={{alignItems:'flex-end', alignSelf: 'center'}}>
                <Image
                        style={styles.tinyLogo}
                        source = {{uri:dataGroup.image !== "" ? dataGroup.image :  IMG_DEFAULT }}
                    />
                <ButtonCamera onPress={ ( uriImg, file ) => {
                    setDataGroup({...dataGroup, ...{ image:uriImg }})
                }}/>
            </View>
                <View style={{marginTop: 20}}>
                    <Textapp 
                        size={TEXTS_SIZE.small}
                        text={'Name group'}
                        color={COLORS_APP.black2}
                        weight={'bold'}
                    />
                    <TextInputApp 
                        IconPerson={IconPersons}
                        placeholder={'Name group'}
                        value={ dataGroup.name } 
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
                        value={ dataGroup.description } 
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
                    ( dataGroup.name.trim() !== '' && dataGroup.description.trim() !== '' && dataGroup.image.trim() !== '' && !nameValidation)
                    && <View style={{ flex: 1,justifyContent: 'flex-end', alignItems:'center',marginTop: 10,}}>
                            <ButtonGradient
                                gradient={['#48C6EF','#6F86D6']}
                                sizeGradient = {{width:350, height:50}}
                                textButton={`Update Group`}
                                styleText={{color:'white', fontWeight:'bold',}}
                                styleButton={{width:350, height:50}}
                                hanldeOnPress = { hanldeSaveGroup }
                            />
                        </View>
                }
        </ModalApp>    
    );
}
