function output(array) {
  const result = array.filter((el) => el % 2 !== 0);
  console.log(result);
}

const input = [1, 2, 3, 4, 5, 6, 7];
output(input);
