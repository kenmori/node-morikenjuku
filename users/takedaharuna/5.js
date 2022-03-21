//input: ["a", "b", "c"]
//output: {0: "a", 1: "b", 2: "c"}

function convertToObject(input) {
    return {...input};
}

const input = ["a", "b", "c"];
const output = convertToObject(input);
console.log(output);
