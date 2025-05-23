"use strict";
class User {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    static eid = 'USER';
    static greet() {
        console.log('Hello!');
    }
}
console.log(User.eid);
User.greet();
const max = new User();
max.firstName = 'Max';
max.lastName = '';
console.log(max.fullName);
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
    work() {
        console.log(this._firstName);
    }
}
class UIElement {
    indentifier;
    constructor(indentifier) {
        this.indentifier = indentifier;
    }
    clone(targetLocation) { }
}
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
