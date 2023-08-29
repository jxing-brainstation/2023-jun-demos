let x = "hello world";
x = "hello mars";
x = 42;
const y = "hello world";
let z;
z = 41;
z = "abc";
let zz: number;
zz = 41;
zz = "abc";
let aa: number[] = [];
aa.push(33);
aa.push("abc");
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere, USA",
  10110
];
bb = [1, 2, 3];
bb = [1, "str1", "str2", 4, 10];
const xx = [32, 31];
const xxx: number[] = [32, 31];
const yy: [number, number] = [32, 31];
let cc: { houseNumber: number; streetName: string };
cc = {
  streetName: "Fake Street",
  houseNumber: 123
};
cc.zipcode = 11101;
cc = {
  houseNumber: 33
};
let dd: { houseNumber: number; streetName?: string };
dd = {
  houseNumber: 33,
};
dd.streetName?.split(", ");
dd.streetName!.split(", ");
dd.streetName = "baltic";
interface Address {
  houseNumber: number;
  streetName?: string;
}
let ee: Address = { houseNumber: 33 };
ee = dd;
export interface HasPhoneNumber {
  name: string;
  phone: number;
}
export interface HasEmail {
  name: string;
  email: string;
}
let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? {
        name: "Mike",
        phone: 3215551212
      }
    : {
        name: "Mike",
        email: "mike@example.com"
      };
contactInfo.name;
contactInfo.phone;
let otherContactInfo: HasEmail & HasPhoneNumber = {
  name: "Mike",
  email: "mike@example.com",
  phone: 3215551212
};
otherContactInfo.name;
otherContactInfo.email;
otherContactInfo.phone;
const zzz: any = {} as never;
export default {};
