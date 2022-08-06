import { AuthState } from './AuthContext';

type AuthAction = {
    type: 'signIn'
}

// un reducer es una funcion comun y corriente y pura
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-ya'
            }

        default:
            return state;
    }
}