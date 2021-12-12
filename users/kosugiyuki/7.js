// input
// ["a", "b", "c"]
// output
// {sum: "abc", length: 3}
const input = (array) => {
    let obj = {};
  
    obj['sum'] = array.join('');
    obj['length'] = array.length;
    return obj;
  };
  
  const array = ['a', 'b', 'c'];
  const output = input(array);
  console.log(output);
  