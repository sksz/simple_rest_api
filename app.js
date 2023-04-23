var express = require("express");
const bodyParser = require('body-parser');
var app = express();

const headers = [{
    name: 'Access-Control-Allow-Origin',
    value: '*'
}, {
    name: 'Access-Control-Allow-Methods',
    value: 'GET, POST, OPTIONS, PUT, DELETE, PATCH'
}, {
    name: 'Access-Control-Allow-Headers',
    value: 'Content-Type'
}];

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var todos = [];

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/todos", (req, res, next) => {
    console.log('Fetching Todo list');
    setHeaders(res);
    res.json(todos);
});

app.options("/todos", (req, res, next) => {
    console.log('Replying to OPTIONS request');
    setHeaders(res);
    res.json();
})

app.post("/todos", (req, res, next) => {
    console.log('Adding element to Todo collection');
    var todo = req.body;

    todo.id = todos.length + 1;
    todos.push(todo);

    setHeaders(res);
    res.json(todo);
});

function setHeaders(res) {
    headers.forEach(header => {
        res.setHeader(header.name, header.value);
    });
}
