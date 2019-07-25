function Calculator() {
  this.num1;
  this.num2;
  this.read = function(n1, n2) {
    this.num1 = n1;
    this.num2 = n2;
    console.log(`Numerele sunt ${n1}, ${n2}`);
  };
  this.sum = function() {
    var sum1 = this.num1 + this.num2;
    console.log("Suma numerelor este: " + sum1);
  };
  this.multiply = function() {
    var product = this.num1 * this.num2;
    console.log("Produsul numerelor este: " + product);
  };
  this.diff = function() {
    var difference = this.num1 - this.num2;
    console.log("Diferenta numerelor este: " + difference);
  };
  this.divide = function() {
    var divided = this.num1 / this.num2;
    console.log("Impartirea numerelor este: " + divided);
  };
}
var calculator = new Calculator(); //USING NEW
// calculator.read(12,3);
// calculator.sum();
// calculator.multiply();
// calculator.diff();
// calculator.divide();

var calc = {
  checkThis: function() {
    console.log(this);
  },
  readFn: function(n1, n2) {
    this.prop1 = n1;
    this.prop2 = n2;
    console.log(`Numerele sunt ${n1}, ${n2}`);
  },
  sumFn: function() {
    var sum = this.prop1 + this.prop2;
    console.log("Suma numerelor este: " + sum);
  },
  multiplyFn: function() {
    var product = this.prop1 * this.prop2;
    console.log("Produsul numerelor este: " + product);
  },
  diffFn: function() {
    var difference = this.prop1 - this.prop2;
    console.log("Diferenta numerelor este: " + difference);
  },
  divideFn: function() {
    var divided = this.prop1 / this.prop2;
    console.log("Impartirea numerelor este: " + divided);
  }
};
calc.readFn(12, 3); //USING DOT NOTATION
calc.sumFn();
calc.multiplyFn();
calc.diffFn();
calc.divideFn();

var checkdis = calc.checkThis;
checkdis(); //USING FREE FUNCTION INVOCATION



//USING BIND, CALL, APPLY
var calc = {
  n1: 14,
  n2: 15
};

function multiply() {
  return this.n1 * this.n2;
}
function sum() {
  return this.n1 + this.n2;
}
function diff() {
  return this.n1 - this.n2;
}
function divide() {
  return this.n1 / this.n2;
}
// console.log(multiply.call(calc));
// console.log(sum.call(calc));
// console.log(divide.call(calc));
// console.log(diff.call(calc));

// console.log(multiply.apply(calc));
// console.log(sum.apply(calc));
// console.log(divide.apply(calc));
// console.log(diff.apply(calc));

// var result1 = multiply.bind(calc);
// console.log(result1());

// var result2 = sum.bind(calc);
// console.log(result2());

// var result3 = diff.bind(calc);
// console.log(result3());

// var result4 = divide.bind(calc);
// console.log(result4());
