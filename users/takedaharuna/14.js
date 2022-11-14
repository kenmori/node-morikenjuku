//input: 'type=listing&page=2&rowCount=10'
//output: {type: "listing", page: "2", rowCount: "10"}

const f = input => {
    return [...new URLSearchParams(input).entries()].reduce((obj,current) => ({...obj, [current[0]]: current[1]}), {});
}
const input = 'type=listing&page=2&rowCount=10';
const output = f(input);
console.log(output);
