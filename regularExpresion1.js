// hackerrank problem Regular Expression I

const s = "aebcdea";
const regexVar = () => {
    let re;
    // console.log(s[s.length - 1]);
    const firstAndLastLetter = s[0] + s[s.length-1];
    console.log(firstAndLastLetter);
    if(firstAndLastLetter==="aa"||firstAndLastLetter==="ee"||firstAndLastLetter==="ee"||firstAndLastLetter==="ii"||firstAndLastLetter==="oo"||firstAndLastLetter==="uu"){
        // console.log("true");
        re = /^((a)|(e)|(i)|(o)|(u))/;
    }else{
        // console.log("false");
        re = /aa/;
    }
    return re; 
}
const result = regexVar();
// console.log(result.test(s));

const regexVarTwo = () => {
    let re;
    // console.log(/^((a)|(e)|(i)|(o)|(u))/.test(s), /((a)|(e)|(i)|(o)|(u))$/.test(s));
    
    if(/^((a)|(e)|(i)|(o)|(u))/.test(s) && /((a)|(e)|(i)|(o)|(u))$/.test(s)){
        if(s.match(/((a)|(e)|(i)|(o)|(u))$/)[0] === s.match(/^((a)|(e)|(i)|(o)|(u))/)[0]){
            re = /^((a)|(e)|(i)|(o)|(u))/;
        }else{
            re = /false/;
        }
        
    }else{
        re = /false/;
    }
    
    return re;
}
const resultTwo = regexVarTwo()
console.log(resultTwo.test(s));

// hackerrank select this solution to solved this problem
const regexVarThree = () => {
    let re = /^([aeiou]).*(\1)$/i;
    return re;
}
const resultThree = regexVarThree();
console.log(resultThree.test(s));

// example of /^([aeiou]).*(\1)$/ this reguler expression condition 
            // 1. /^ this operator select first letter from string 
            // 2. () this use for grouping 
            // 3. [] set any letter a-z or number 0-9 in this operator
            // 4. . matches any charecter/ch
            // 5. * modifier means match 0 or more times such as /bo*/ it will be booooo
            // 6. 1 matches if existed
            // 7. $/ this operator select end letter from string 
            // 8. i for incasesensative that means A or a letter same meanning  
            // 9. + modifier means match 1 or more times such as /a+/ it will becaaaandy
