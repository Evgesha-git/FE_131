import { userActionsType } from "../redusers/userReducer";

export const addUserAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: userActionsType.ADD_USER, payload });
    }
}

export const removeUserAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: userActionsType.REMOVE_USER, payload });
    }
}

export const addAsyncUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: userActionsType.FETCH_USER });
            const resp = await fetch('https://fakestoreapi.com/users');
            const data = await resp.json();
            dispatch({ type: userActionsType.ADD_USER, payload: data });
        } catch (error) {
            dispatch({ type: userActionsType.ERROR_USER, payload: error });
        }
    }
}