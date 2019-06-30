//exercitiul 1

// var helloWorldInLang = function(language) {
//     if(language === 'en') {
//         console.log('Hello world');
//     }
//     else if(language === 'es') {
//         console.log('Hola mundo');
//     }
//     else if(language === 'de') {
//         console.log('Hallo Welt');
//     }
//     else {
//         console.log('Hello World');
//     }
// }
// helloWorldInLang('es');

//exercitiul 2

// function minArray(input) {
//     var min = input[0];
//     for(var i=1; i<input.length; i++) {
//         if(input[i]<min) {
//             min = input[i];
//             console.log('minimul este '+ min)
//         }
//     }
// }
// minArray([5,10,15,2,25,24]);

//exercitiul 3

// function nrPrim(n) {
//   var prim=1;
//   for(i=2; i<n; i++) {
//     if(n%i==0) {
//       prim = 0;
//     }
//   }
//   if(prim==1) {
//     console.log('numarul este prim')
//   } else {
//     console.log('numarul nu este prim');
//   }
// }

// nrPrim(4);