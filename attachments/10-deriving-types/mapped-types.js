"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};
let mathResults = {
    add: mathOperations.add(1, 2),
};
let mathResults2 = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
};
let mathResults3 = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
};
let mathResults4 = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(1, 2),
};
// mathResults3.add = 10;
mathResults4.add = 10;
console.log(mathResults.add);
console.log(mathResults2.add);
console.log(mathResults2.subtract);
