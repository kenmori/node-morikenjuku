function f(input) {
  const result = input.reduce(
    (target, key, index) => {
      target.sum = target.sum + key;
      target.ids[index] = { [key]: { value: key } };
      return target;
    },
    { sum: 0, ids: [] }
  );
  return result;
}

const input = [1, 2, 3, 4];
const output = f(input);
console.log(output);
