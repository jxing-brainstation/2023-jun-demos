let dogName: string;
let isTrained: boolean
dogName = "Peaches";
// dogName=22;

let dogAge = 8;
// dogAge = "adult"
// let dogAge:number = 8;

// Union Types
type dogID = string | number;

// Array Types
let fruits: string[];
fruits = ["apple", "pineapple", "cherry"]
//tuple
let position: [number, number] = [3, 4];


// Object Types 
let address: { street1: string, street2?: string, city: string, state: string, zipcode: number };


//Interfaces
interface Dog {
  name: string,
  age: number,
  breed: string,
  owners: string[]
}

const myDog: Dog = {
  name: "Spot",
  age: 12,
  breed: "poodle",
  owners: ["jenny", "nolan"]
}


//other types not covered: void, undefined, null, any, never