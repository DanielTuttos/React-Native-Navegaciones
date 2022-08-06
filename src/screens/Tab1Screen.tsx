import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {// en el tab solo se dispara 1 vez
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 20,

        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text >

                <Icon name="airplane-outline" size={80} color={colores.primary} />
                <Icon name="football-outline" size={80} color={colores.primary} />
                <Icon name="aperture-outline" size={80} color={colores.primary} />
                <Icon name="beer-outline" size={80} color={colores.primary} />
                <Icon name="cellular-outline" size={80} color={colores.primary} />
                <Icon name="headset-outline" size={80} color={colores.primary} />

            </Text>
        </View>
    )
}
