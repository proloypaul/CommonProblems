// hackerrank problem arrays;

// shortcut solve
const nums = [2, 3, 6, 6, 5];
let numsTwo = [...new Set(nums.sort())];
// console.log(numsTwo);
console.log(numsTwo[numsTwo.length-2]);

// solve with function
function getSecondLargest(nums) {
    // Complete the function
    const sortedNums = nums.sort();
    const withOutDoubleNum = [...new Set(sortedNums)];
    const secondLargeNum = withOutDoubleNum[withOutDoubleNum.length-2];
    return secondLargeNum;  
}
console.log(getSecondLargest(nums));

// solved secondLarge number without any method
const numsArray = [7, 23, 78, 45, 89, 79];
let largeNum = numsArray[0];
let secondLargeNum = numsArray[0];

for(let i=0; i<numsArray.length; i++){
    if(numsArray[i]>largeNum){
        secondLargeNum = largeNum;
        largeNum = numsArray[i];
    }else if(numsArray[i] > secondLargeNum && largeNum != numsArray[i]){
        secondLargeNum = numsArray[i];
    }
}
console.log("second large number " + secondLargeNum);


// find small number from an Array
// let smallestNum = nums[0];
// for(let i=0; i<nums.length; i++){
    
//     if(smallestNum>nums[i]){
//         smallestNum = nums[i];
//     }
// }
// console.log(greaterNum);