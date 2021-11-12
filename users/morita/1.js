// example

// input ["a"]
// output ["b"]

// your implements here
function input(a) {
  return (a[0] = 'b');
}

const output = input(['a']);
console.log(output);
