// input:["a", "b", "c"]
// output:{sum: "abc", length: 3}

function f(input) {
  const obj = new Object();
	const arrayJoin = input.join('');
  obj.sum = arrayJoin;
  obj.length = arrayJoin.length;
  return obj

}

const array = ['a', 'b', 'c'];
const output = f(array);
console.log(output);
