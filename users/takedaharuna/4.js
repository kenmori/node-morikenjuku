//input: [1, 2, 3, 4, 5, 6, 7]
//output: [1, 3, 5, 7]

function f(input) {
    const oddList = input.filter(num => num % 2 === 1);
    return oddList;
}

const input = [1, 2, 3, 4, 5, 6, 7];
const output = f(input);
console.log(output);
