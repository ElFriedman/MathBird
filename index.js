'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const hintSolve = require("./src/index.js");

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.route("/solve")
.post((req,res) => {
    let problem = req.body.problem;
    let type = req.body.type;
    hintSolve(problem, type, (hints, err) => {
        if (err) throw err;
        res.send(hints);
    });
});

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}!`);
});