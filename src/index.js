import {simplifyExpression, solveEquation, ChangeTypes} from "mathsteps";
import getHints from "./hintapi";
function isValid(problem) {
    return True;
}

export default function hintSolve(problem, type, callback) {
    if (isValid(problem)) {
        if (type==="SOLVE") {
            steps = solveEquation(problem);
            callback(getHints(steps));
        } else if (type==="SIMPLIFY") {
            steps = simplifyExpression(problem);
            callback(getHints(steps));
        } else {
            callback([], new TypeError("Not a valid problem type."));
        }
    } else {
        callback([], new TypeError("Not a valid problem"));
    }
}