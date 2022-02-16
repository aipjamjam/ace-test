import * as constants from './constants'

export function saveUser(data) {
    return { type: constants.SAVE_USER, payload: data };
}
export function setLoading(data) {
    return { type: constants.SET_LOADING, payload: data };
}
export function addEvent(data) {
    return { type: constants.ADD_EVENT, payload: data };
}