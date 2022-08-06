import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores } from '../theme/appTheme'


interface Props {
    nameIcon: string
}

export const TouchableIcon = ({ nameIcon }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => console.log(nameIcon)}
        >
            <Icon
                name={nameIcon}
                size={80}
                color={colores.primary}
            />
        </TouchableOpacity >
    )
}
