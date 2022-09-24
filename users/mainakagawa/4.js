//input:[1, 2, 3, 4, 5, 6, 7]
//output:[1, 3, 5, 7]
const input = (array) => array.filter((number) =>  number%2 !== 0 );
const output = input([1, 2, 3, 4, 5, 6, 7]);
console.log(output);
