const a = (b) => {
  const ids = { ids: b.map((value) => value.id) };
  const entities = {
    entities: b.reduce(
      (target, key) => ({ ...target, [key.id]: { value: key.value } }),
      {}
    ),
  };
  return Object.assign({}, ids, entities);
};

const b = a([
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 },
]);
console.log(b);
