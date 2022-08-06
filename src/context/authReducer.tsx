import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }

// un reducer es una funcion comun y corriente y pura
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-ya'
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        default:
            return state;
    }
}