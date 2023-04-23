var express = require("express");
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var todos = [];

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/todos", (req, res, next) => {
    console.log('Fetching Todo list');
    res.json(todos);
});

app.post("/todos", (req, res, next) => {
    var todo = req.body;

    todo.id = todos.length + 1;
    todos.push(todo);

    res.json(todo);
});
