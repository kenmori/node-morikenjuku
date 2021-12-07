/*
input: [1, 2, 3, 4]

output:
{
  sum: 10,
  ids: [
    {
      1: { value: 1 },
      2: { value: 2 },
      3: { value: 3 },
      4: { value: 4 }
    }
  ]
}
*/
const input = [1, 2, 3, 4];

const output = (parma) => {
  return parma.reduce(
    (obj, value) => {
      obj.sum = obj.sum + value;
      obj.ids.push({ [value]: { value: value } });
      return obj;
    },
    { sum: 0, ids: [] }
  );
};
console.log(output(input));
