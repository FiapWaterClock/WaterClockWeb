import { USER_PROFILE_SUCCESS, USER_PROFILE_ERROR } from '../actions/userActionTypes'

export function userProfileReducer(state = {success: false}, action) {
    switch (action.type) {
        case USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {success: true, user: action.user})
        case USER_PROFILE_ERROR:
            return Object.assign({}, state, {success: false, user: null, error: action.error})
        default:
            return state
    }
}
