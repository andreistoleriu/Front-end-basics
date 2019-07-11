// 1.
// Creati o functie care primeste ca argument un sir de caractere si
// gaseste cel mai lung cuvant din acest sir. Daca doua cuvinte au aceeasi
// lungime returnati primul cuvant cu acea lungime.

function isLongestWord(strToSplit) {
    var splitString = strToSplit.split(' ');
    var longestWord = 0;

    for(var i=0; i<splitString.length; i++) {
        if(splitString[i].length > longestWord);
        longestWord = splitString[i];
    }
return longestWord;
}

console.log(isLongestWord('unu doi patru trei doi'));

// 2.
// Scrieti o functie care sa aiba output-ul asta
// *
// * *
// * * *
// * * * *
// * * * * *

for(var i = 1; i <= 5; i++) {
    for(var j = 1; j<= i; j++) {
      document.write("*");  
    }
    document.write("<br/>");
}

// 3.
// Creati o functie care primeste o lista de persoane de forma {name, age} si
// returneaza doar pe cei cu varsta peste 18 ani. Modificati functia astfel
// incat conditia de filtrare sa poate fi controlata printr-o functie
// pasata ca argument.





// 4.
// Creati o functie cu doi parametri de tip string si care verifica daca
// cele doua cuvinte formeaza o anagrama.





// 5.
// Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un
// string/numar.




// removeDuplicates('aabcdeef') -> 'abcdef'
// removeDuplicates(122334) - 1234




// 6.
// Creati o functie care returneaza al N-lea numar din seria lui Fibonacci.

function fibonacci (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci(7));
 


// fibonacci(7) -> 13
// fibonacci(9) -> 44

// 7.
// Creati o functie care ridica la patrat fiecare cifra a unui numar.

var numbers = [3,4,6,7];
var newArray = numbers.map(isSquareNum);
function isSquareNum(num) {
    return num * num;
}
console.log(newArray);
  

// squareDigits(943) -> 81169; 9*9 = 81, 4 * 4 = 16, 3 * 3 = 9
// squareDigits(12) -> 14
// squareDigits(682) -> 36644

// 8.
// Creati o functie cu un singur parametru de tip numar si returneaza o alta
// functie cu un parametru de tip numar. Functia copil returneaza suma
// dintre argumentul primei functii si argumentul ei.

function isSum(x) {
    return function (y) {
        return x + y;
    }
}
console.log(isSum(3)(4));

// const add3 = makeAdder(3)
// const add5 = makeAdder(5)
// add3(10) -> 13
// add3(5) -> 8
// add5(10) -> 15

// 9.
// Creati o functie numita buildFun care primeste un numar N ca argument
// si returneaza un array cu N elemente de tip function. Cand apelam pe rand
// functiile din acest array ar trebui sa logam la consola numerele de la
// 0 la N.
