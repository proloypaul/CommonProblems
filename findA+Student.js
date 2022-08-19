/*
Think we have an array.This array have some student name and grade point. Now you have to 
find only this student who got A+. 
*/

const students = [
    {name: "Rafi", grade: 3.44},
    {name: "Emon", grade: 3.50},
    {name: "Pritish", grade: 4.00},
    {name: "Farhaz", grade: 3.60},
    {name: "Tanvir", grade: 3.80},
    {name: "Nazrul", grade: 3.85},
    {name: "Osman", grade: 4.00},
    {name: "manaf", grade: 3.80},
    {name: "sifat", grade: 4.00}
]

// collect all A+ student in A_plushStudent variable which return all student in array  
const A_plushStudent = students.filter(student => student.grade >= 3.80);

// show all A+ student name
A_plushStudent.map(student => console.log(student.name + " got A+. He is point " + student.grade));

// another shortcut way 
// const A_plushStudentTwo = students.filter(student => {
//     if(student.grade >= 3.80){
//         console.log(student.name + " got A+");
//     }
// });