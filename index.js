'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const hintSolve = require("./src/index.js");

app.set('port', (process.env.PORT || 5000));

app.use(cors());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

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
        if (err) throw err;
        res.send({hints: hints});
    });
});

app.listen(app.get('port'), () => {
    console.log(`Listening on ${app.get('port')}!`);
});