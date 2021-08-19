import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, View } from 'react-native';

import { fetchGetCodeAndCountryName } from '../../services/fetchGetCodeAndCountryName';
import { styles2 } from '../../theme/appTheme';
import { InputSelectapp } from '../elements/InputSelectapp';
import { Textapp } from '../elements/Textapp';
import { TextInputApp } from '../elements/TextInputApp';
import { COLORS_APP } from '../ui/COLORS_APP';
import { TEXTS_SIZE } from '../ui/TEXTS_SIZE';


export const StepRegisterUser = () => {
    const [ countries, setCountries] = useState([]);
    const [ userData, setUserData ] = useState({countryCode:undefined,numberPhone:''});
    useEffect(() => {
        fetchGetCodeAndCountryName().then( resp => {
            const dataCountries = resp.map(({ name, alpha2Code,callingCodes }) => {
                return { label: name, value: callingCodes[0], key:alpha2Code };
            })
            setCountries( dataCountries );
        }).catch( err => console.log(err))

    }, [])
    
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
                styles = {{marginBottom:13, marginTop: 13}}
                color = {COLORS_APP.black2}
                text = {'Meetapp will send a SMS message to verify yoru phone number. Enter your country and phone number '}

            />
            <Image style={{resizeMode: 'cover'}} source ={require('../../../assets/Illusration-phone.png')}/>
            <InputSelectapp 
                itemsData = { countries } 
                setState = {( value ) =>{setUserData({...userData,...{countryCode:value}})}}  
            />
            {
                userData.countryCode
                    && <View style = { styles2.wrapperRegisterNumberPhone }>
                            <Textapp
                            size= {TEXTS_SIZE.medium}
                            weight = {'bold'}
                            color = {COLORS_APP.black1}
                            text = {`+${userData.countryCode}`}
                            />
                            <TextInputApp 
                                value = { userData.name }
                                onChange = { ( value ) => setUserData({...userData,...{name:value}}) }
                                placeholder = { 'Your phone' }
                                width = { '90%' }
                                type = {'numeric'}
                            />
                        </View>
            }
            
        </>
    )
}
