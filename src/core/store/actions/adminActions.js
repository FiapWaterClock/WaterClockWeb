import {ADMIN_USERS_SUCCESS, ADMIN_USERS_ERROR, ADMIN_CLOCKS_SUCCESS, ADMIN_CLOCKS_ERROR, ADMIN_CLOCK_CREATE_ERROR, ADMIN_CLOCK_CREATE_SUCCESS} from './adminActionTypes'
import {getUsers, getClocks, createClock} from '../../services/admin.service'

function adminUsersError(error) {
    return {
        type: ADMIN_USERS_ERROR,
        error: error
    }
}

function adminUsersSuccess(users) {
    return {
        type: ADMIN_USERS_SUCCESS,
        users: users
    }
}

function isValidArray(value) {
    return Array.isArray(value) && value.length && value[0].id
}

function adminUsersAction() {
    return (dispatch) => {
        return getUsers(localStorage.getItem('authToken'))
            .then(json => {
                if (isValidArray(json)) {
                    dispatch(adminUsersSuccess(json))
                } else {
                    dispatch(adminUsersError(json))
                }
            })
    }
}

function adminClocksError(result) {
    let errorMessage = result;
    if (Array.isArray(result) && result.length === 0) {
        errorMessage = "No clocks found";
    }
    return {
        type: ADMIN_CLOCKS_ERROR,
        error: errorMessage
    }
}

function adminClocksSuccess(clocks) {
    return {
        type: ADMIN_CLOCKS_SUCCESS,
        clocks: clocks
    }
}

function adminClocksAction() {
    return (dispatch) => {
        return getClocks(localStorage.getItem('authToken'))
            .then(json => {
                if (isValidArray(json)) {
                    dispatch(adminClocksSuccess(json))
                } else {
                    dispatch(adminClocksError(json))
                }
            })
    }
}

function adminClockCreateError(result) {
    return {
        type: ADMIN_CLOCK_CREATE_ERROR,
        error: result
    }
}

function adminClockCreateSuccess() {
    return {
        type: ADMIN_CLOCK_CREATE_SUCCESS
    }
}

function adminClockCreateAction(clock) {
    return (dispatch) => {
        return createClock(localStorage.getItem('authToken'), clock)
            .then(response => {
                if (response.status() === 201) {
                    dispatch(adminClockCreateSuccess())
                } else {
                    dispatch(adminClockCreateError(response.json()))
                }
            })
    }
}


export {adminUsersAction, adminClocksAction, adminClockCreateAction}