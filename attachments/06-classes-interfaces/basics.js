"use strict";
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, I am " + this.age + " years old");
    }
}
const max = new User("Max", 36);
const fred = new User("Fred", 29);
max.greet();
