"use strict";
class AuthenticatableUser {
    userName;
    email;
    password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() { }
    logout() { }
}
function authenticate(user) {
    user.login();
}
let user;
user = {
    email: 'test@example.com',
    password: 'abc1',
    login() { },
    logout() { },
};
