//  hackerrank problem Day 2 loops
 let s = "Abcdefghijkmnopqrstuvwxyz";

 const vowelsAndConsonants = (s) => {
    s = s.toLowerCase()
    for(let i=0; i<s.length; i++){
        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
            console.log(s[i]);
        }
    }
    for(let j=0; j<s.length; j++){
        if(s[j] === "a" || s[j] === "e" || s[j] === "i" || s[j] === "o" || s[j] === "u"){
            // don't need to print;
        }else{
            console.log(s[j]);
        }
    }
 }
 vowelsAndConsonants(s);

//  for(let i=0; i<2; i++){
//     console.log("vowel");
//  }
//  for(let j=0; j<4; j++){
//     console.log("consonants");
// }