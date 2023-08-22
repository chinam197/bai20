var arr = [
  ["a", 1, true],
  ["b", 2, false],
  ["c", 0, undefined, NaN],
];

var result = [];
for (let i = 0; i < arr.length; i++) {
  let subArray = [];
  for (let j = 0; j < arr.length; j++) {
    subArray.push(arr[j][i]);
  }
  result.push(subArray);
}
console.log(result);
