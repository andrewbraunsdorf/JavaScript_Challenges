function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  var lowercase = str.replace(/\s|_|--/g, "-").toLowerCase();

  console.log(lowercase);
  return lowercase;
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("thisIsSpinalTap");

