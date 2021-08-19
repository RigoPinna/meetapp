import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenChatGroup } from '../chat/ScreenChatGroup';
import { COLORS_APP } from '../ui/COLORS_APP';
import { ScreenListGroups } from '../listgGroup/ScreenListGroups';

const Stack = createStackNavigator();

export const StackNavigatorPrimary = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                cardStyle: { backgroundColor:'white'},
            }}
        >
            <Stack.Screen 
                name="ScreenListGroups" 
                options={{
                    headerLargeTitle:true, 
                    title:'Messages', 
                    headerTitleAlign:'left',
                    headerTitleStyle:{ 
                        fontSize:24, 
                        fontWeight:'bold', 
                    },
                    headerStyle:{ height:80}
                   }}
                component={ ScreenListGroups } />
            <Stack.Screen 
                name="ScreenChatGroups" 
                options={ {title:'Chat', headerStyle: {height:80}}} 
                component={ ScreenChatGroup } />
        </Stack.Navigator>
    )
}
