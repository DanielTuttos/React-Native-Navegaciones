import React from 'react';
// import { StackNavigator } from './StackNavigator';
import { SettinsScreen } from '../screens/SettinsScreen';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
// import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();
// const SettingsStackScreen = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name='SettingsScreen'
//                 component={SettinsScreen}
//             />
//         </Stack.Navigator>
//     )
// }

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                // 768 tamano standar
                drawerType: width >= 740 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: false  // Oculta la hamburguesa
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettinsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.serviagro.com.ec/wp-content/plugins/elementskit/widgets/yelp/assets/images/profile-placeholder.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menu */}
            <View style={styles.menuContainer}>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate("Tabs")}
                >
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate("SettingsScreen")}
                >
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}