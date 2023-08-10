export const userActionType = {
    FETCH_USER: 'FETCH_USER',
    USER_SUCCESS: "USER_SUCCESS",
    USER_ERROR: 'USER_ERROR',
    USER_LOGOUT: "USER_LOGOUT",
}

const initialState = {
    user: null, // null | User
    loading: false, // boolean
    error: null // null | string
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionType.FETCH_USER:
            return { user: state.user, loading: true, error: state.error };
        case userActionType.USER_SUCCESS:
            return { user: action.payload, loading: false, error: null };
        case userActionType.USER_ERROR:
            return { user: null, loading: false, error: action.payload };
        case userActionType.USER_LOGOUT:
            return { user: null, loading: false, error: null };
        default:
            return state;
    }
}