const nums = [1, 2, 3, 4, 5];
function modifyArray(nums){
    const result = nums.map(num => {
        if(num%2 == 0){
            return num*2;
        }else{
            return num*3;
        }
    })
    // result = nums.filter(num => num%2 == 0);
    return result;
    
}
console.log(modifyArray(nums));