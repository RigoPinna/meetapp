import React, { useState } from 'react'
import { useEffect } from 'react'
import { Image, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { Buttonapp } from '../elements/Buttonapp'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconSave } from '../icons/IconSave'
import { IconUser } from '../icons/IconUser'
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
            
            <View style={{ width:'100%'}}>
                <TextInputApp 
                    IconPerson={IconUser}
                    placeholder={'Your name'}
                    value={ userData.name } 
                    onChange = { handleOnChange }/>
            </View>
            <Textapp 
                size= {TEXTS_SIZE.medium} 
                styles = {{marginLeft: 10, marginTop: 20, alignSelf: 'flex-start'}}
                color = {COLORS_APP.black2}
                text = {'Number phone'}
                weight={'bold'}
            />
            <View style={{flexDirection: 'row',alignSelf: 'flex-start',marginLeft: 10, alignItems: 'center'}}>
                <Image
                    style={{padding: 10,
                        margin: 5,
                        height: 50,
                        width: 50,
                        resizeMode: 'stretch',
                        }}
                    source={require('../../assets/flag-mexico.png')}
                />
                 <Textapp 
                    size= {TEXTS_SIZE.small} 
                    styles = {{marginLeft: 10}}
                    color = {COLORS_APP.black2}
                    text = {'+52 8340248975'}
                    weight={'bold'}
                />
            </View>
            <View style = {{marginTop: 150,width:'100%', alignItems:'center', padding:20, alignSelf: 'flex-end'}}>
                <ButtonGradient
                    gradient={['#0BA360','#3CBA92']}
                    sizeGradient = {{width:400, height:60}}
                    textButton={`Save`}
                    styleText={{color:'white', fontWeight:'bold',}}
                    styleButton={{justifyContent: 'center',width:400, height:60, backgroundColor:'pink'}}
                    IconLeft = { IconSave }
                    // hanldeOnPress = { hanldeGoToNextStep }
                />
            </View>
        </View>
    )
}
