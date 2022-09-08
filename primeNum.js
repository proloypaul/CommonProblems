

function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i===0) return false;
    };
    return num > 1;
}

console.log(isPrime(73));

// // get check prime number

const checkerPrimeNum = (isPrimeNum) => {
    for(let n = 2; n<isPrimeNum; n++){
        if(isPrimeNum % n === 0) return `${isPrimeNum} isn't Prime Number`;
    }
    if(isPrimeNum > 1){
        return `${isPrimeNum} is Prime Number`;
    }
}
const primeNumResult = checkerPrimeNum(93)
console.log(primeNumResult);

// another way to get prime number 
const num = 37;
let isPrimeNum = false;
for(let i=2; i<num; i++){
    // non prime number
    if(num%i == 0){
        isPrimeNum = true;
    }
}
if(!isPrimeNum){
    console.log(num, " is prime number");
}else{
    console.log(num, " isn't prime number");
}

// 1 t0 100 total prime number;
for(let j=2; j<=100; j++){
    let isPrimeNum = true;
    for(i=2; i<j; i++){
        // non prime number 
        if(j%i==0){
            isPrimeNum = false;
            break;
        }
    }
    if(isPrimeNum){
        console.log(j);
    }
}
