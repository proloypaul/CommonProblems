// hackerrank problem conditional statement switch
const s = "bdfgt";
const getLetter = (s) => {
    let letter;
    // console.log(typeof(s.charAt(0)))
    switch(s.charAt(0)){    // we also can use s[0] to collect s variable first letter
        case "a": case"e": case"i": case"o": case"u":
            letter = "A";
            break;
        case "b": case"c": case"d": case"f": case"g":
            letter = "B";
            break;
        case "h": case"j": case"k": case"l": case"m":
            letter = "C";
            break;
        default:
            letter="D";
    }
    return letter;
}
console.log(getLetter(s));

// this case work only one case 
// switch("santo"){
//     case "sifat", "fardin", "rakib":
//         console.log("yes, you are caught");
//         break;
//     case "farhaz", "osman", "santo":
//         console.log("yes, you are caught");
//         break;
//     default:
//         console.log("sorry")
// }