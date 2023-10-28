// {scope} => functions, if-else, loops


// var  c = 300
let a = 300

if (true) {
    let a = 10
    const  b = 20
    // var c = 30
    // console.log("Inner: ", a)
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sneha"

    function two(){
        const website = "youtube2yt.com"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true) {
    const userName = "Sneha"
    if (userName === "Sneha") {
        const website = "youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


// ++++++++++++++++++++++Interesting+++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}
// console.log(addOne(5))

const addTwo = function(num){
    return num+2
}
addTwo(5)