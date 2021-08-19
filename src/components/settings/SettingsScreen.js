import React, { useState } from 'react'
import { useEffect } from 'react'
import { Image, TextInput, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Buttonapp } from '../elements/Buttonapp'
import { ButtonCamera } from '../elements/ButtonCamera'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'

export const SettingsScreen = ({ navigation }) => {
    const [ userData, setUserData ] = useState({image:'', name:''});
    const handleOnChange = ( text ) => {
        setUserData({...userData, ...{name:text}})
    }
    useEffect(()=>{
        navigation.setOptions({
            headerShow:false,
            title:'Settings'
        })
    },[])
    return (
        <View style={styles.settingsBackground}>
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
                size = { TEXTS_SIZE.medium }
                weight = {'bold'}
                text = {'Write your Name'}
                color = { COLORS_APP.black1 }
                styles = { { marginTop: 60} }
            />
            <View style={{ width:'100%'}}>
                <TextInputApp value={ userData.name } onChange = { handleOnChange }/>
            </View>
            <View style={{
                ...styles.textContainer,
                paddingTop: 100
            }}>
                <Buttonapp text={`Guardar`} typeButton = 'secondary' icon = 'save'/>
            </View>
        </View>
    )
}
