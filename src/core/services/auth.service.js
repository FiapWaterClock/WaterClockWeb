import {getHost} from './config.service'

async function register(firstName, lastName, email, password, matchingPassword) {
    const response = await fetch(getHost() + 'api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            matchingPassword: matchingPassword
        })
    });

    return await response.json()
}

function jsonToForm(params) {
    let formData = new FormData();

    for (let k in params) {
        formData.append(k, params[k]);
    }
    return formData;
}

function basicAuthHeader(clientId, clientSecret) {
    return 'Basic ' + btoa(clientId + ':' + clientSecret);
}

async function login(email, password) {
    const response = await fetch(getHost() + 'oauth/token', {
        method: 'POST',
        headers: {
            'Authorization': basicAuthHeader('testjwtclientid', 'XY7kmzoNzl100'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams(jsonToForm({
            grant_type: 'password',
            username: email,
            password: password,
            client_id: 'testjwtclientid'
        }))
    });
    return await response.json()
}

export {register, login}
