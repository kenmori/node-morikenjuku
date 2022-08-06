//input: [
//   ['0', 'a'],
//   ['1', 'b'],
//   ['2', 'c']
// ]

//output: { 0: "a", 1: "b", 2: "c" }

const f = input => {
    return Object.fromEntries(input);
};

const input = [
    ['0', 'a'],
    ['1', 'b'],
    ['2', 'c']
]
const output = f(input);
console.log(output);
