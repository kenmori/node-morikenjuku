/**
 * input
 * [1, 2, 4, 10, 12]
 *
 * output
 * [3, 6, 14, 22]
 **/

const input = [1, 2, 4, 10, 12];

const f = (parma) => {
  return parma.reduce((result, value, index, array) => {
    if (index < array.length - 1) {
      result[index] = value + array[++index];
    }
    return result;
  }, []);
};

console.log(f(input));
