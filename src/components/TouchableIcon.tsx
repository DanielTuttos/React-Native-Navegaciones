import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colores } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';


interface Props {
    nameIcon: string
}

export const TouchableIcon = ({ nameIcon }: Props) => {

    const { chageFavoriteIcon } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => chageFavoriteIcon(nameIcon)}
        >
            <Icon
                name={nameIcon}
                size={80}
                color={colores.primary}
            />
        </TouchableOpacity >
    )
}
