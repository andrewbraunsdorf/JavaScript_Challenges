function steamrollArray(arr) {
  let array = arr.flat(4);
  console.log(array)
  return array;
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
steamrollArray([[["a"]], [["b"]]]); //["a", "b"]
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]