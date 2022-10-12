// hackerrank problem template literals
const expressions = [140, 48];
let s1;
let s2;
// console.log(...expressions);
function sides(...expressions){
    const A = expressions[0][0];
    const P = expressions[0][1];

    const commonCalculation = Math.sqrt(P*P - (16*A));

    s1 = (P + commonCalculation)/4;
    s2 = (P - commonCalculation)/4;
    const storeValue = [s1, s2].sort();
    return storeValue;
}

console.log(sides(expressions));