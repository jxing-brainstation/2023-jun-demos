import { convertFtoC, convertCtoF, convertSecretChars } from "./utils"

describe("temperature conversion functions", () => {

    it("converts a temperature in F to C", () => {
        const outputInCelcius = convertFtoC(212);
        expect(outputInCelcius).toBe(100);
    })

    it("converts a temperature in C to F", () => {
        const outputInFarenheight = convertCtoF(100);
        expect(outputInFarenheight).toBe(212);
    })
})

describe("morning challenges", () => {
    // given a string, replace the characters a,s,o,h,x with @,$,0,5,* respectively

    const testPasswords = [
        ["someKindofHoaxES", "$0meKind0f50@*E$"],
        ["iamapassword", "i@m@p@$$w0rd"],
        ["IAMAPASSWORD", "I@M@P@$$W0RD"],
        ["HOAXShoaxs", "50@*$50@*$"],
        [5, "failed"],
        [true, "failed"],
        ["ooooo", "00000"],
        ["a", "@"]
    ];

    testPasswords.forEach(([input, output]) => {
        it(`converts ${input} to ${output}`, () => {
            expect(convertSecretChars(input)).toBe(output);
        })
    })
    // it("converts a string that includes all secret characters", () => {
    //     expect(convertSecretChars("someKindofHoaxES")).toBe("$0meKind0f50@*E$")
    // })

    // it("converts a string that has duplicate secret characters", () => {
    //     expect(convertSecretChars("iamapassword")).toBe("i@m@p@$$w0rd")
    // })

    // it("converts a string that has capital letters", () => {
    //     expect(convertSecretChars("IAMAPASSWORD")).toBe("I@M@P@$$W0RD")
    // })

    // it("outputs 'failed' if the input is not a string", () => {
    //     expect(convertSecretChars(123)).toBe("failed")
    // })
})