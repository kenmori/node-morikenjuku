//input: ["a", "b", "c"]
//output: false

const existsSpecificLetter = input => {
    const specificLetter = "e";
    return input.includes(specificLetter);
}

const input = ["a", "b", "c"];
const output = existsSpecificLetter(input);
console.log(output);
