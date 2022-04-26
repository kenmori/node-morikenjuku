//input: ["a", "b", "c"]
//output: [{0: "a"}, {1: "b"}, {2: "c"}]

const f = (input) => {
    return input.map((value, index) => ({[index] : value}));
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
