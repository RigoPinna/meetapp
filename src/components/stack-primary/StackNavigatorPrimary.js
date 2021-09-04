import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenListGroups } from '../listgGroup/ScreenListGroups';
import { ScreenChatInfo } from '../chat/ScreenChatInfo';
import { ModalScreenCreateEvent } from '../chat/ModalScreenCreateEvent';
import { ScreenChatGroup } from '../chat/ScreenChatGroup';
import { ModalScreenParticipants } from '../chat/ModalScreenParticipants';
import { ModalScreenCreateGroup } from '../listgGroup/ModalScreenCreateGroup';
import { ModalScreenJoinGroup } from '../listgGroup/ModalScreenJoinGroup';

const Stack = createNativeStackNavigator();

export const StackNavigatorPrimary = () => {
    return (
        <>
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
                            fontWeight:'bold', 
                        },
                    }}
                    component={ ScreenListGroups } />
                <Stack.Screen
                    name = "ScreenChatGroup"
                    options={{ headerShown:false,}}
                    component = { ScreenChatGroup }
                />
                <Stack.Screen 
                    name="ScreenChatInfo"
                    options={{
                        headerTitle: 'info', 
                        headerShown:false,
                    }}
                    component={ ScreenChatInfo } />
                <Stack.Screen
                    name="ModalCreateEvent"
                    component={ModalScreenCreateEvent}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ModalParticipants"
                    component={ModalScreenParticipants}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ModalCreateGroup"
                    component={ModalScreenCreateGroup}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ModalJoinGroup"
                    component={ModalScreenJoinGroup}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
            </Stack.Navigator>
        </>
    )
}
