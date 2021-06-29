
const array1 = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;
        
//array.splice(0, 1, 3);
//array.splice(2, 1, 3);


function arrayReplace(array) {
    array.splice(0, 1, 3);
    array.splice(2, 1, 3);
}

console.log(arrayReplace(array1));