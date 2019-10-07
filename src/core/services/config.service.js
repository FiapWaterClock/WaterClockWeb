function getHost() {
    if (window.location.href.includes('http://localhost:3000/')) {
        return 'http://localhost:8080/'
    } else {
        return 'https://fiapwaterclock.herokuapp.com/'
    }
}

export {getHost}
