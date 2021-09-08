import React, { useContext, useState } from 'react'
import * as Progress from 'react-native-progress';
import { Text, View } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { ModalApp } from '../elements/ModalApp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconCheck } from '../icons/IconCheck'
import { ContextRegister } from '../../context-register-user/ContextRegister';
import { firebase } from '../../firebase/firebase-config';
export const ModalFinallyRegister = () => {
    const { dataRegister } = useContext( ContextRegister );
    const [ code, setCode ] = useState({ code:'', isLoading:false });
    const handleRegister = async () => {
        try {
            setCode({isLoading: true, ...code})
            const credential =  firebase.auth.PhoneAuthProvider.credential(
                dataRegister.verificationId,
                code.code
              );
            const resp = await firebase.auth().signInWithCredential(credential);
            console.log( resp )
            setCode({isLoading: false, ...code})
        }catch(e) {
            console.log( e )
        }
    }
    return (
        <ModalApp textTitle="Enter verification code" closeModal = { false }>
            <Text style={{marginTop:10}}>Enter the verification code that we have sent to your phone number.</Text>
            <TextInputApp 
                size={20}
                styleT={{height:50, marginBottom:10,}}
                placeholder="Code"
                value = {code.code}
                onChange = { ( value ) => setCode({...code,...{ code:value }}) }
            />
            
               { 
                    !code.isLoading 
                    && <ButtonGradient
                            gradient={['#0BA360','#3CBA92']}
                            sizeGradient = {{width:'110%', height:40}}
                            textButton={`Verify code`}
                            styleText={{color:'white', fontWeight:'bold',}}
                            styleButton={{width:'100%', height:40, }}
                            IconRight = { IconCheck }
                            disabled={ ( code.code === '' ) ? true : false}
                            hanldeOnPress = { handleRegister }
                        />
                }
        </ModalApp>
    )
}
