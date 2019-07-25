//"use strict"

// metoda 4 -  Free function invocation
function freeFn() {
    console.log('free function invocation', this) 
    // this e valoarea contextului global - window
    // daca folosim 'strict mode' valoarea lui this este undefined
}

freeFn();

//metoda 3 - Object methods
var obj = {
    prop: 37,
    fn: function() {
        return this.prop;
    },
};

console.log(obj.fn());
//cand o functie este invocata ca metoda a unui obiect
//this este instanta obiectului (this = obj)


//metoda 2 - bind, call, apply
