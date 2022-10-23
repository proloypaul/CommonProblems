// hackerrank problem Reguler expression II
const s = "Dr#Josep";
const regexVar = (s) => {
    let re;
    re = new RegExp(/^(Mr|Mrs|Ms|Dr|Er)[\.][a-zA-Z]+$/); // we use \. because of . represent charater in RegEx but we need only .
    
    return re;
}
const result = regexVar(s);
console.log(!!s.match(result)); // this is collected from hackerrank hidden code for showing output according to them

/* 

/^(Mr|Mrs|Ms|Dr|Er)[\.][a-zA-Z]+$/ // This condion is correct condition to solve this problem
/^(Mr|Mrs|Ms|Dr|Er)[\.][a-zA-Z]*$/ // this condion has one problem such as when you enter Mr. it will be true but we want Mr.Dfsdfsd then it has to true

*/