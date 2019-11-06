function smallestCommons(arr) {

  let array = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  let leastCommonMultiple = max;

  for (let i = max -1; i >= min; i--){
    if (leastCommonMultiple % i){
      leastCommonMultiple += max;
      i = max;
    }
  }
  return leastCommonMultiple;
  // array.sort(function(a,b){
  //   return b-a;
  // })

  // for (let j = array[0]; ; j+= array[0])
  // {
  //   console.log(j);
  //   let check = true;
  //   for (let k = 0; k < array.length; k++) {
  //     if (j % array[k] > 0) {
  //       check = false;
  //     }
  //   }
  //   if (check){
  //     console.log(j);
  //     return j;
  //   }
  // }
}


smallestCommons([1, 5]); // 60
smallestCommons([5, 1]); // 60
smallestCommons([2, 10]); // 2520
smallestCommons([1, 13]); // 360360
smallestCommons([23, 18]); // 6056820


