// // hackerrank throw problem

function isPositive(a){
    if(a<0){
        throw {message : "Nagetive Error"};
    }else if(a===0){
        throw {message : "Zero Error"};
    }else{
        throw {message : "YES"};
    }

}
let n = 3;
for(let i = 0; i < n; i++) {
    // const a = +(readLine());
    try {
        console.log(isPositive(0));
    } catch (e) {
        console.log(e.message);
    }
}

// let a = [2, -4, 6, -2, 0];
// const lengthOfa = a.length;
// const usingThrowFuc = (lengthOfa, a) => {
//     for(let i=0; i<lengthOfa; i++){
//         try{
//             if(a[i]<0){
//                 throw "Nagetive Error";
//             }else if(a[i]===0){
//                 throw "Zero Error";
//             }else{
//                 throw "YES";
//             }
//         }catch(err){
//             console.log(err);
//         }
        
//     }
// }
// let a = 1;


