// solution 1
function caesarCypher(secret, shift) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz"; // len = 26
  let encryption = "";
  for (let i = 0; i < secret.length; i++) {
    const char = secret[i];
    if (char === " ") {
      encryption += " ";
    } else {
      const charIdxInAlphabets = alphabets.indexOf(char);
      let newIdxOfChar = charIdxInAlphabets + shift;
      if (newIdxOfChar > 26) {
        newIdxOfChar = newIdxOfChar % 26; 
      }
      encryption += alphabets[newIdxOfChar];
    }
  }  
  return encryption; 
}

// solution 2
function caesarCypher(secret, shift){
  let alphabets = "abcdefghijklmnopqrstuvwxyz"; // len = 26
  let encryption = "";
  for (let i = 0; i < secret.length; i++) {
    const char = secret[i];
    if (char === " ") {
      encryption += " ";
    } else {
      const charIdxInAlphabets = alphabets.indexOf(char);
      let newIdxOfChar = charIdxInAlphabets + shift;
      if (newIdxOfChar > 26) {
        newIdxOfChar = newIdxOfChar - 26; 
      }
      encryption += alphabets[newIdxOfChar];
    }
  }  
  return encryption; 
}