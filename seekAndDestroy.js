function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var array = arr.filter(function (remove) { return !args.includes(remove) });

  console.log(array);
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
