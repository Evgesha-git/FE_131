const defaulState = {
    cash: 10
}

export const cashActions = {
    ADD_CASH: 'ADD_CASH',
    GET_CASH: 'GET_CASH'
}

export const cashReducer = (state = defaulState, action) => {
    switch (action.type) {
        case cashActions.ADD_CASH:
            return { ...state, cash: state.cash + action.payload };
        case cashActions.GET_CASH:
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
}