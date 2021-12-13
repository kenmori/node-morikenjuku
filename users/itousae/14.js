/**
 * input:'type=listing&page=2&rowCount=10'
 * output:{type: "listing", page: "2", rowCount: "10"}
 */

const input = 'type=listing&page=2&rowCount=10';
const output = (parma) => Object.fromEntries(new URLSearchParams(parma));
console.log(output(input));
