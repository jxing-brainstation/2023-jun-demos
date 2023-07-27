//destructuring objects
let movie = {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    cast: {
        oppenheimer: "Cillian Murphy",
        jean: "Florence Pugh"
    }
}

const { director, ...restOfMovieInfo } = movie;
console.log(director)
console.log("the rest: ", restOfMovieInfo)

//movie.cast.oppenheimer
// const { oppenheimer } = movie.cast;
// console.log(oppenheimer);

const { oppenheimer: mainActor } = movie.cast;
console.log(mainActor)

//destructuring arrays

let fruits = ["apple", "banana", "pear", "peach"]
let [firstFruit, secondFruit, ...restOfTheFruitBasket] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log("rest of the fruit: ", restOfTheFruitBasket)

let [, , mysteryFruit] = fruits;
console.log(mysteryFruit);

let [mysteryFruitTwo, , , mysteryFruitThree, ...areThereFruitsLeft] = fruits;
console.log("mysteryFruitTwo", mysteryFruitTwo)
console.log("mysteryFruitThree: ", mysteryFruitThree);
console.log("rest of Fruits??", areThereFruitsLeft);

let berryFamily = ["strawberry", 'blueberry'];
let fruitJuiceItems = ["mango", ...fruits, ...berryFamily, "avocado"];
console.log("put in the juicer: ", fruitJuiceItems)

// this is not the same as 
// const imposterCopy = fruitJuiceItems;
const copyOfFruitJuice = [...fruitJuiceItems];




//In React:
let [counter, setCounter] = useState(0);
console.log(counter);
setCounter();
// let theReturnValueOfUseState = [15, () => {}]
// let [counter, setCounter] = theReturnValueOfUseState

//what useState is doing under the hood (this is not real react code)
function useState(initialState) {
    return [initialState, () => { console.log("code to update the state here") }]
}


