let dogName;
let isTrained;
dogName = "Peaches";
// dogName = 123;
let dogAge = 8;
// dogAge = "old";
let dogID = "8";
dogID = 12;
// dogID = false;
dogID = 0;
let dogBreed;
function printDogInfo(name, age, isTrained) {
    const trainedString = isTrained ? " is trained." : " is not trained.";
    return "The dog " + name + " at age " + age + " and" + trainedString;
}
const dogInfoToDisplay = printDogInfo("Spots", 2, false);
console.log(dogInfoToDisplay);
const printDogInfoArrow = (name, age, isTrained) => {
    const trainedString = isTrained ? " is trained." : " is not trained.";
    return "The dog " + name + " at age " + age + trainedString;
};
let fruits = ["Apple", "Peaches", "pineapple"];
let position = [4, 5];
// position = ["red", "blue"]; //not valid
// position = [false, 3]; 
let enemyPosition = [2, 3];
let player1Position;
let player2Position;
const brainstationNYCAddress = {
    street1: "136 Crosby St",
    street2: "4th Fl",
    city: "New York",
    state: "New York",
    zipcode: "10012-00101"
};
// player1Position[0]
