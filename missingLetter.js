function fearNotLetter(str) {
  var baseString = "abcdefghijklmnopqrstuvwxyz";

  let firstChar = str.charAt(0);
  // let arrayBaseString = baseString.split("");
  let charInBaseString = baseString.indexOf(str.charAt(0));

  for (let i = 0; i < str.length; i++)
  {
    
    if (str[i] != baseString[charInBaseString + i])
    {
      console.log(baseString[charInBaseString + i]);
      return baseString[charInBaseString + i];
    }
  }
  console.log(firstChar);
  console.log(charInBaseString);

  return str;
}

fearNotLetter("abce"); // "d"

fearNotLetter("abcdefghjklmno"); // "i"

fearNotLetter("stvwx"); // "u"

fearNotLetter("bcdf"); // "e"

fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // undefined
