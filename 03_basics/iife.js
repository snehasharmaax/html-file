// IIFE  ->  Immediately Invoked Function Expressions 

// Global scope ke pollution se problem hoti hai kai bar to us global scope ka jo b declaration hota hai ,  to uske pollution ko hatane ke liye iife ka use kiya jata hai 

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()     //polllution

// ()()
(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

// context ko stop krane ke liye ; lagana jruri hai

// ( () => {} )()
( (name) => {
    console.log(`DB Connected Two ${name}`);
} )("Sneha")