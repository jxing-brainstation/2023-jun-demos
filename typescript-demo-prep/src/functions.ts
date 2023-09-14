// import { HasEmail, HasPhoneNumber } from "./basics";

// function sendEmail(to: HasEmail): { recipient: string; body: string } {
//   return {
//     recipient: `${to.name} <${to.email}>`,
//     body: "You're pre-qualified for a loan!"
//   };
// }

// const sendTextMessage = (
//   to: HasPhoneNumber
// ): { recipient: string; body: string } => {
//   return {
//     recipient: `${to.name} <${to.phone}>`,
//     body: "You're pre-qualified for a loan!"
//   };
// };

// function getNameParts(contact: { name: string }) 
// : {
//     first: string;
//     middle: string | undefined;
//     last: string;
// } 
// {
//   const parts = contact.name.split(/\s/g);
//   if (parts.length < 2) {
//     throw new Error(`Can't calculate name parts from name "${contact.name}"`);
//   }
//   return {
//     first: parts[0],
//     middle:
//       parts.length === 2
//         ? undefined
//         : parts.slice(1, parts.length - 2).join(" "),
//     last: parts[parts.length - 1]
//   };
// }