import { dataReducer, dataActionType } from "../reducers/dataReducer";
import {
    child,
    get,
    ref,
    set,
    update
} from 'firebase/database';
import { db } from '../../utils/db';

export const getData = (id) => {
    return async (dispatch) => {
        dispatch({ type: dataActionType.FETCH_DATA });
        try {
            // const url = ``;
            const resp = await get(child(ref(db), `catalog/${id}`));
            if (resp.exists()) {
                console.log(resp.val());
                dispatch({ type: dataActionType.DATA_SUCCESS, payload: resp.val() });
            } else {
                throw new Error();
            }
        } catch (error) {
            dispatch({ type: dataActionType.DATA_ERROR, payload: 'Error' });
        }
    }
}

export const setData = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: dataActionType.FETCH_DATA });
        try {
            set(ref(db, `catalog/${id}`), {
                id: id,
                products: [data],
            });
            dispatch({
                type: dataActionType.DATA_CREATE,
                payload: 'Данные успешно отправлены'
            });
        } catch (error) {
            dispatch({
                type: dataActionType.DATA_ERROR,
                payload: 'Не получилось отправить данные'
            });
        }
    }
}

export const editData = (id, data) => {
    return async (dispatch) => {
        dispatch({ type: dataActionType.FETCH_DATA });
        try {
            const resp = await get(child(ref(db), `catalog/${id}`));
            if (resp.exists()) {
                const oldData = resp.val();
                oldData.products = [...oldData.products, data];
                await update(ref(db, `catalog/${id}`), oldData);
                dispatch({
                    type: dataActionType.DATA_EDIT,
                    payload: 'Данные обнавлены'
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            dispatch({
                type: dataActionType.DATA_ERROR,
                payload: 'Не удалось обновить записи'
            });
        }
    }
}