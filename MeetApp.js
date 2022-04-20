import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { StatusBar } from 'react-native';

import { setData } from './src/reducers/authReducer';
import { AppRoot } from './src/components/App/AppRoot';
import { RegisterUser } from './src/components/auth/RegisterUser';

export const MeetApp = () => {
    const [ status, setStatus ] = useState( undefined )
    const dispatch = useDispatch()
    const userData = useSelector( state => state.authRed )
    useEffect(() => {
        ( async () => {
            try {
                // await AsyncStorage.removeItem('uid')
                // await AsyncStorage.setItem('uid','NUC9BCOZZKV2rRLdVFf46sN3jDC2')
                const uid = await AsyncStorage.getItem('uid')
                console.log( uid )
                if( uid ) {
                    if( userData.uid === null ) {
                        dispatch(setData( uid ))
                        setStatus( true )
                        
                    } else {
                        setStatus(true)
                    }
                } else {
                    if( !!userData.uid ) {
                        await AsyncStorage.setItem( 'uid', userData.uid )
                        setStatus( true )
                    } else{
                        setStatus( null )
                    }
                }
            }catch(error) {
                //Si es false quiere decir que no está registrado
                setStatus( null )
            }
        })();
    }, [ userData.uid ])
    
    return (
       <>
            {
               ( !!status )
                ?  <AppRoot />
                : <RegisterUser />
            }
        </>
    );
}
