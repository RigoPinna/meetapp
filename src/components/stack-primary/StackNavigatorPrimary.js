import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenChatGroup } from '../chat/ScreenChatGroup';
import { COLORS_APP } from '../ui/COLORS_APP';
import { ScreenListGroups } from '../listgGroup/ScreenListGroups';
import { ScreenChatInfo } from '../chat/ScreenChatInfo';
import { HeaderDecoration } from '../auth/HeaderDecoration';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export const StackNavigatorPrimary = () => {
    return (
        <>
        
            <Stack.Navigator
                screenOptions = {{       
                    cardStyle: { backgroundColor:'white'},
                    headerBackImage: {HeaderDecoration}
                }}
            >

                <Stack.Screen 
                    name="ScreenListGroups" 
                    options={{
                        headerLargeTitle:true, 
                        title:'Your groups', 
                        headerTitleAlign:'left',
                        headerTitleStyle:{ 
                            fontSize:24, 
                            fontWeight:'bold', 
                        },
                        headerStyle:{ height:80}
                    }}
                    component={ ScreenListGroups } />
                <Stack.Screen 
                    name="ScreenChatInfo" 
                    options={{headerTitle: ''}}
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
            </Stack.Navigator>
        </>
    )
}
