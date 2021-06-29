
let array1 = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;
        
//array1.splice(0, 1, 3);
//array1.splice(2, 1, 3);


function arrayReplace() {
    array1 = [1, 2, 1];
    array1.splice(0, 1, 3);
    array1.splice(2, 1, 3);
}

console.log(arrayReplace());