import {getHost} from './config.service'

async function getUser(authToken, email) {
    const response = await fetch(getHost() + 'api/user/' + email, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });
    return await response.json()
}

export {getUser}
