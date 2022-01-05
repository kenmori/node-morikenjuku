// input
// [
//   ['0', 'a'],
//   ['1', 'b'],
//   ['2', 'c']
// ]
// output
// { 0: "a", 1: "b", 2: "c" }
const input = [
    ['0', 'a'],
    ['1', 'b'],
    ['2', 'c'],
];

const f = (param) => {
    return param.reduce((obj, current, index) => {
        obj[current[0]] = current[1];
        return obj;
    }, {});
};

const output = f(input);
console.log(output);
