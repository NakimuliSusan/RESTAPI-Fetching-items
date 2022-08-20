let fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({
        userId : 5,
        title : "AnitaB class of 2022",
        completed :true
    })
})
.then(function (response) {
return response.json();
})
.then(function (data) {
console.log('success', data);
})
.catch(function (error) {
console.log('error', error);
})