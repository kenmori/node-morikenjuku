//input: "abcdefg"
//output: "gfedcba"
//*notion* don't use reverse method.

const f = input => [...input].reduce((prev,current) => current + prev);
const input = "abcdefg"
const output = f(input);
console.log(output);
