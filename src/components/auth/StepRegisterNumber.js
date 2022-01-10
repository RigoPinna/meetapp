import React, { useState, useEffect, useRef, useContext } from 'react'
import { firebaseConfig, phoneProvider} from '../../firebase/firebase-config';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';

import { dataCountry, fetchGetCodeAndCountryName } from '../../services/fetchGetCodeAndCountryName';
import { Image, View } from 'react-native';
import { styles2 } from '../../theme/appTheme';
import { InputSelectapp } from '../elements/InputSelectapp';
import { Textapp } from '../elements/Textapp';
import { TextInputApp } from '../elements/TextInputApp';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';
import { ButtonGradient } from '../elements/ButtonGradient';
import { ModalFinallyRegister } from './ModalFinallyRegister';
import { addPhoneAndVerifyData } from '../../reducers/registerReducer';
import { useDispatch } from 'react-redux';

export const StepRegisterUser = () => {
    const dispatch = useDispatch()
    const [ viewModal, setViewModal] = useState( false );
    const [ countries, setCountries] = useState([]);
    const [ userData, setUserData ] = useState({ countryCode:undefined, phone:0 });
    const recaptchaVerifier = useRef( null );
    const attemptInvisibleVerification = false;
    // const data = useAsyncStorag('@MyApp_USER','get')
    useEffect(() => {
        let controller = new AbortController();
        ( async ()=>{
            try {
                // const dataCountries = await fetchGetCodeAndCountryName();
                controller = null;
                setCountries( dataCountry.map( cty => ({ label: cty.name, value: cty.callingCodes[0], key:cty.alpha2Code })) );
            } catch( e ) {

            }
        })();
        // console.log('data', data)
        return () => controller?.abort();

    }, [])
    const hanldeSeendCode = async () => {
        try {
           
            const phoneNumber = `+${userData.countryCode}${userData.phone}`;
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            dispatch( addPhoneAndVerifyData({ verificationId,...userData,}) )
            setViewModal( true )
            console.log('viewModal', viewModal)
        } catch( err ) {
            console.log( err )
        }
    }
    return (
        <>
            <Textapp 
                size= {TEXTS_SIZE.medium} 
                weight = {'bold'}
                styles = {{marginBottom:13, marginTop: 13}}
                text = {'Veirfy your phone number'}
            />
            <Textapp 
                size= {TEXTS_SIZE.small} 
                styles = {{marginBottom:13, marginTop: 13, marginLeft: 10}}
                color = {COLORS_APP.black2}
                text = {'Meetapp will send a SMS message to verify yoru phone number. Enter your country and phone number '}

            />
            <Image style={{resizeMode: 'cover'}} source ={require('../../../assets/Illusration-phone.png')}/>
            <InputSelectapp 
                itemsData = { countries } 
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
             <FirebaseRecaptchaVerifierModal
                                ref={recaptchaVerifier}
                                firebaseConfig={firebaseConfig}
                                attemptInvisibleVerification={ attemptInvisibleVerification }
                            />
            {
                (userData.phone !== 0) && <ButtonGradient 
                                                gradient={['#48C6EF','#6F86D6']}
                                                sizeGradient = {{width:'110%', height:40}}
                                                textButton={`Register`}
                                                styleText={{color:'white', fontWeight:'bold',}}
                                                styleButton={{width:'100%', height:40,marginTop:30}}
                                                // IconRight = { IconArrowRight }
                                                hanldeOnPress = { hanldeSeendCode }
                                            />
            }   
            {/* { viewModal && <ModalFinallyRegister /> } */}
            <ModalFinallyRegister />
        </>
    )
}
