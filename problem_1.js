// Problem_1:
// একটি বড় সংখ্যার মানুষ জন পিকনিক যাবে। বাসের সংখ্যা মানুষের সংখ্যার উপর নির্ভর করবে। 
// ধরো আমাদের বাস ও মাইক্রো আছে। প্রতিটি বাসের capacity 40 জন এবং প্রতিটি মাইক্রোবাসের capacity 11 জন 
// এবং পাবলিক বাসের প্রতিটি টিকেট এর মূল্য 250 টাকা করে। 
// এখন তোমাকে একটি function লিখতে হবে যার নাম হবে publicBusFare যেটি perameter 
// হিসেবে একটা সংখ্যা ( কতজন যাবে নিবে। মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে

const publicBusFare = (totalPublic) => {
    const OneMicroBasPublic = 11;
    const OneBasPublic = 50;
    // total bas need
    const totalBas = parseInt(Math.trunc(totalPublic/OneBasPublic));  // here we also can use Math.floor()
    // total microbas need
    const totalMicroBas = parseInt(Math.trunc(totalPublic - totalBas*50)/OneMicroBasPublic)
    // local bas price 
    const localBasPrice = 250;
    // total microbas public 
    const totalMicroBasPublic = OneMicroBasPublic * totalMicroBas;
    // total bas public
    const totalBasPublic = OneBasPublic * totalBas;
    // total public can sit
    const totalPublic_Sit = totalMicroBasPublic + totalBasPublic;
    // local bas public will be
    const localBasPublic = totalPublic - totalPublic_Sit;
    // total local bas price
    const totalLocalBasPrice = localBasPublic * localBasPrice;

    if(totalLocalBasPrice >= 0){
        return "Total local bas price : " + totalLocalBasPrice;
    }
}

const publicBusFareResult = publicBusFare(270);
console.log(publicBusFareResult);

