//input: [
//   { id: "a", value: 1 },
//   { id: "b", value: 2 },
//   { id: "c", value: 3 }
// ]

//output: {
//   ids: ["a", "b", "c"],
//   entities: {
//     a: { value: 1 },
//     b: { value: 2 },
//     c: { value: 3 }
//   }
// }

const f = input => {
    return input.reduce((result, current, index) => {
        result.ids[index] = current.id;
        result.entities[current.id] = { value : current.value };
        return result;
    },{ids: [], entities: {}})
}

const input = [
    { id: "a", value: 1 },
    { id: "b", value: 2 },
    { id: "c", value: 3 }
]
const output = f(input);
console.log(output);
