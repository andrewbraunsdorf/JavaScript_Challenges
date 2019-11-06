function dropElements(arr, func) {
  // arr.shift();
  let arrlength = arr.length
  for (let i = 0; i < arrlength; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  console.log(func(arr[0]));
  console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // [3, 4]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // 
dropElements([1, 2, 3], function(n) {return n > 0;}); // [1, 2, 3]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); // []
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); // [7, 4]
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}); // [3, 9, 2]
