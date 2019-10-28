function myReplace(str, before, after) {

  var word = str.indexOf(before);

  if (str[word] === str[word].toUpperCase())
    {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }

  str = str.replace(before, after);
  console.log(word);
  console.log(after);
  console.log(str);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");  // "He is Sitting on the couch"

myReplace("Let us go to the store", "store", "mall");// "Let us go to the mall".

myReplace("This has a spellngi error", "spellngi", "spelling"); // "This has a spelling error"

myReplace("His name is Tom", "Tom", "john"); // His name is John"