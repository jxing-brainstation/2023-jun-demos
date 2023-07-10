//input: the temperature in F
//output: the temperature in C
function convertFtoC(tempInF) {
    let celciusTemp = (tempInF - 32) * 5 / 9;
    // console.log(celciusTemp)
    return celciusTemp;
}

// you will not see the output in the console unless you console.log it.
// let convertedTemperature = convertFtoC(85);
// console.log(convertedTemperature);

// alternative:
console.log(convertFtoC(85));

// console.log(convertFtoC);

let convertCtoF = function (tempInC) {
    let farenheitTemp = tempInC * 9 / 5 + 32;
    return farenheitTemp;
}

console.log(convertCtoF(29.444444444));

// console.log(convertCtoF);

//round temperature to a whole number
//input: floating point decimal number
//output: integer
function roundTemperature(temperature) {
    return Number(temperature.toFixed(0));
}

console.log(roundTemperature(81.9));

console.log(roundTemperature(convertFtoC(85)))

function wardrobeDecider(temperatureInF) {
    if (temperatureInF < 45) return "wear a winter coat";
    if (temperatureInF >= 45 && temperatureInF < 55) {
        return "wear a fall coat"
    }
    if (temperatureInF >= 55) {
        return "wear a regular jacket"
    }

    return "no jacket";
}

console.log(wardrobeDecider(80));
console.log(wardrobeDecider("random string"));



