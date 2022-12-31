// hackerrank create a Rectangule object problem
const a = 4;
const b = 5;
function Rectangle(a, b){
    const length = a;
    const width = b;
    const perimeter = 2 *(length + width);
    const area = length*width;
    const result = {
        "length": length,
        "width": width,
        "perimeter": perimeter,
        "area": area
    }
    return result;
}

const rec = new Rectangle(a, b);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);