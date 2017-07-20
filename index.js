'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const hintSolve = require("./src/index.js");

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.route("/solve")
.post((req,res) => {
    console.log(req.body);
    const problem = req.body.problem;
    const type = req.body.type;
    hintSolve(problem, type, (hints, err) => {
        if (err) res.code(200).send(err);
        res.send({hints});
    });
});

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}!`);
});