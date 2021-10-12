import React, { useContext, useState } from 'react'
import { Image, View } from 'react-native'
import { ContextRegister } from '../../context-register-user/ContextRegister'
import { addNameAndImg } from '../../reducers/registerReducer'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconArrowRight } from '../icons/IconArrowRight'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { useAsyncStorag } from "../../hooks/useAsyncStorage";

export const StepInfoProfile = ({ steps, setStep }) => {
    const { dispatch } = useContext( ContextRegister );

    const [ userData, setUserData ] = useState({ image:'', name:'' });

    const handleOnChange = ( text ) => {
        setUserData({...userData, ...{ name:text }})
    }
    const hanldeGoToNextStep = () => {
        dispatch(addNameAndImg( {...userData} ))
        // useAsyncStorag('@MyApp_USER','set', userData.name)
        setStep({...steps, ...{ stepInfoProfile: false, stepVerifyPhone:true }})
        // useAsyncStorag('@MyApp_USER','set', userData.name)
    }
    return (
        <>
            <Textapp 
                size= {TEXTS_SIZE.medium} 
                weight = {'bold'}
                styles = {{marginBottom:13, marginTop: 13}}
                text = {'Verify your information'}
            />
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13}}
                color = {COLORS_APP.black2}
                text = {'Please, select a profile photo'}
            />
            <View>
                <Image
                        style={styles.tinyLogo}
                        source = {
                                userData.image === '' 
                                    ? require('../../assets/avatarDefault.png')
                                    : {uri:userData.image}
                                }
                        
                    />
                <ButtonCamera onPress={ (uriImage) => { setUserData({...userData,...{image:uriImage}})} }/>
            </View>
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13}}
                color = {COLORS_APP.black2}
                text = {'What is your name ?'}
            />
            <View style={{ width:320}}>
                <TextInputApp 
                    value={ userData.name } 
                    onChange = { handleOnChange } 
                    type ={'text'} 
                    placeholder= {'Your name'}
                    styleT = {{width:'100%', height:50}}
                    />
            </View>
            {
                ( userData.name.trim() !== '' && userData.image.trim() !== '')
                    && <View style = {{flex:1, width:'100%', justifyContent:'flex-end', alignItems:'flex-end', padding:20}}>
                           <ButtonGradient 
                                gradient={['#48C6EF','#6F86D6']}
                                sizeGradient = {{width:200, height:40}}
                                textButton={`Next`}
                                styleText={{color:'white', fontWeight:'bold',}}
                                styleButton={{width:200, height:40, backgroundColor:'pink'}}
                                IconRight = { IconArrowRight }
                                hanldeOnPress = { hanldeGoToNextStep }
                            />
                        </View>
            }
        </>
    )
}
