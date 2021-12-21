// input
// ["a", "b", "c"]
// output
// false
// (Search "e" element, if not exist, return false)

const f = (param) => {
    const result = param.includes('e');
    return result;
};

const input = ['a', 'b', 'c'];
const output = f(input);
console.log(output);
