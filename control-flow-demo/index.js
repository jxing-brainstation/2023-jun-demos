console.group("If/Else")

let temperature = 83;

if (temperature >= 90) {
    console.log("it's very hot.");
} else if (temperature < 90 && temperature >= 80) { // can also write as just temperature >= 80, but this code more readable
    console.log("it's still quite hot");
} else if (temperature < 80 && temperature >= 70) {
    console.log("it's warm");
} else {
    console.log("it's a good temperature");
}

let numberOfApples = 0;

if (numberOfApples === 1) {
    console.log("you have only one apple")
} else if (numberOfApples > 1 || numberOfApples === 0) {
    console.log("you have", numberOfApples, "apples")
} else if (numberOfApples === 0) {
    console.log("you have no apples")
} else {
    console.log("you have an invalid number of apples")
}

console.groupEnd();

console.group("Switch")

const monthName = "June";
let monthNumber;

switch (monthName) {
    case "January":
        monthNumber = 0
        break;
    case "February":
        monthNumber = 1
        break;
    case "March":
        monthNumber = 2
        break;
    case "June":
        monthNumber = 5
        break;
    default:
        console.error("Invalid month")
        break;
}

console.groupEnd();

console.group("For Loops")

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("------");

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

let rejectedOlympicSports = ["tug of war", "dodgeball", "bowling",  "ultimate frisbee", "squash"];

console.table(rejectedOlympicSports)
for (let i = 0; i < rejectedOlympicSports.length; i++) {
    console.log("The Olympic council has rejected " + rejectedOlympicSports[i])
}

//now print the list backwards
// rejectedOlympicSports.length is 5
for (let i = rejectedOlympicSports.length - 1; i >= 0; i--) {
    console.log("we're at the element at index", i)
    console.log("The Olympic council has rejected " + rejectedOlympicSports[i])
}
console.groupEnd();

console.group("While");

let i = 0;
//   while(i < 5)
while (i < rejectedOlympicSports.length) {
    console.log("The Olympic council has rejected", rejectedOlympicSports[i])
    if (rejectedOlympicSports[i] === "bowling") {
        console.log("If curling is an olympic sport, so should bowling.")
        break;
    }
    i++;
}

console.groupEnd();