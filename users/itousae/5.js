const input = ["a", "b", "c"];
function output(array) {
  return Object.fromEntries(Object.entries(array));
}
console.log(output(input));
