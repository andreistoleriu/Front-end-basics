//array standard library

//array cu 50 elemente
function createArray(start, end) {
    var numbers = [];
    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}
var numbers = createArray(1,50);
console.log(numbers);

//primele 10 elemente

const result1 = numbers.slice(0, 10);
console.log(result1);


// function isSmallerThan10 (value) {
//     return value <=10;
// }

// const result1 = numbers.filter(isSmallerThan10);
// console.log(result1);


//obiect cu nume si prenume
var obj = {
    firstName: 'Andrei',
    lastName: 'Stoleriu',
}

numbers.push(obj);
console.log(numbers);

//al 2-lea array + merge cu array initial
var numbers2 = createArray(51,55);
console.log(numbers2);

var numbers2 = numbers.concat(numbers2)
console.log(numbers2);

//element nou pe pozitia 2
numbers2.splice(2,0,"adaugat ulterior");
console.log(numbers2);


//string standard library

//functia truncate
function truncate (str, num) {
    return str.substring(0, num) 
}
const truncateResult = truncate('abcdefghijk', 5);
console.log(truncateResult);

//functia split
function splitWords (str) {
    var splitArray =  str.split(' ');
    console.log(splitArray);
}
var stringToSplit = 'Ana are multe mere';

splitWords(stringToSplit);