function pairElement(str) {
  //map through and get pair, store pair 
  var array = [];

  for (var i = 0; i < str.length; i++){
    switch(str[i]) {
      case "G":
        array.push(["G", "C"]);
        break;
      case "C":
          array.push(["C", "G"]);
          break;
      case "A":
          array.push(["A", "T"]);
          break;
      case "T":
          array.push(["T", "A"]);
          break;
    }
  }
  
  console.log(array)
  return array;
}

pairElement("GCG"); // [["G", "C"], ["C","G"],["G", "C"]]

pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

pairElement("TTGAG"); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

pairElement("CTCTA"); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
