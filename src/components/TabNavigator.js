import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from './settings/SettingsScreen';
import { MenuPrimary } from './stack-primary/MenuPrimary';
import { StackNavigatorPrimary } from './stack-primary/StackNavigatorPrimary';
import { ButtonTabBarMessage } from './tabBarIcons.js/ButtonTabBarMessage';
import { ButtonTabBarSettings } from './tabBarIcons.js/ButtonTabBarSettings';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
            <Tab.Navigator 
                screenOptions={{
                    tabBarShowLabel:false,
                    headerTitleAlign:'left',
                    headerTitle:{fontSize:22}, 
                    cardStyle: { backgroundColor:'white'},
                    tabBarStyle:{ 
                        borderTopColor:'white', 
                        borderTopWidth:0, 
                        elevation:0,
                        alignItems:'center',
                        height:60,
                    },

                }}
               
            >
                <Tab.Screen 
                    name ="ListGroup" 
                    options = {{
                        headerShown:false,
                        title:'Messages',
                        headerRight:() => <MenuPrimary />,
                        tabBarIcon: props => <ButtonTabBarMessage {...props } />
                       
                    }}  
                    component = { StackNavigatorPrimary } />
                <Tab.Screen 
                    name ="Settings" 
                    options = {{
                        headerShown:false,
                        tiitle:'Settings',
                        tabBarIcon: props => <ButtonTabBarSettings {...props } />
                    }}
                    component = {SettingsScreen} />
            </Tab.Navigator>
    )
}
