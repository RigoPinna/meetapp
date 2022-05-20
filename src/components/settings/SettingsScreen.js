import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { ButtonCamera } from '../elements/ButtonCamera'
import { ButtonGradient } from '../elements/ButtonGradient'
import { Textapp } from '../elements/Textapp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconSave } from '../icons/IconSave'
import { IconUser } from '../icons/IconUser'
import { COLORS_APP } from '../ui/COLORS_APP'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { fetchGetFlagCountry } from '../../services/fetchGetFlagCountry'
import { useEffect } from 'react'
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../reducers/authReducer'
import { Toastapp } from '../elements/ToastApp'
import { logoutUser } from '../../reducers/authReducer';

export const SettingsScreen = ({route}) => {
    const { top } = useSafeAreaInsets();
    const dispatch = useDispatch();
    const user = useSelector( state => state.authRed )
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(false)
    const [ userData, setUserData ] = useState({ imageURL:user.image, name:user.name, flag:'https://www.countryflags.io/mx/flat/64.png'});
    const[ loading, setLoading ] = useState( true );
    useEffect(() => {
        ( user.uid !== null ) && setLoading( false )
    }, [ user.uid ])

    const handleOnChange = ( text ) => {
        setUserData({...userData, name:text })
    }
    const getFlag = async () => {
        const flag = await fetchGetFlagCountry( 52 );
        setUserData({...userData,...{ flag } })
    }
    const hanldeUpdateUser = () => {
        dispatch( updateUser( userData ) )
        setVisible(true)
        setMessages([...messages, 'User Update!' + Math.random()])
    }
    const hanldeLogoutUser = async () => {
        dispatch( logoutUser())
    }
    return (
        <>
        {
            (loading === true ) 
                ?   <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Progress.CircleSnail spinDuration={1000} color={[COLORS_APP.primary, COLORS_APP.skyblue1]} />
                    </View>
                :   <View style={styles.settingsBackground}>
                        <Textapp 
                            size= {TEXTS_SIZE.long} 
                            styles = {{alignSelf: 'flex-start', marginTop:top}}
                            color = {COLORS_APP.black1}
                            text = {'Settings'}
                            weight={'bold'}
                        />
                        <View style={{width: '105%'}}>
                            <ButtonGradient
                                styleOpacity={{position: 'absolute', alignSelf: 'flex-end'}}
                                gradient={['#FFF','#FFF']}
                                sizeGradient = {{width:400, height:50}}
                                textButton={`Log out`}
                                styleText={{color:'#FF3838', fontWeight:'bold'}}
                                styleButton={{width:100,height:40, justifyContent:'center', marginTop: 0, borderWidth: 1, borderColor: '#FF3838'}}
                                hanldeOnPress = { hanldeLogoutUser }
                            />
                            <View style={{alignSelf: 'center'}}>
                                <Image
                                        style={styles.tinyLogo}
                                        source = {
                                                userData.imageURL === '' 
                                                    ? require('../../assets/avatarDefault.png')
                                                    : {uri:userData.imageURL}
                                                }
                                        
                                    />
                                <ButtonCamera onPress={ ( uriImg, file ) => {
                                    setUserData({...userData, ...{ imageURL:uriImg, image: file }})
                                }}/>
                            </View>
                        </View>
                        
                        <View style={{ width:'100%'}}>
                            <TextInputApp 
                                IconPerson={IconUser}
                                placeholder={'Your name'}
                                value={ userData.name } 
                                onChange = { handleOnChange }
                                marginTopT={50}
                                paddingLeftT={35}
                                styleT={{ 
                                    height: 50,
                                    position: 'relative',
                                    alignItems: 'center',
                                    marginTop: 50,
                                    flexDirection:'row',
                                    borderRadius: 100,
                                }}
                            />
                        </View>
                        <Textapp 
                            size= {TEXTS_SIZE.medium} 
                            styles = {{marginTop: 20, alignSelf: 'flex-start'}}
                            color = {COLORS_APP.black2}
                            text = {'Phone Number'}
                            weight={'bold'}
                        />
                        <View style={{flexDirection: 'row',alignSelf: 'flex-start',alignItems: 'center'}}>
                            <Textapp 
                                size= {TEXTS_SIZE.small} 
                                color = {COLORS_APP.black2}
                                text = {user.phone}
                                weight={'bold'}
                            />
                        </View>
                        <View style={{flex: 1, paddingBottom:10, justifyContent:'flex-end', alignItems: 'center', width: '100%'}}>
                            <ButtonGradient
                                    gradient={['#0BA360','#3CBA92']}
                                    sizeGradient = {{width: 330, height:50}}
                                    textButton={`Save`}
                                    styleText={{color:'white', fontWeight:'bold'}}
                                    styleButton={{width: 330, height:50, justifyContent:'center'}}
                                    IconLeft = { IconSave }
                                    hanldeOnPress = { hanldeUpdateUser }
                                />
                        </View> 
                        {
                        visible && messages.map((message) => (
                                        <Toastapp
                                            key={message}
                                            style={{top: top}}
                                            message={'user Update!'}
                                            onHide={() => {
                                            setMessages((messages) =>
                                                messages.filter(
                                                    (currentMessage) =>
                                                    currentMessage !== message
                                            ));
                                        }}
                                        />
                                    ))
                        }
                    </View>
        }
        </>
    )
}
