import {simplifyExpression, solveEquation, ChangeTypes} from "mathsteps";

function getHint(step) {
    switch (step.changeType) {
        case "NO_CHANGE":
            return "Do we need to do anything?";
        case "COLLECT_AND_COMBINE_LIKE_TERMS":
            return "Can't we combine terms with the same variables?";
        case "ADD_TO_BOTH_SIDES":
            return "It looks like we need to add something to both sides."
        case "DIVIDE_FROM_BOTH_SIDES":
            return "It looks like we need to divide something from both sides."
        case "MULTIPLY_TO_BOTH_SIDES":
            return "It looks like we need to multiply something to both sides."
        case "SUBTRACT_FROM_BOTH_SIDES":
            return "It looks like we need to subtract something from both sides."
        case "SIMPLIFY_LEFT_SIDE":
            return "The left side looks a little messy. Can we fix that?";
        case "SIMPLIFY_RIGHT_SIDE":
            return "The right side looks a little messy. Can we fix that?";
        default:
            return "Error: No Hint Specified";
    }
}

const steps = solveEquation('x+x+3x+4+9+2x=8+3x+27');

console.log('x+x+3x+4+9+2x=8+3x+27');

steps.forEach(step => {
    console.log(getHint(step));
    console.log(step.changeType);
    console.log(step.newEquation.print());
});
