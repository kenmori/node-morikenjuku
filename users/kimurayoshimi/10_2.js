const a = (b) =>
  b.reduce(
    (target, key, index) => {
      target.ids[index] = key.id;
      target.entities = {
        ...target.entities,
        [key.id]: { value: key.value },
      };
      return target;
    },
    { ids: [] }
  );

const b = a([
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 },
]);

console.log(b);
