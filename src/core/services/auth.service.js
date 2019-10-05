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
    const response = await fetch('http://client-id:client-secret@localhost:8080/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return await response.json()
}

export { register, login }