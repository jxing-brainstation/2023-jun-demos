// import { HasPhoneNumber, HasEmail } from "./basics";
// type StringOrNumber = string | number;
// let six: StringOrNumber = 6;
// type HasName = { name: string };
// type NumVal = 1 | 2 | 3 | NumVal[];
// const x1: NumVal = 3;
// const x2: NumVal = 3;
// const y: NumVal = [1, 2, [2, 2, [1, 3]], 3];
// export interface HasInternationalPhoneNumber extends HasPhoneNumber {
//   countryCode: string;
// }
// interface ContactMessenger1 {
//   (contact: HasEmail | HasPhoneNumber, message: string): void;
// }
// type ContactMessenger2 = (
//   contact: HasEmail | HasPhoneNumber,
//   message: string
// ) => void;
// const emailer: ContactMessenger1 = (_contact, _message) => { };
// const emailer2: ContactMessenger2 = (_contact, _message) => { };
// interface ContactConstructor {
//   new(...args: any[]): HasEmail | HasPhoneNumber;
// }
// // interface PhoneNumberDict {
// //   [numberName: string]: undefined | {
// //     areaCode?: number;
// //     num: number;
// //   };
// // }
// // const phoneDict: PhoneNumberDict = {
// //   office: { areaCode: 321, num: 5551212 },
// //   home: { areaCode: 321, num: 5550010 },
// //   fax: { num: 123091230 }
// // };
// // phoneDict.cell?.num;
// interface PhoneNumberDict {
//   name: string;
//   home: {
//     areaCode: number;
//     num: number;
//   };
//   office: {
//     areaCode: number;
//     num: number;
//   };
// }
// type NumberVal = 1 | 2 | 3 | NumberVal[];
// type StringVal = "a" | "b" | "c" | StringArr;
// let teststr: StringVal = ["a", "b", ["a"]];
// interface StringArr {
//   [k: number]: "a" | "b" | "c" | StringVal[];
// }
// const x: StringVal = Math.random() > 0.5 ? "b" : ["a"];
// export default {};
