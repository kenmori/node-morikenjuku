function f(input) {
  const result = input.map((val, i) => ({ [i]: val }));
  return result;
}
const input = ['a', 'b', 'c'];
const output = f(input);
console.log(output);

// input
// ["a", "b", "c"]

// output
// [{0: "a"}, {1: "b"}, {2: "c"}]
