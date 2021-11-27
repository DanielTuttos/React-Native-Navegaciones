import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';




export const Pagina2Screen = () => {

    const navigator = useNavigation(); //hacerlo con hooks || mejor es usarlo desde las props 

    return (
        <View style={styles.globalMargin}>
            <Text>Pagina2Screen</Text>
            <Button
                title='Ir pagina 3'
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}
