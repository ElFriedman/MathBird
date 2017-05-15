'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const hintSolve = require("./src/index.js");


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.route("/solve")
.post((req,res) => {
    let problem = req.body.problem;
    let type = req.body.type;
    console.log(req.body);
    hintSolve(problem, type, (hints, err) => {
        if (err) throw err;
        res.send(hints);
    });
});

app.listen(port, () => {
    console.log(`Listening on ${port}!`);
})