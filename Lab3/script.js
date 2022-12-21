var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(0) == "J" || names[i].charAt(0) == "j") {
    console.log(speak_g(names[i]));
  } else {
    console.log(speak_h(names[i]));
  }
} 

console.log("Check letter 'a' in the word");

for (let i = 0; i < names.length; i++) {
  let chars = names[i].split('');
  var newname = new Boolean(false);
  newname = false;
  
  for (let n = 0; n < chars.length; n++) {
    if (chars[n] == 'a') {
      newname = true;
    } 
  }
 
  if (newname){
    console.log(speak_g(names[i]));
  } else {
    console.log(speak_h(names[i]));
  }
}