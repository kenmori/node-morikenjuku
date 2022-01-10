// input
//  { a: 1, b: 2, c: 3 }

//  output
//  { a: 2, b: 4, c: 6 }

const input = { a: 1, b: 2, c: 3 };

const f = (obj) => {
    return Object.keys(obj).reduce(
        (acc, key) => ({ ...acc, [key]: obj[key] * 2 }),
        {}
    );
};

console.log(f(input));