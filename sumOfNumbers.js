function sumAll(arr) {
  var max = Math.max(arr);
  var min = Math.min(arr);
 
  var count = 0;
  for (var i = min; i < max; i++)
  {
  	count += i;
  }
  console.log(count);
}

sumAll([1, 4]);
