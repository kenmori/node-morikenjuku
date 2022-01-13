//input: "abcdefd"
//output: "4"

function f(input) {
    const searchWord = "e";
    return input.indexOf(searchWord);
}

const input = "abcdefd";
const output = f(input);
console.log(output);
