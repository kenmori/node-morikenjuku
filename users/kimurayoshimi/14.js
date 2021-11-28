function f(input) {
  const query = new URLSearchParams(input);
  const result = Object.fromEntries(query);
  return result;
}

const input = "type=listing&page=2&rowCount=10";
const output = f(input);
console.log(output);
