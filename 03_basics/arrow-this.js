const user = {
    userName: "Sneha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Sanjna"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Sneha"
//     console.log(this.username);
// }
// chai()

// +++++++++++++++++++++ Arrow Function +++++++++++++++++

// const chai =  () => {
//     let userName = "Sneha"
//     console.log(this);
// }
// chai()

// Syntax - () => {}

// +++++++++++++++++++++ Basic Arrow function ++++++++++++++

// ++++++++++++++++++ Explicit Return (isme return keyword likha hota hai) +++++++++++++++++
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(6, 4));

// {isme return keyword likhna hota }, (isme return keyword nahi likhna hota)

// ++++++++++++++++++ Implicit Return ( isme parenthesis use nahi karne pdte hai ( Mai man leta hoon apko return keyword lihkne ki jrurt nahi hai))+++++++++++++++++
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(9, 2));

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(9, 2));

// const addTwo = () => ({userName: " Sneha "})
// console.log(addTwo);

// const myArray = [1,2,3,4,5,6,7]
// myArray.forEach()