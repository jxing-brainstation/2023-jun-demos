// checking for array emptiness
/*
An array is empty if there are no elements
length is 0

an array has values if the length is not 0
*/
let thingsToDo = [];

if (thingsToDo.length === 0) {
    console.log("we are done for the day.")
}

//rewritten using coersion, checking if the array is empty
if (!thingsToDo.length) {
    console.log("we are also done for the day")
}

if (thingsToDo.length !== 0) {
    console.log("we have more to do")
}

if (thingsToDo.length) {
    console.log("more to do today")
}

// using !! for converting ANYTHING to a boolean

console.log(!!"")
console.log(!!'hello');

const showDebugPanel = 0;

if (!!showDebugPanel) {
    console.log("show the panel")
} else {
    console.log("do not show panel")
}

/*
Typescript example:
const showDebugPanel : number = 0

function showFruits(fruits : any[]){

}
*/