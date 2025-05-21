// const userName = 'Max';
// userName = 'Maximilian';

// let age = 30;
// age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// console.log(result);

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// printOutput(add(5));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', e => console.log(e));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce(
        (currentResult, currentValue) => {
            return currentResult + currentValue;
        },
        0
    );
}

const addedNumbers = add(1, 2, 3, 4);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName: userName, age} = person;

console.log(userName, age, person);
