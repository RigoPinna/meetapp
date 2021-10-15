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
                const uid = await AsyncStorage.getItem('uid')
                if( uid ) {
                    if( userData.uid === null ) {
                        dispatch(setData( uid ))
                        setStatus( true )
                    }
                } else {
                    //Si existe el uid, se consulta el usuario, 
                    //por lo tanto se vuelve a ejecutar el useeffect y coloca el status como logeado(true)
                    (!!uid ) 
                        ? dispatch(setData( uid )) 
                        : setStatus( null )
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
