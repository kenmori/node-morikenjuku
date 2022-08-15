// input:["a", "b", "c"]
// output false

function f(input) {
  return input.some((value) => "e" === value);
}

const array = ['a', 'b', 'c'];
const output = f(array);
console.log(output);
