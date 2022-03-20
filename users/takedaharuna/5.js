//input: ["a", "b", "c"]
//output: {0: "a", 1: "b", 2: "c"}

function ConvertToObject(input) {
    return {...input};
}

const input = ["a", "b", "c"];
const output = ConvertToObject(input);
console.log(output);
