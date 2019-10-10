import {
    ADMIN_USERS_SUCCESS,
    ADMIN_USERS_ERROR,
    ADMIN_CLOCKS_SUCCESS,
    ADMIN_CLOCKS_ERROR,
    ADMIN_CLOCK_CREATE_SUCCESS,
    ADMIN_CLOCK_CREATE_ERROR,
    ADMIN_LINK_CLOCK_SUCCESS, ADMIN_LINK_CLOCK_ERROR
} from '../actions/adminActionTypes'

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

export function adminClocksFormReducer(state = {success: false, error: null}, action) {
    switch (action.type) {
        case ADMIN_CLOCK_CREATE_SUCCESS:
            return Object.assign({}, state, {success: true, error: null})
        case ADMIN_CLOCK_CREATE_ERROR:
            return Object.assign({}, state, {success: false, error: action.error})
        case ADMIN_CLOCKS_SUCCESS:
            return Object.assign({}, state, {success: false, error: null})
        default:
            return state
    }
}

export function adminClockUserFormReducer(state = {success: false, error: null}, action) {
    switch (action.type) {
        case ADMIN_LINK_CLOCK_SUCCESS:
            return Object.assign({}, state, {success: true, error: null})
        case ADMIN_LINK_CLOCK_ERROR:
            return Object.assign({}, state, {success: false, error: action.error})
        default:
            return state
    }
}

