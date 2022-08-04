import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {

    useEffect(() => {// en el tab solo se dispara 1 vez
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View>
            <Text>Tab1 Screen</Text>
        </View>
    )
}
