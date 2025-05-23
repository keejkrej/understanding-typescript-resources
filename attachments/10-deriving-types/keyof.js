"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = 'name';
validKey = 'age';
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }
    return val;
}
const user = {
    name: 'John',
    age: 30,
};
const userName = getProp(user, 'name');
const userAge = getProp(user, 'age');
console.log(userName);
console.log(userAge);
