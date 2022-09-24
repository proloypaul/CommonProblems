// Question 
/* 
Harry’s mom gave him tk 1000 and asked him to buy some oranges and
apples. Write a program to help Harry calculate how much money the
shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
apples is tk 700.
*/

// solved

const harryProblem = () => {
    const gavenTk = 1000;
    const totalOrangeAndApple = 700;
    const returnMoney = gavenTk - totalOrangeAndApple;
    return returnMoney;
}
console.log(harryProblem());
