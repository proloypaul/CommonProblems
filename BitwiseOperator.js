// hackerrank problem Bitwise operator 
const n = 8;
const k = 5;
function getMaxLessThank(n, k){
    const bitResultArr = [];
    for(let i=1; i<=n; i++){
        for(let j=i+1; j<=n; j++){
            const bitResult = i&j;
            if(bitResult<k){
                // console.log(bitResult);
                bitResultArr.push(bitResult);
                // return i&j;
            }
        }
    }
    return Math.max(...bitResultArr);
}
console.log(getMaxLessThank(n, k));