import {USER_PROFILE_SUCCESS, USER_PROFILE_ERROR} from './userActionTypes'
import {getUser} from '../../services/user.service'

function userProfileError(error) {
    return {
        type: USER_PROFILE_ERROR,
        error: error.error_description
    }
}

function userProfileSuccess(user) {
    return {
        type: USER_PROFILE_SUCCESS,
        user: user
    }
}

function userProfileAction() {
    return (dispatch) => {
        return getUser(localStorage.getItem('authToken'), localStorage.getItem('user'))
            .then(json => {
                if (json.id) {
                    dispatch(userProfileSuccess(json))
                } else {
                    dispatch(userProfileError(json))
                }
            })
    }
}

export {userProfileAction}