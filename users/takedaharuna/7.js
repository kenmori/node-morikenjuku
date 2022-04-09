//input: ["a", "b", "c"]
//output: {sum: "abc", length: 3}

const f = (input) => {
    return {sum: input.join(""), length: input.length}
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
