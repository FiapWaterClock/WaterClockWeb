import {getHost} from './config.service'

async function getUsers(authToken) {
    const response = await fetch(getHost() + 'api/user', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return await response.json()
}

async function getClocks(authToken) {
    const response = await fetch(getHost() + 'api/clock', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return await response.json()
}

export {getUsers, getClocks}
