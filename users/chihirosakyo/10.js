/* 
input : 
[
  { id: "a", value: 1 },
  { id: "b", value: 2 },
  { id: "c", value: 3 }
]

output : 
{
  ids: ["a", "b", "c"],
  entities: {
    a: { value: 1 },
    b: { value: 2 },
    c: { value: 3 }
  }
}

*/

function f(input){
  const entitiesObj = {};
  return input.reduce((result, current, i) => {
      result['ids'][i] = current.id;
      entitiesObj[current.id] = {value: current.value};
      result['entities'] = entitiesObj;
      return result;
  }, {ids:[]});
}


const input = [
{ id: "a", value: 1 },
{ id: "b", value: 2 },
{ id: "c", value: 3 }
];
const output = f(input);
console.log(output);
