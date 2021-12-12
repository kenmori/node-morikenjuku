function f(input) {
  const result = { sum: input.join(''), length: input.length };
  return result;
}
const input = ['a', 'b', 'c'];
const output = f(input);
console.log(output);

// input
// ["a", "b", "c"]

// output
// {sum: "abc", length: 3}
