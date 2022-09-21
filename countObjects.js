const objects = [
    {"x": 1, "y": 1},
    {"x": 2, "y": 3},
    {"x": 3, "y": 3},
    {"x": 3, "y": 4},
    {"x": 5, "y": 4}
];

function getCount(objects){
    let count = 0;
    for(let i=0; i<objects.length; i++){
        const xValue = objects[i].x;
        const yValue = objects[i].y;
        if(xValue==yValue){
            count++;
        }
    }

    return count;
};

console.log(getCount(objects));
