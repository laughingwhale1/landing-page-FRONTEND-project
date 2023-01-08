function sendRequestPost (method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers:headers
    })
    .then(response => {
        if(response.ok){
            console.log(`Worker post server response status is ${response.ok}`) //eslint-disable-line
            return response.json()
        }
        return response.json().then(error => {
            window.alert(error.error) //eslint-disable-line
        })
    })
}
const url = new URL('http://localhost:3000/analytics/user');

let batch = [];
onmessage = function(e) {
    batch.unshift(e.data)
    if (batch.length >= 5) {
        sendRequestPost('POST', url, batch)
    }
}

