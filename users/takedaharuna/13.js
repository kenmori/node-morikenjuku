//input: { a: 1, b: 2, c: 3 }
//output: { a: 2, b: 4, c: 6 }

const f = input => {
    const keys = Object.keys(input);
    const object = {};
    for (const key of keys){
        object[key] = input[key] * 2;
    }
    return object;
};

const input = { a: 1, b: 2, c: 3 };
const output = f(input);
console.log(output);
