/**
 * ランダムな数字があります。昇順のユニークな要素配列とそのユニーク要素が何回出現したかを表す配列を出力してください。for文で実装すること
 * input
 * [2, 2, 5, 2, 2, 2, 4, 5, 5, 9];
 *
 * output
 * [[2,4,5,9], [5,1,3,1]]
 **/

const input = [2, 2, 5, 2, 2, 2, 4, 5, 5, 9];

const f = (parma) => {
  const map = new Map();
  const sortedArr = [...parma].sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr.indexOf(sortedArr[i]) === i) {
      map.set(sortedArr[i], 1);
    } else {
      const count = map.get(sortedArr[i]);
      map.set(sortedArr[i], count + 1);
    }
  }
  return [[...map.keys()], [...map.values()]];
};
console.log(f(input));
