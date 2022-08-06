import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


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

                <TouchableIcon nameIcon="airplane-outline" />
                <TouchableIcon nameIcon="football-outline" />
                <TouchableIcon nameIcon="aperture-outline" />
                <TouchableIcon nameIcon="beer-outline" />
                <TouchableIcon nameIcon="cellular-outline" />
                <TouchableIcon nameIcon="headset-outline" />

            </Text>
        </View>
    )
}
