const accountId = 139492834
let accountEmail = "sneha@gmail.com"
var accountPassword = "1234455"
accountCity = "Aligarh"  // Without writing anything next to the variable, we can reserve the memory of a variable..... Thid method is not good
let accountState;

// accountId = 2 //not allowed

{
    // this is called SCOPE
}


accountEmail="sharma@gmail.com"
accountPassword = "20290924"
accountCity = "Noida"
console.log(accountId);

/*
    Prefer not to use var 
    Because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])