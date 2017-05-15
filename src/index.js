const mathsteps = require("mathsteps");
const simplifyExpression = mathsteps.simplifyExpression;
const solveEquation = mathsteps.solveEquation;
const getHints = require("./hintapi");
function isValid(problem) {
    return true;
}

function hintSolve(problem, type, callback) {
    if (isValid(problem)) {
        if (type=="SOLVE") {
            steps = solveEquation(problem);
            callback(getHints(steps));
        } else if (type=="SIMPLIFY") {
            steps = simplifyExpression(problem);
            callback(getHints(steps));
        } else {
            callback([], new TypeError("Not a valid problem type."));
        }
    } else {
        callback([], new TypeError("Not a valid problem"));
    }
}

module.exports = hintSolve;