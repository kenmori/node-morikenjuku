/*
input:
[
    ["1","2"],
    [[[3]]]
];

output:['1', '2', '3']
*/

const f = input => [...input.flat(3).join("")];

const input = [["1","2"],[[[3]]]];;
const output = f(input);
console.log(output);
