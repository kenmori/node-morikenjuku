function f(input) {
  const result = input.reduce(
    (acc, current, index) => {
      acc.ids[index] = current.id;
      acc.entities[current.id] = { value: current.value };
      return acc;
    },
    { ids: [], entities: {} }
  );
  return result;
}
const input = [
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 },
];
const output = f(input);
console.log(output);

// input
// { id: 'a', value: 1 },
// { id: 'b', value: 2 },
// { id: 'c', value: 3 },

// output
// {
//   ids: ["a", "b", "c"],
//   entities: {
//     a: { value: 1 },
//     b: { value: 2 },
//     c: { value: 3 }
//   }
// }
