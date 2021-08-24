import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenChatGroup } from '../chat/ScreenChatGroup';
import { COLORS_APP } from '../ui/COLORS_APP';
import { ScreenListGroups } from '../listgGroup/ScreenListGroups';
import { ScreenChatInfo } from '../chat/ScreenChatInfo';
import { HeaderDecoration } from '../auth/HeaderDecoration';
import { Button, Image, ImageBackground } from 'react-native';
import { ModalScreenCreateEvent } from '../chat/ModalScreenCreateEvent';

const Stack = createNativeStackNavigator();

export const StackNavigatorPrimary = () => {
    return (
        <>
            {/* <ImageBackground source={require('../../assets/RectangleBackground.png')} 
            resizeMode="cover" style={{ width: "100%", height: 200, justifyContent: "center"}}/> */}
            <Stack.Navigator
                screenOptions = {{   
                    cardStyle: { backgroundColor:'white'},
                    
                    // headerBackImage: {HeaderDecoration}
                }}
            >

                <Stack.Screen 
                    name="ScreenListGroups" 
                    options={{
                        headerLargeTitle:true, 
                        title:'Your groups', 
                        headerTitleAlign:'left',
                        headerTitleStyle:{ 
                            fontWeight:'bold', 
                        },
                        headerStyle:{ height:80}
                    }}
                    component={ ScreenListGroups } />
                <Stack.Screen 
                    name="ScreenChatInfo"

                    options={{
                        headerTitle: 'info', 
                        headerShown:false,
                    }
                }
                    // options={{
                    //     headerLargeTitle:true,
                    //     title:'Chat',
                    //     headerTitleAlign:'left',
                    //     headerTitleStyle:{ 
                    //         fontSize:24, 
                    //         fontWeight:'bold', 
                    //     },
                    
                    //     headerStyle: {height:80},
                    //     // headerBackTitleVisible: true
                    // }} 
                    component={ ScreenChatInfo } />
                    <Stack.Screen
                        name="ModalCreateEvent"
                        component={ModalScreenCreateEvent}
                        options={{
                            headerTransparent: true,
                            headerShadowVisible: false,
                            presentation: 'transparentModal',
                        headerTitle: '', headerBackVisible: false}}
                    />
            </Stack.Navigator>
        </>
    )
}
