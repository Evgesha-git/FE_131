import { userActionType } from "../reducers/userReducer";
import { auth } from '../../utils/db';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';

export const logInGoogle = () => {
    return async (dispatch) => {
        dispatch({ type: userActionType.FETCH_USER });
        try {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth, provider);
            dispatch({ type: userActionType.USER_SUCCESS, payload: user });
        } catch (error) {
            dispatch({
                type: userActionType.USER_ERROR,
                payload: error.message
            });
        }
    }
}

export const loginWithEmail = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: userActionType.FETCH_USER });
        try {
            const { user } = signInWithEmailAndPassword(auth, email, password);
            dispatch({ type: userActionType.USER_SUCCESS, payload: user });
        } catch (error) {
            dispatch({ type: userActionType.USER_ERROR, payload: error.message });
        }
    }
}

export const registrUser = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: userActionType.FETCH_USER });
        try {
            const { user } = createUserWithEmailAndPassword(auth, email, password);
            dispatch({
                type: userActionType.USER_SUCCESS,
                payload: user
            });
        } catch (error) {
            dispatch({
                type: userActionType.USER_ERROR,
                payload: error.message
            });
        }
    }
}

export const logOut = () => {
    return async (dispath) => {
        dispath({ type: userActionType.FETCH_USER });
        await signOut(auth);
        dispath({ type: userActionType.USER_LOGOUT });
    }
}