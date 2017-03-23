import {simplifyExpression, solveEquation, ChangeTypes} from "mathsteps";

const steps = solveEquation('2x + 3x = 35');

steps.forEach(step => {
    console.log("before change: " + step.oldEquation.print());  // e.g. before change: 2x + 3x = 35
    console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
    console.log("after change: " + step.newEquation.print());   // e.g. after change: 5x = 35
    console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
});
