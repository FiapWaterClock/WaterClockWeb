const host = 'http://localhost:8080/'

async function register(name, email, password) {
    const response = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    return await response.json()
}

async function login(email, password) {
    var params = {
      grant_type: "password",
      username: email,
      password: password
    }

    var formData = new FormData();

    for (var k in params) {
      formData.append(k, params[k]);
    }

    const response = await fetch(host + 'oauth/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa('testjwtclientid' + ':' + 'XY7kmzoNzl100').toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: formData
    })

    return await response.json()
}

export { register, login }
