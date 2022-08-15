// gunniyk or Numerator a number

const numeratorAnumber = (userInputNum) => {
    let count = 0;
    for(let i=1; i<= userInputNum; i++){
        if(userInputNum%i == 0){
            console.log(i);
            count++;
        };
    };
    console.log(userInputNum + " Total numerator " + count)
};

numeratorAnumber(60);

// another way find numerator num

const numeratorFuc = (userInputNum) => {
    if(userInputNum <= 100){
        let allNumerator = "";
        for(let a=1; a<=userInputNum; a++){
            if(userInputNum%a == 0){
                allNumerator = allNumerator + a + " ";
            }

            console.log("case " + a + ": " + allNumerator);
        }
    }else{
        console.log("Please give less then 101 number");
    }
}

numeratorFuc(30);
