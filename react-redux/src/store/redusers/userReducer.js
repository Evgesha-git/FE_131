const defaultState = {
    users: [],
    loading: false,
    error: null
}

export const userActionsType = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    FETCH_USER: 'FETCH_USER',
    ERROR_USER: 'ERROR_USER'
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case userActionsType.ADD_USER:
            return {
                loading: false,
                error: null,
                users: [...state.users, ...action.payload]
            };
        case userActionsType.REMOVE_USER:
            return {
                loading: false,
                error: null,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case userActionsType.FETCH_USER:
            return { loading: true, error: null, users: state.users };
        case userActionsType.ERROR_USER:
            return {
                loading: false,
                error: action.payload,
                users: state.users
            };
        default:
            return state;
    }
}