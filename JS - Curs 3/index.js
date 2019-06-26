// DO WHILE 
// num = 5;
// var i=0;
// do {
//     console.log(i+1);
//     i++;
// }
// while(i<100);

// var num = 136;

// if (num % 2 === 0) {
//     console.log('numarul este prim'); 
// } else {
//      console.log('numarul este impar');
// }

// var num = 3;
// var str = "Andrei";
// var undef;
// var person = {
//     name: "Andrei"
// };
// var simbol = Symbol("123");

// var datatypes = [num, str, true, undef, person, simbol, null, prompt()];

// // console.log(typeof(datatypes[0]));
// // console.log(typeof(datatypes[1]));
// // console.log(typeof(datatypes[2]));
// // console.log(typeof(datatypes[3]));
// // console.log(typeof(datatypes[4]));
// // console.log(typeof(datatypes[5]));

// for (var i=1 ; i < datatypes.length; i++) {
//     console.log(typeof(datatypes[i]));
// }

// var array = [5,7,10,4,9,12];
// var min = array[0];
// for (i=1; i<array.length; i++) {
//         if(array[i]<min) {
//             min = array[i];
//             console.log('minimul este ' + min);
//     }
// }


//obiect -> cheie-valoare

var diferenta = function (a, b) {
    return a-b;
}

console.log(diferenta(7, 5));


function diff(a, b) {
    const diff = a - b;
    console.log("diff=", diff);
}
diff(10, 5);

