import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIos />
        : <TabsAndroid />
}


const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottonTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'StackNavigator':
                            iconName = 'ST'
                            break;

                        default:
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            <BottonTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottonTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottonTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottonTabAndroid.Navigator>
    );
}


const BottonTabIos = createBottomTabNavigator();

const TabsIos = () => {
    return (
        <BottonTabIos.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                headerShown: false,  // Oculta la hamburguesa

                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';

                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'StackNavigator':
                            iconName = 'ST'
                            break;

                        default:
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
            <BottonTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottonTabIos.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={TopTabNavigator} />
            <BottonTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottonTabIos.Navigator>
    );
}