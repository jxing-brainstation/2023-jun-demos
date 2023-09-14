let dogName: string;
let isTrained: boolean;
dogName = "Peaches";
// dogName = 123;

let dogAge = 8;

// dogAge = "old";

let dogID: string | number = "8"
dogID = 12;
// dogID = false;
dogID = 0;

let dogBreed: undefined | string;

function printDogInfo(name: string, age: number, isTrained: boolean): string {
    const trainedString: string = isTrained ? " is trained." : " is not trained.";
    return "The dog " + name + " at age " + age + " and" + trainedString
}

const dogInfoToDisplay: string = printDogInfo("Spots", 2, false);

console.log(dogInfoToDisplay);

const printDogInfoArrow = (name: string, age: number, isTrained: boolean): string => {
    const trainedString: string = isTrained ? " is trained." : " is not trained.";
    return "The dog " + name + " at age " + age + trainedString
}

let fruits: string[] = ["Apple", "Peaches", "pineapple"];
let position: [number, number] = [4, 5]
// position = ["red", "blue"]; //not valid
// position = [false, 3]; 
let enemyPosition: [number, number] = [2, 3];

// Type Aliases 

type Position = [number, number]

let player1Position: Position;
let player2Position: Position;

type CanadianAddress = {
    street1: string, // 460 King St W
    street2?: string, //optional
    city: string,
    province: "Ontario" | "British Columbia" | "North West Territories" | "Alberta" | "Manitoba" | "Quebec" | "Nova Scotia" | "Saskachewan" | "Newfoundland" | "Prince Edward Island"
    postalCode: string
}

//as an interface:
interface CanadianAddressInterface {
    street1: string, // 460 King St W
    street2?: string, //optional
    city: string,
    province: "Ontario" | "British Columbia" | "North West Territories" | "Alberta" | "Manitoba" | "Quebec" | "Nova Scotia" | "Saskachewan" | "Newfoundland" | "Prince Edward Island"
    postalCode: string
}

type USAddress = {
    street1: string,
    street2?: string,
    city: string,
    state: string,
    zipcode: number | string;
}

type BrainstationCampusAddress = CanadianAddress | USAddress;

const brainstationNYCAddress: BrainstationCampusAddress = {
    street1: "136 Crosby St",
    street2: "4th Fl",
    city: "New York",
    state: "New York",
    zipcode: "10012-00101"
}
// player1Position[0]