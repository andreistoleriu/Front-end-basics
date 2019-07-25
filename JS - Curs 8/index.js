// function filterFn(arr, fn) {
//     var result = [];
//     for(var i=1; i < arr.length; i++) {
//         if(fn(arr[i]) === true) {
//             result.push(arr[i]);
//         }
//         return result;
//     }
// }


// function isOdd(el) {
//     return el % 2 === 0;
// }

// var myArr= [1,2,3,4];

// console.log(filterFn(myArr,isOdd));


// function isEven(el) {
//     return el % 2 !== 0;
// }

// // function gTTwo(el) {
// //     return el > 2;
// // }

// console.log(filterFn(myArr,isEven));
// // console.log(filterFn((myArr, gTTwo));


// function findFn(arr, fn) {
//     for(var i=0; i<arr.length; i++) {
//         if(fn(arr[i])===true) {
//             return arr[i];
//         }
//     }
// }

// function firstGT10(el) {
//     return el > 10;
// }


// myArr = [1,11,17,12];
// console.log(findFn(myArr,firstGT10));

function findIndex(arr, fn) {
    for(var i=0; i<arr.length; i++) {
        if(fn(arr[i])===true) {
            return {
                index: i,
                el: arr[i],
            };
        }
    }
}

function firstGT10(el) {
    return el > 10;
}


myArr = [1,9,2,21];
console.log(findIndex(myArr,firstGT10));

