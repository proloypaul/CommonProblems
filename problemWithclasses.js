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

// problem inheritance of hackerrank
class Rectanguler{
    width;
    height;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}


class Square extends Rectanguler{
    // area(){
    //     const a = this.width;
    //     const areaOfSquare = a * a;
    //     return areaOfSquare;
    // }
}

Rectanguler.prototype.area = function(){
    const widthOfRectanguler = this.width;
    const heightOfRectanguler = this.height;
    let areaOfBoth;
    if(isNaN(heightOfRectanguler)){
        areaOfBoth = widthOfRectanguler*widthOfRectanguler;
    }else{
        areaOfBoth = widthOfRectanguler*heightOfRectanguler;
    }
    return areaOfBoth;
}
const rec = new Rectanguler(4, 3);
const squ = new Square(2);
console.log(rec.area());
console.log(squ.area())

// another way to solved this problem
// class Rectanguler{
//     w;
//     h;
//     constructor(w, h){
//         this.w = w;
//         this.h = h;
//     }
// }
// // added a method on Rectanguler class
// Rectanguler.prototype.area = function(){
//     return areaOfBoth = this.w*this.h;
// }
// class Square extends Rectanguler{
//     constructor(h){
//         super(h, h);
//     }
    
// }
// const rec = new Rectanguler(3, 4);
// const squ = new Square(3);
// console.log(rec.area()) 
// console.log(squ.area())