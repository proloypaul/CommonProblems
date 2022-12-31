const s = "102, 1948934 and 1.3 and 4.5"; // this is input of the problem

const regexVar = () => {
    let re;
    re = new RegExp(/[0-9]+/g);
    return re;
}

const result = s.match(regexVar());
for(let i=0; i<result.length; i++){
    console.log(result[i]);
} 

// This input output will be must have use RegularExp
// "102"
// "1948934"
// "1"
// "3"
// "4"
// "5"

