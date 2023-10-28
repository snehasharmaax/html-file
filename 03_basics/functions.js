function sayMyName(){
    console.log("Sneha");
    console.log("Sneha");
    console.log("Sneha");
    console.log("Sneha");
    console.log("Sneha");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(4, 6)
// addTwoNumbers(4, "6")
// addTwoNumbers(4, "a")
// addTwoNumbers(4, null)


function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
}
const result = addTwoNumbers(4, 6)
// console.log("Result: ", result);


function loginUserMessage(userName = "sami"){
    if (!userName) {
        // console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Sneha"))
// console.log(loginUserMessage())


// function calculateCartPrice(...num1){             // ...spread operator
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 5000, 600, 299, 3045))

function calculateCartPrice(val1, val2, ...num1){             // ...spread operator
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 5000, 600, 299, 3045))

const user = {
    username: "Sneha",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}
// handleObject(user)
handleObject({
    username: "Sanjana",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 392, 234, 274234, 30754, 3432]));

