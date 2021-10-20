import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from 'react-native'
import { ButtonGradient } from '../elements/ButtonGradient'
import { ModalApp } from '../elements/ModalApp'
import { TextInputApp } from '../elements/TextInputApp'
import { IconCheck } from '../icons/IconCheck'
import { firebase } from '../../firebase/firebase-config'
import { registerUser } from '../../reducers/registerReducer'
import { SpinnerLoading } from '../SpinnerLoading/SpinnerLoading'

export const ModalFinallyRegister = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.registerReducer )
    const [ code, setCode ] = useState({ code:'', isLoading:false });

    const handleRegister = () => {
        setCode({isLoading: true, ...code})
        const credential =  firebase.auth.PhoneAuthProvider.credential(
            userData.verificationId,
            code.code
            );
        firebase.auth().signInWithCredential( credential ).then( resp => {
            console.log( resp )
            dispatch(registerUser( userData ))    
            setCode({ isLoading: false, ...code })
        }).catch( err => {
            console.log( err )
            console.log('no son iguales')
        })
    }
    return (
        <ModalApp textTitle="Enter verification code" closeModal = { false }>
            <Text style={{marginTop:10}}>Enter the verification code that we have sent to your phone number.</Text>
            <TextInputApp 
                size={20}
                styleT={{height:50, marginBottom:10}}
                placeholder="Code"
                value = {code.code}
                type = {'numeric'}
                onChange = { ( value ) => setCode({...code,code:value }) }
            />
            
               { 
                    !code.isLoading 
                    ? <ButtonGradient
                            gradient={['#0BA360','#3CBA92']}
                            sizeGradient = {{width:'110%', height:40}}
                            textButton={`Verify code`}
                            styleText={{color:'white', fontWeight:'bold',}}
                            styleButton={{width:'100%', height:40, }}
                            IconRight = { IconCheck }
                            disabled={ ( code.code === '' ) ? true : false}
                            hanldeOnPress = { handleRegister }
                        />
                    : <SpinnerLoading />
                }
        </ModalApp>
    )
}
