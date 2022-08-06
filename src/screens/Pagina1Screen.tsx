import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { }; // lo extiende de la propiedades del stack para el tipado
interface Props extends DrawerScreenProps<any, any> { }; // lo extiende de la propiedades del stack para el tipado

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => { navigation.toggleDrawer() }}
                    style={{
                        marginLeft: 10
                    }}
                >
                    <Icon name="menu-outline" size={35} color={colores.primary} />
                </TouchableOpacity>
            )
        })
    }, [])



    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text
                style={{
                    marginVertical: 20,
                    fontSize: 20
                }}
            >Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856d6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: "Pedro"
                    })}
                >
                    <Icon name="body-outline" color='white' size={35} />
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#ff9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: "Maria"
                    })}
                >
                    <Icon name="woman-outline" color='white' size={35} />
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
