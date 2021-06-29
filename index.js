
let array1 = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;
        
//array1.splice(0, 1, 3);
//array1.splice(2, 1, 3);


function arrayReplace(array) {
    //array1 = [1, 2, 1];
    array.splice(0, elemToReplace, substitutionElem);
    array.splice(2, elemToReplace, substitutionElem);
    return array;
}

console.log(arrayReplace(array1));