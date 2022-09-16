import React from 'react';
import { StackNavigator } from './StackNavigator';
import { SettinsScreen } from '../screens/SettinsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();
export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                // 768 tamano standar
                drawerType: width >= 740 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: true  // Oculta la hamburguesa
            }}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: "Home" }} component={StackNavigator} />
            <Drawer.Screen name="Article" options={{ title: "Settings" }} component={SettinsScreen} />
        </Drawer.Navigator>
    );
}