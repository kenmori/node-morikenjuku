const input = ['a', 'b', 'c'];
function f(array) {
  const result = Object.fromEntries(Object.entries(array));
  return result;
}
const output = f(input);
console.log(output);

