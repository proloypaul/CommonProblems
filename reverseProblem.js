// hackerrank try, catch and finally problem
let s;
try{
    s = "1234";
    const addSplit = s.split("")
    const reversed = addSplit.reverse().join("");
    console.log(reversed);
}catch(err){
    console.log(err.message);
    console.log(s);
}finally{
    // console.log(s);
}

// another way to solve case 0;
const stringVar = "1234";
let r = "";
for(let i=stringVar.length-1; i>=0; i--){
    // console.log(s[i]);
    r = r + stringVar[i];
}
console.log(typeof(r));
