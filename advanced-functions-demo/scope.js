console.log(
    "we are in scope.js"
)

console.log(myVariable);

const myOtherVariable = 32;

let globalVariable = "I'm in the global scope";

function globalFunction() {
    console.log(globalVariable);
    let functionBlockVariable = "I'm in the function block scope";
    let i;
    for (i = 0; i < 3; i++) {
        let forBlockVariable = "I'm in the for loop's block scope"

        console.log(forBlockVariable);
        console.log(functionBlockVariable);
        console.log(globalVariable);
    }
    console.log("i after the for loop:", i)
}

globalFunction();
console.log(globalVariable);
// console.log(functionBlockVariable); // this gives an error
// console.log(forBlockVariable); // this gives an error
console.log("we're at the end here")