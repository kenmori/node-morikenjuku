/**
 * Remove "not", "so" element. not use Iterator method(map, forEach,...etc) and Iterator(for, while)
 * input
 * ['today', 'was', 'not', 'so', 'great']
 *
 * output
 * [['today', 'was', 'great'], ['not', 'so']]
 **/

const input = ['today', 'was', 'not', 'so', 'great'];
const f = (parma) => {
  let i = 0;
  let removed = [];
  let result = [...parma];

  const func = (value) => {
    if (value === 'not' || value === 'so') {
      removed.push(value);
      result.splice(i, i);
    }
    if (i < parma.length - 1) {
      i++;
      func(parma[i]);
    }
  };

  func(parma[i]);
  return [result, removed];
};

console.log(f(input));
