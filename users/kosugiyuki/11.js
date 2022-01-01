// input
// [1, 2, 3, 4]
// output
// {
//   sum: 10,
//   ids: [
//     {
//       1: { value: 1 },
//       2: { value: 2 },
//       3: { value: 3 },
//       4: { value: 4 }
//     }
//   ]
// }
const input = [1, 2, 3, 4];

const f = (param) => {
  return param.reduce(
    (obj, current, index) => {
      obj.sum = obj.sum + current;
      obj.ids[current] = { ['value']: current };
      return obj;
    },
    { sum: 0, ids: {} }
  );
};

const output = f(input);
console.log(output);
