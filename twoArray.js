function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  for (var i = 0; i < arr1.length; i++) {
    // loop through all elemenets to find unique items
    // comparing the items
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }

  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j])
    }
  }

  console.log("newArr " + newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub");

