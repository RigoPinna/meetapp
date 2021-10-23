import { BlurView } from 'expo-blur'
import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { HeaderDecoration } from '../auth/HeaderDecoration'
import { ButtonGradient } from '../elements/ButtonGradient'
import { COLORS_APP } from '../ui/COLORS_APP'
import { IconApp } from '../IconApp'
import { Textapp } from '../elements/Textapp'
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE'
import { TextInputApp } from '../elements/TextInputApp'
import { styles2 } from '../../theme/appTheme'
import { db, firebase, firebaseConfig } from '../../firebase/firebase-config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { IconArrowLeft } from '../icons/IconArrowLeft'
// import { getAuth } from "firebase/auth";

export const ScreenLogin = ({ stepLogin, setStepLogin }) => {
    const [ userData, setUserData ] = useState({phone:''});
    // const auth = getAuth();
    // const user = firebase.auth().currentUser;
    // const recaptchaVerifier = useRef( null );
    // const attemptInvisibleVerification = false;
    const login = async () => {
        if( userData.phone !== '' ) {
            // if(user !== null){
            //     console.log(user.phone)
            // }
            // firebase.auth().signInWithPhoneNumber(userData.phone, recaptchaVerifier.current).then(userCredentials => {
            //     console.log(userCredentials)
            // })
            // const userRef = db.collection('users');
            // const doc = await userRef.where('phone', '==' user.phone)
            // console.log('user =>', user)
            // if(userData.phone === user.phone){

            // }
            // try {
            const userRef = db.collection('users');
            const doc = await userRef.where('phone','==',userData.phone).get();

            if(doc.exists){
                const data = doc.data();
                console.log(data)
            }
            // // if(userRef.exists){
            // //     const data = userRef.data()
            // //     console.log(data)
            // // }
            // } catch (error) {
            //     console.log(error)
            // }
            
        } 
    }
    const goBack = () => {
        setStepLogin({...stepLogin, ...{stepGo: false, stepBack:true}})
    }

    return (
        <>  
            <Image style = {{
                position: 'absolute',
                width: '100%',
                height: '100%',
            }}
            source = {require('../../assets/fondoLogin.png')} />
            <View style={{position: 'absolute', top: 10, left: 10}}>
            <ButtonGradient 
                gradient={['#F3F7FE','#F3F7FE']}
                sizeGradient = {{ width:100, height:100 }}
                styleButton = {{ width: 50, height: 50, marginTop: 10}}
                IconLeft = { IconArrowLeft }
                hanldeOnPress = { () => { goBack() } }
                colorIcon = {COLORS_APP.black2}
            />
            </View>
            <IconApp position={{position:'absolute',top:0,left:0, marginTop:100}} />
            <Textapp 
                text={'Login'}
                styles={{position:'absolute',top:0,left:160, marginTop:190}}
                weight={'bold'}
                size={TEXTS_SIZE.long}
                color={COLORS_APP.white}
            />
            <View style={{height: '100%',justifyContent: 'center', marginTop: 100}}>
                <Textapp
                    text={'Enter your phone to access'}
                    styles={{textAlign: 'center'}}
                    size={TEXTS_SIZE.small}
                    color={COLORS_APP.black1}
                />
                <View style = { styles2.wrapperRegisterNumberPhone }>
                    <Textapp
                                size= {TEXTS_SIZE.medium}
                                weight = {'bold'}
                                color = {COLORS_APP.black1}
                                text = {`+`}
                    />
                    <TextInputApp 
                        onChange = { ( value ) => setUserData({...userData, ...{phone: value}}) }
                        placeholder = { 'Your phone' }
                        styleT = {{ width:'85%', marginLeft:5, height:'100%'}}
                        type = {'numeric'}
                    />
                </View>
                <ButtonGradient 
                    gradient={['#0ACFFE','#49B6DA']}
                    sizeGradient = {{width:200, height:40}}
                    textButton={`Login`}
                    styleText={{color:'white', fontWeight:'bold',}}
                    styleButton={{width:200, height:40, backgroundColor:'pink', marginTop: 50, marginLeft: 80}}
                    hanldeOnPress = { login }
                />
            </View>

            {/* <FirebaseRecaptchaVerifierModal
                                ref={recaptchaVerifier}
                                firebaseConfig={firebaseConfig}
                                attemptInvisibleVerification={ attemptInvisibleVerification }
            /> */}
        {/* </View> */}
 
        </>
    )
}
