import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { addNameAndImg } from '../../reducers/registerReducer'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconArrowRight } from '../icons/IconArrowRight'
import { IconArrowLeft } from '../icons/IconArrowLeft'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'


export const StepInfoProfile = ({ steps, setStep }) => {
    const dispatch = useDispatch()
    const { top } = useSafeAreaInsets();
    const [ userData, setUserData ] = useState({ image:'', name:'' });
    const handleOnChange = ( text ) => {
        setUserData({...userData, ...{ name:text }})
    }
    const hanldeGoToNextStep = () => {
        dispatch( addNameAndImg( {...userData} ) )
        setStep({...steps, ...{ stepInfoProfile: false, stepVerifyPhone:true }})
    }
    const hanldeGoBack = () => {
        setStep({...steps, ...{stepInfoProfile: false, stepWelcome:true, stepBack:true }})
    }
    return (
        <>
            <View style={{ width:50, height:50, position: 'absolute',top, left: 0}}>
                <ButtonGradient 
                    gradient={['#F3F7FE','#F3F7FE']}
                    sizeGradient = {{ width:50, height:50 }}
                    styleButton = {{width:50, height:50, alignItems: 'center',justifyContent: 'center' }}
                    IconLeft = { IconArrowLeft }
                    hanldeOnPress = { hanldeGoBack }    
                />
            </View>
            <Textapp 
                size= {TEXTS_SIZE.medium} 
                weight = {'bold'}
                styles = {{marginBottom:13, marginTop:top}}
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
