// problem of hackerrank Classes
class Polygon{
    arrNum;
    constructor(arrNum){
        this.arrNum = arrNum;
    }

    perimeter(){
        const allNum = this.arrNum;
        // console.log(allNum);
        let valueSum = 0;
        for(let i=0; i<allNum.length; i++){
            valueSum = valueSum + allNum[i];
            // console.log(typeof(allNum[i]))
        }

        return valueSum;
    }

}

const result = new Polygon([3, 4, 3]);
// console.log(result);
console.log(result.perimeter())
