export function convertFtoC(tempInF) {
    let celciusTemp = (tempInF - 32) * 5 / 9;
    return celciusTemp;
}

let convertCtoF = function (tempInC) {
    let farenheitTemp = tempInC * 9 / 5 + 32;
    return farenheitTemp;
}
export { convertCtoF };

export function convertSecretChars(password) {
    // const superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
    if (typeof password !== "string") {
        return "failed";
    }
    const secretCharMap = {
        a: "@",
        s: "$",
        o: '0',
        h: "5",
        x: "*"
    }

    const splittedPassword = password.split("");
    const convertedPassword = splittedPassword.map((character) => {
        if (secretCharMap[character.toLowerCase()] !== undefined) {
            return secretCharMap[character.toLowerCase()]
        } else {
            return character
        }
    })
    return convertedPassword.join("");
}