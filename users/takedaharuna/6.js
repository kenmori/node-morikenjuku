//input: ["a", "b", "c"]
//output: { a: 0, b: 1, c: 2 }

function f(input) {
    return input.reduce((target, current, index) => {
        target[current] = index;
        return target;
    }, {})
}

const input = ["a", "b", "c"];
const output = f(input);
console.log(output);
