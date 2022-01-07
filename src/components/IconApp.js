import React,{ useState,useEffect } from 'react'
import * as Font from 'expo-font';
import { Image, Text, View } from 'react-native';

export const IconApp = ({ position }) => {
    // const [ loadFont ] = useState( false );

    // useEffect(() => {
    //    ( !loadFont ) && Font.loadAsync({'Pacifico': require('../../assets/fonts/Pacifico.ttf'),})
    // }, [  loadFont ])
    return (
        <View style = {{ width: '100%',alignItems: 'center',...position}}>
            {/* <View style = {{padding:10, backgroundColor:'white', width:80, height:80, borderRadius:20, justifyContent: 'center', alignItems:'center',}}>
            <Text style={{ fontSize:32}}>M</Text> */}
                    <Image source={require('../assets/icon-App.png')}/>
        {/* </View> */}

        </View>

    )
}
