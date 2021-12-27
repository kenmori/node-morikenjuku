// input
// [
//   { id: "a", value: 1 },
//   { id: "b", value: 2 },
//   { id: "c", value: 3 }
// ]
// output
// {
//   ids: ["a", "b", "c"],
//   entities: {
//     a: { value: 1 },
//     b: { value: 2 },
//     c: { value: 3 }
//   }
// }`

const f = (param) => {
  return param.reduce(
    (obj, current, index) => {
      obj.ids[index] = current.id;
      obj.entities[current.id] = { ['value']: current.value };
      return obj;
    },
    { ids: [], entities: {} }
  );
};

const input = [
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 },
];
const output = f(input);
console.log(output);
