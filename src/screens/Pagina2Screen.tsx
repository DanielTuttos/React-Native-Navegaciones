import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';




export const Pagina2Screen = () => {

    const navigator = useNavigation(); //hacerlo con hooks || mejor es usarlo desde las props
    
    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo', //cambia el titulo por defecto de la pagina
            headerBackTitle: 'Volver', 
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>
            <Button
                title='Ir pagina 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
