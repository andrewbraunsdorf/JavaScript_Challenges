function binaryAgent(str) {
  // let string = str.parseInt(str,2).toString(10);
  str = str.replace(/\s+/g, '');
  str = str.match(/.{1,8}/g).join(" ");

 let string = str.split(" ").map(function (binaryToString) {
    return String.fromCharCode(parseInt(binaryToString, 2));
  }).join("");

  // console.log(binaryToString);
  console.log(string);
  return string;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // "I love FreeCodeCamp!"

