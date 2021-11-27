function f(input) {
  const result = input.reduce((target, key) => {
    target[key[0]] = key[1];
    return target;
  }, {});
  return result;
}

const input = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const output = f(input);
console.log(output);
