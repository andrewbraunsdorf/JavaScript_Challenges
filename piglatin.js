function translatePigLatin(str) {
  let vowelText = "way";
  let vowel = /[aeiou]/gi;
  let firstLetter = str[0]

  if (firstLetter.match(vowel)) {
    str = str.concat(vowelText);
  } else {
    vowelIndex = str.indexOf(str.match(vowel)[0]);
    str = str.substring(vowelIndex) + str.substring(0, vowelIndex) + 'ay';
  }

  console.log(str)

  return str;
}
translatePigLatin("rhythm"); // "rhythmay"
translatePigLatin("consonant");
translatePigLatin("california"); // aliforniacay"
translatePigLatin("glove"); // "oveglay"
translatePigLatin("algorithm"); // "algorithmway"
translatePigLatin("eight"); // "eightway"