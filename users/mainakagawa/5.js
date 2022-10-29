//input ["a", "b", "c"]
//output{0: "a", 1, "b", 2: "c"}
const input = (array) => {
  return { ...array };
};

console.log(input(['a', 'b', 'c']));
