/*
    input: { a: 1, b: 2, c: 3 }
    output:{ a: 2, b: 4, c: 6 }
    */
const input = { a: 1, b: 2, c: 3 };

const f = (parma) => {
  return Object.keys(parma).reduce((obj, key) => {
    obj[key] = parma[key] * 2;
    return obj;
  }, {});
};

console.log(f(input));
