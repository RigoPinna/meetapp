import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenListGroups } from '../listgGroup/ScreenListGroups';
import { ScreenChatInfo } from '../chat/ScreenChatInfo';
import { ModalScreenCreateEvent } from '../chat/ModalScreenCreateEvent';
import { ScreenChatGroup } from '../chat/ScreenChatGroup';
import { ModalScreenCreateGroup } from '../listgGroup/ModalScreenCreateGroup';
import { ModalScreenColorChooser } from '../listgGroup/ModalScreenColorChooser';
import { ModalScreenJoinGroup } from '../listgGroup/ModalScreenJoinGroup';
import { ModalScreenEliminateGroup } from '../listgGroup/ModalScreenEliminateGroup';
import { ModalCalendar } from '../chat/ModalCalendar';
import { ScreenAgenda } from '../chat/ScreenAgenda';
import { PresentationScreen } from '../auth/PresentationScreen';
import { ModalScreenEditInfo } from '../chat/ModalScreenEditInfo';
import { ModalScreenPreferences } from '../chat/ModalScreenPreferences';
import { ScreenEvents } from '../chat/ScreenEvents';
import { ScreenEventInfo } from '../chat/ScreenEventInfo';

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
                        title:'Groups', 
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
                    name = "PresentationScreen"
                    component = { PresentationScreen }
                />
                <Stack.Screen 
                    name="ScreenChatInfo"
                    options={{
                        headerTitle: 'info', 
                        headerShown:false,
                    }}
                    component={ ScreenChatInfo } />
                <Stack.Screen 
                    name="ScreenListEvents"
                    options={{
                        headerTitle: 'info', 
                        headerShown:false,
                    }}
                    component={ ScreenEvents } />
                <Stack.Screen 
                    name="ScreenEventInfo"
                    options={{
                        headerTitle: 'info', 
                        headerShown:false,
                    }}
                    component={ ScreenEventInfo } />
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
                    name="ModalColorChooser"
                    component={ModalScreenColorChooser}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ModalPreferences"
                    component={ModalScreenPreferences}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ModalEditInfo"
                    component={ModalScreenEditInfo}
                    options={{
                        headerTransparent: true,
                        headerShadowVisible: false,
                        presentation: 'transparentModal',
                        headerTitle: '', 
                        headerBackVisible: false}}
                />
                <Stack.Screen
                    name="ScreenAgenda"
                    component={ScreenAgenda}
                    options={{
                        headerTitle: 'Agenda', 
                        headerShown:false,
                    }}
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
                <Stack.Screen
                    name="ModalEliminateGroup"
                    component={ModalScreenEliminateGroup}
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
