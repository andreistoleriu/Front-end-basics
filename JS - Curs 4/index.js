// function nrPrim(n) {
//       var prim = true;
//       for(i=2; i<n; i++) {
//         if(n%i===0) {
//           prim = false;
//         }
//       }
//       if(prim===true) {
//         console.log('numarul este prim')
//       } else {
//         console.log('numarul nu este prim');
//       }
//     }
    
//     nrPrim(4);

//     function nrPrim(n) {
//         if(n<=1) {
//             return false;
//         }
//         if(n===2){
//             return true;
//         }
//         for(var i=3; i<n/2; i+=2) {
//             if(n%i===0) {
//                 return false;
//             }
//     }
//     return false;
// }
//     console.log(nrPrim(21));


// function repeatString(str, n) {
//     var result="";
//     for(i=1; i<=n; i++) {
//     result = str+result;
//     }
//     return result;
// }
// console.log(repeatString('ceva ', 5));


// function taxCalc(income) {
//     var tax;

//     if(income <= 30000) {
//         return "taxa este 0%";
//     }
//     if(income > 30000 && income <50000) {
//         taxa = income * 0.15;
//         return taxa;
//     }
//     if(income > 50001 && income <100000) {
//         taxa = income * 0.35;
//         return taxa;
//     }
//     taxa = remuneratie * 0.4;
//     return taxa;
// }

// function calculateTax(salary, tax) {
//     return "Taxa este" +tax+"%". 
// }

// var cantareti = [
//     "Dua Lipa",
//     "Gabriel Cotabita",
//     "Nu am",
//     "The weeknd",
//     "Elena Gheroghe"
// ]

// console.log(cantareti.indexOf('Gabriel Cotabita'));


const numbers = [1,2,3,4,5,6,7,8];

const result1 = numbers.filter(function(element)