// Question
/*
Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program.
*/
// solved
const helpedSarah = () => {
    const givenNum = 119;
    const diviedNum = 5;
    const remainderValue = givenNum % diviedNum;  // Modules help us to find remainder value
    return remainderValue;
}

// console.log("Remainder value would be " + helpedSarah());

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
// console.log(harryProblem());
// Question
/* 
John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program.
*/
// solved
const firstVar = "I am going to be";
const secondVar = "an awesome web developer";
const combineTwoVar = `'${firstVar}' and '${secondVar}'`; 
// console.log(combineTwoVar);

// Question
/* 
You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
*/
const checkGrade = (name, grade) => {
    if(grade >= 80){
        console.log(`${name} grade A`);
    }else if(grade >= 60){
        console.log(`${name} grade B`);
    }else if(grade >= 50){
        console.log(`${name} grade C`);
    }else if(grade >= 40){
        console.log(`${name} grade D`);
    }else{
        console.log(`${name} grade F`);
    }
}

// checkGrade("Shohag", 86);
// checkGrade("Tom's", 66);
// checkGrade("Jane's", 95);
// checkGrade("Peter's", 56);
// checkGrade("John's", 40);

// Question
/* 
You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.
*/

// solved
const firstNum = 13;
const secondNum = 79;
const thirdNum = 45;
if(secondNum<firstNum && firstNum>thirdNum){
    console.log("largest Number: " + firstNum);
}else if(secondNum>firstNum && secondNum>thirdNum){
    console.log("largest Number: " + secondNum);
}else{
    console.log("largest Number: " + thirdNum);
}


