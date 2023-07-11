/************************ */
function printHello() {
    console.log("hello");
}

//Passing named function
setTimeout(printHello, 3000);

//passing anonymous function
setTimeout(function () {
    console.log("hey")
}, 3000);


function printSum(num1, num2) {
    console.log(num1 + num2);
}

// This is incorrect - will be invoked immediately
// setTimeout(printSum(3, 7), 3000);
setTimeout(function () {
    printSum(3, 7)
}, 3000)

/************************ */
// DIFFERENT WAYS TO WRITE NAMED FUNCTIONS
function sumNamedFunction(num1, num2) {
    return num1 + num2;
}

let sumFunctionExpression = function (num1, num2) {
    return num1 + num2;
}

//arrow function with one parameter
let squareNumber = num => {
    return num * num;
}

//arrow function with more than one parameter
let sumArrowFunction = (num1, num2) => {
    return num1 + num2;
}

let sumArrowShort = (num1, num2) => num1 + num2;

/************************ */

// function printHello() {
//     console.log("Hello!!");
// }
let printHelloArrow = () => {
    console.log("hello")
}
//Passing named function
// setTimeout(printHello, 3000);
setTimeout(printHelloArrow, 3000);

// setTimeout(function() {
//     console.log("hey")
// }, 3000);
setTimeout(() => {
    console.log("hey")
}, 3000);

// function printSum(num1, num2) {
//     console.log(num1 + num2);
// }
let printSumArrow = (num1, num2) => {
    console.log(num1 + num2);
}
// setTimeout(function () {
//     printSum(3, 7)
// }, 3000)

setTimeout(() => {
    printSum(3, 7)
}, 3000)


/**** scope */
console.log('we are in index.js')

const myVariable = 16;

// console.log(myOtherVariable); // this will give an error
