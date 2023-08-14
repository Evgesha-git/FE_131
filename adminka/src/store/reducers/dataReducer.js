export const dataActionType = {
    FETCH_DATA: 'FETCH_DATA',
    DATA_ERROR: "DATA_ERROR",
    DATA_SUCCESS: 'DATA_SUCCESS',
    DATA_REMOVE: 'DATA_REMOVE',
    DATA_EDIT: 'DATA_EDIT',
    DATA_CREATE: 'DATA_CREATE',
}

const initialState = {
    data: null, // null | any[]
    loading: false,
    error: null, // null | string
    message: null, //null | string
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case dataActionType.FETCH_DATA:
            return {
                data: state.data,
                loading: true,
                error: null,
                message: null,
            };
        case dataActionType.DATA_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null,
                message: null,
            };
        case dataActionType.DATA_ERROR:
            return {
                data: null,
                loading: false,
                error: action.payload,
                message: null,
            };
        case dataActionType.DATA_CREATE:
            return {
                data: state.data,
                loading: false,
                error: null,
                message: action.payload,
            };
        case dataActionType.DATA_EDIT:
            return {
                data: state.data,
                loading: false,
                error: null,
                message: action.payload,
            };
        case dataActionType.DATA_REMOVE:
            return {
                data: state.data,
                loading: false,
                error: null,
                message: action.payload,
            };
        default:
            return state;
    }
}