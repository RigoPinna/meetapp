import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { COLORS_APP } from '../ui/COLORS_APP'

export const HeaderDecoration = () => {
    
    return (
        <>
         <View style ={{width:'100%', height:280, overflow: 'hidden', position: 'relative'}}>
                <View style ={{width:280, height:280,borderRadius:240, backgroundColor:COLORS_APP.yellow3, position:'absolute',left:-50,top:-100,}}></View>
                <View style ={{width:260, height:260,borderRadius:240, backgroundColor:COLORS_APP.blue1, position:'absolute', top:-130,right:-80,}}></View>
                <View style ={{width:260, height:260,borderRadius:240, backgroundColor:COLORS_APP.skyblue5, position:'absolute', right:-40, bottom:-100,}}></View>
                <View style ={{width:200, height:200,borderRadius:140, backgroundColor:COLORS_APP.primary, position:'absolute', left:-20, bottom:-10,}}></View>
                <BlurView intensity={100} style={[StyleSheet.absoluteFill, {position:'absolute', top:0,left:0,width:'100%', height:280}]}>

                </BlurView>
                <View style ={{
                    width:'100%', 
                    height:30,
                    position:'absolute', 
                    bottom:0,
                    left:0,
                    backgroundColor:'white',
                    borderTopLeftRadius:50,
                    borderTopRightRadius:50,
                    }}>
                </View>
        </View>
            
        </>
    )
}
