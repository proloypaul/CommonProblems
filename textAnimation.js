const skilled = ["Developer", "Designer", "Programmer", "Youtuber"];

let indexNum = -1;
const parentation = () => {
    if(indexNum == skilled.length - 1){
        indexNum = 0;
    }else{
        indexNum++;
    }

    // for(let i = 0; i<skilled.length; i++){
    //     setTimeout(function showText(){
    //         console.log(skilled[indexNum])
    //     }, 1000)
    // }    
    console.log(skilled[indexNum])
    indexNum = indexNum;
}

parentation()
const showText = () => {
    parentation()
}
setTimeout(showText, 2000)
setTimeout(showText, 3000)
setTimeout(showText, 4000)

const images = ["firstImg", "secondImg", "thirdImg", "forthImg"]

const slideShow = () => {
    
}

