function get (url) {
    return fetch(url, {
        method: 'GET',
        headers: {}
    }).then(response => {
        return handleResponse(url, response)
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`)
        return {error: {message: "Request failed"}}
    })
}

function post (url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {},
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response)
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`)
        return {error: {message: "Request failed"}}
    })
}

function put (url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: {},
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response)
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`)
        return {error: {message: "Request failed"}}
    })
}

function handleResponse (url, response) {
    if (response.status < 500) {
        return response.json()
    } else {
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`)
        return {error: {message: "Request failed due to server error "}}
    }
}

export {get, post, put}