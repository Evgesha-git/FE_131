import * as user from './userAction';
import * as data from './dataActions';

export const actions = {
    ...user,
    ...data,
}