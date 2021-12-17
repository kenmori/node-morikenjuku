// input
// ["a", "b", "c"]
// output
// [{0: "a"}, {1: "b"}, {2: "c"}]

const f = (param) => {
    const result = param.map((value, index) => ({ [index]: value }));
    return result;
  };
  
  const input = ['a', 'b', 'c'];
  const output = f(input);
  console.log(output);
  