
// definir como luce la informacion que tendre aqui

import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    chageFavoriteIcon: (iconName: string) => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente que es proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({
            type: 'signIn'
        })
    }

    const chageFavoriteIcon = (iconName: string) => {
        dispatch({
            type: "changeFavIcon",
            payload: iconName
        })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            chageFavoriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}