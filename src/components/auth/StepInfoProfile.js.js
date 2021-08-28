import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconArrowRight } from '../icons/IconArrowRight'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const StepInfoProfile = ({steps, setStep }) => {

    const [ userData, setUserData ] = useState({ image:'', name:'' });

    const handleOnChange = ( text ) => {
        setUserData({...userData, ...{ name:text }})
    }
    const hanldeGoToNextStep = () => {
        setStep({...steps, ...{ stepInfoProfile: false, stepVerifyPhone:true }})
    }
    return (
        <>
            <Textapp 
                size= {TEXTS_SIZE.medium} 
                weight = {'bold'}
                styles = {{marginBottom:13, marginTop: 13}}
                text = {'Veirfy your information'}
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
                <ButtonCamera onPress={ (uriImage) => { setUserData({...userData,...{image:uriImage}})}}/>
            </View>
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13}}
                color = {COLORS_APP.black2}
                text = {'What is your name ?'}
            />
            <View style={{ width:320}}>
                <TextInputApp value={ userData.name } onChange = { handleOnChange } type ={'text'} placeholder= {'Your name'}/>
            </View>
            {
                ( userData.name.trim() !== '' )
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
