
// definir como luce la informacion que tendre aqui

import React, { createContext } from "react";

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
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente que es proveedor del estado
export const AuthProvider = ({ children }: any) => {

    

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { }
        }}>
            {children}
        </AuthContext.Provider>
    )
}