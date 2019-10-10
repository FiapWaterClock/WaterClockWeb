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
    return await response.json();
}

async function createClock(authToken, clock) {
    const response = await fetch(getHost() + 'api/clock', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            "activate" : true,
            "serial_number": clock.serial_number ,
            "installation_date": clock.installation_date
        })});

    return await response
}

async function linkClock(authToken, ids) {
    const response = await fetch(getHost() + 'api/user/clock_to_user', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(ids)});

    return await response
}

export {getUsers, getClocks, createClock, linkClock}
