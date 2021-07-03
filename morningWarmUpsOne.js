// TODO: Create a function named countSpaces that accepts a string and
//  returns the total number of spaces in the string.

function countSpaces(str) {
    if (typeof str !== 'string'){
        return false;
    }
    else {
        let spaceCount = 0; (str.split(" ").length - 1);
        //for (let x = 0; x < str.length; x++) {
            //if (str.substring(x, x + 1) === " ") {
               // spaceCount++;
            }
    //return spaceCount;
        }

//console.log(spaceCount);

console.log(countSpaces("Total number of spaces"));
console.log(countSpaces("Total number"));
console.log(countSpaces("Total number of"));

// TODO: Add validation to function above, if the argument pass is not a string it should return false.
