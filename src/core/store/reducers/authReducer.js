import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, REDIRECTED } from '../actions/authActionTypes'

export function registerReducer(state = {success: false}, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {success: true, error: null})
        case REGISTER_ERROR:
            return Object.assign({}, state, {success: false, error: action.error})
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {success: false, error: null})
        case REDIRECTED:
            return Object.assign({}, state, {success: false})
        default:
            return state
    }
}

export function loginReducer(state = {success: false}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {success: true, error: null})
        case LOGIN_ERROR:
            return Object.assign({}, state, {success: false, error: action.error})
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {success: false, error: null})
        case REDIRECTED:
            return Object.assign({}, state, {success: false})
        default:
            return state
    }
}