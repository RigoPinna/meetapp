
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Text, View, ScrollView, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { COLORS_APP } from '../ui/COLORS_APP'
import { IconApp } from '../IconApp'
import { Textapp } from '../elements/Textapp'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { styles2 } from '../../theme/appTheme'
import { db, firebase,firebaseConfig, phoneProvider } from '../../firebase/firebase-config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { IconArrowLeft } from '../icons/IconArrowLeft'
import { InputSelectapp } from '../elements/InputSelectapp'
import { dataCountry } from '../../services/fetchGetCodeAndCountryName'
import { useDispatch } from 'react-redux'
import { setData } from '../../reducers/authReducer'
import { HeaderDecoration } from '../auth/HeaderDecoration'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { getAuth } from "firebase/auth";

export const ScreenLogin = ({ stepLogin, setStepLogin }) => {
    const dispatch = useDispatch();
    const recaptchaVerifier = useRef( null );
    const [ userData, setUserData ] = useState({phone:'', countryCode:undefined, countries:[], verificationId:undefined, code:'' });
    const attemptInvisibleVerification = false;
    const { top } = useSafeAreaInsets();
    const handleGoBack = () => {
        setStepLogin({...stepLogin, ...{stepGo: false, stepBack:true}})
    }
    useEffect(() => {
        const countries = dataCountry.map( cty => ({ label: cty.name, value: cty.callingCodes[0], key:cty.alpha2Code }))
        setUserData({...userData, countries })
    }, [])

    const login = async () => {
        try {
            const phoneNumber = `+${userData.countryCode}${userData.phone}`;
            if( !!userData.verificationId ) {
                const credential = await firebase.auth.PhoneAuthProvider.credential(
                    userData.verificationId,
                    userData.code
                );
                const { user } = await firebase.auth().signInWithCredential( credential )
                // const userRef = await db.collection('users').where('phone', '==', '+528342542740' );
                await dispatch( setData( user.uid ) )
                // console.log(user.uid)
            } else {
                const verificationId = await phoneProvider.verifyPhoneNumber(
                    phoneNumber,
                    recaptchaVerifier.current
                  );
                  setUserData({...userData, verificationId });
            }
        } catch( err ) {
            Alert.alert(
                "Error",
                `${err}`,
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
    }



    return (


        <View>
                       
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={90}>
             <HeaderDecoration />
            <IconApp position={{position:'absolute',top:0,left:0, marginTop:150}} />
                <View style={{ width:50, height:50, position: 'absolute',top, left: 10}}>
                    <ButtonGradient 
                        gradient={['#F3F7FE','#F3F7FE']}
                        sizeGradient = {{ width:50, height:50 }}
                        styleButton = {{width:50, height:50, alignItems: 'center',justifyContent: 'center' }}
                        IconLeft = { IconArrowLeft }
                        hanldeOnPress = { handleGoBack }    
                            />
                </View>
                <ScrollView style={{flex:1}}>

                    <View style={{ flex:1,height:500}}>
                    <Text style={{marginBottom:13,marginLeft: 10, fontSize: TEXTS_SIZE.small, color:COLORS_APP.black2 }}>
                        {
                            !!userData.verificationId
                            ? "Enter the verification code that we have sent to your phone number."
                            : "Meetapp will send a SMS message to verify yoru phone number. Enter your country and phone number"
                        }
                        
                    </Text>
                    
                    <InputSelectapp 
                        itemsData = { userData.countries } 
                        setState = {( value ) =>{setUserData({...userData,...{countryCode:value}})}}  
                    />
                    {
                        userData.countryCode && <>
                                    <View style = { styles2.wrapperRegisterNumberPhone }>
                                        <Textapp
                                        size= {TEXTS_SIZE.medium}
                                        weight = {'bold'}
                                        color = {COLORS_APP.black1}
                                        text = {`+${userData.countryCode}`}
                                        />
                                        <TextInputApp 
                                            // value = { +userData.numberPhone }
                                            onChange = { ( value ) => setUserData({...userData,...{phone:+value}}) }
                                            placeholder = { 'Your phone' }
                                            styleT = {{ width:'85%', marginLeft:5, height:'100%'}}
                                            type = {'numeric'}
                                        />
                                    </View>
                                </>
                                
                    }
                    {
                        !!userData.verificationId 
                            && <TextInputApp 
                                    // value = { +userData.numberPhone }
                                    onChange = { ( value ) => setUserData({...userData,...{ code:value }}) }
                                    placeholder = { 'Verification code' }
                                    styleT = {{ width:'100%',height:50}}
                                    type = {'numeric'}
                                />
                    }
                    {
                        (userData.phone !== 0) 
                        && <ButtonGradient 
                                gradient={['#48C6EF','#6F86D6']}
                                sizeGradient = {{width:'110%', height:40}}
                                textButton={!!userData.verificationId ? "Login" : "Verify"}
                                styleText={{color:'white', fontWeight:'bold',}}
                                styleButton={{width:'100%', height:40,marginTop:30}}
                                hanldeOnPress = { login }
                            />
                    }   
                        

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            
            <FirebaseRecaptchaVerifierModal
                                ref={recaptchaVerifier}
                                firebaseConfig={firebaseConfig}
                                attemptInvisibleVerification={ attemptInvisibleVerification }
            />
        </View>
    )
}
