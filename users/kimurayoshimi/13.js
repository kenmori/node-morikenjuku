function f(input) {
  const result = Object.keys(input).reduce(
    (target, key) => ({
      ...target,
      [key]: input[key] * 2,
    }),
    {}
  );
  return result;
}

const input = { a: 1, b: 2, c: 3 };
const output = f(input);
console.log(output);
