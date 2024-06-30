"use strict";

let user = new Object();
Object.defineProperty(user, "name", {value: "user1"});
user.name = "user2";
console.log(user.name);