import {REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, REDIRECTED} from './authActionTypes'
import {login, register} from '../../services/auth.service'

function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    }
}

function registerError(error) {
    return {
        type: REGISTER_ERROR,
        error: error
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error: error
    }
}

export function redirect() {
    return {
        type: REDIRECTED
    }
}

function registerAction(firstName, lastName, email, password, matchingPassword) {
    return (dispatch) => {
        return register(firstName, lastName, email, password, matchingPassword)
            .then(json => {
                if (json.id) {
                    localStorage.setItem('firstName', json.firstName);
                    localStorage.setItem('lastName', json.lastName);
                    localStorage.setItem('userId', json.id);
                    dispatch(registerSuccess())
                } else {
                    localStorage.clear();
                    dispatch(registerError(json))
                }
            })
    }
}

function loginAction(email, password) {
    return (dispatch) => {
        return login(email, password)
            .then(json => {
                if (json.access_token) {
                    localStorage.setItem('authToken', json.access_token);
                    localStorage.setItem('user', email);
                    localStorage.setItem('scope', json.scope);
                    dispatch(loginSuccess())
                } else {
                    localStorage.clear();
                    dispatch(loginError(json))
                }
            })
    }
}

function logoutAction() {
    return (dispatch) => {
        localStorage.clear()
    }
}

export {registerAction, loginAction, logoutAction}