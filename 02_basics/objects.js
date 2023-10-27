// singleton

// obejct literals
// Object.create  // constructor ke through

// How to declare symbol
const mySym = Symbol("key1")

const JSUser = {
    name: "Sneha",
    "full name": "Sneha Sharma",
    age : 20,
    [mySym]: "myKey1",
    location: "Aligarh",
    email: "sneha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["name"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);


JSUser.email = "sneha@chatgpt.com"
// Object.freeze(JSUser)
JSUser.email = "sneha@microsoft.com"
// console.log(JSUser);


JSUser.greeting = function(){
    console.log("Helo JS learner");
}
console.log(JSUser.greeting());

JSUser.greetingTwo = function(){
    console.log(`Hello JS User,  ${this.name}`);
}
console.log(JSUser.greetingTwo());