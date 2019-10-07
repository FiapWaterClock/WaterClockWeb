import { ADMIN_USERS_SUCCESS, ADMIN_USERS_ERROR, ADMIN_CLOCKS_SUCCESS, ADMIN_CLOCKS_ERROR } from '../actions/adminActionTypes'

export function adminUsersReducer(state = {success: false}, action) {
    switch (action.type) {
        case ADMIN_USERS_SUCCESS:
            return Object.assign({}, state, {success: true, users: action.users, error: null})
        case ADMIN_USERS_ERROR:
            return Object.assign({}, state, {success: false, users: null, error: action.error})
        default:
            return state
    }
}

export function adminClocksReducer(state = {success: false}, action) {
    switch (action.type) {
        case ADMIN_CLOCKS_SUCCESS:
            return Object.assign({}, state, {success: true, clocks: action.clocks, error: null})
        case ADMIN_CLOCKS_ERROR:
            return Object.assign({}, state, {success: false, clocks: null, error: action.error})
        default:
            return state
    }
}
