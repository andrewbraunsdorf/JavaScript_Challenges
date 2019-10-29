function convertHTML(str) {
  // &colon;&rpar;

  let singleStringChars = str.split("");

  for (let i = 0; i < singleStringChars.length; i++)
  switch(singleStringChars[i]) {
    case "&":
        singleStringChars[i] = "&amp";
    break;
    case "<":
        singleStringChars[i] = "&lt";
    break;
    case ">":
        singleStringChars[i]= "&gt";
    break;
    case "\"":
        singleStringChars[i]= "&quot";
    break;
    case "'":
        singleStringChars[i]= "&apos";
    break;     
  }
  str = singleStringChars.join("");
  console.log(str)
  return str;
}

convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana

convertHTML("Hamburgers < Pizza < Tacos"); // Hamburgers &lt; Pizza &lt; Tacos

convertHTML("Sixty > twelve"); // Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"'); // Stuff in &quot;quotation marks&quot;
