// function CreateBankAccount() {
//     this.showDetails = function() {
//         console.log('Account balance is ', this.balance);
//     };
//     this.deposit = function(amount) {
//         this.balance = this.balance + amount;
//     };
//     this.withdraw = function(amount) {
//         this.balance = this.balance - amount;
//     };
// }

// var wantsome = {
//     name: 'Andrei',
//     balance: 1000,
//     amount: 300,
// }

// var cont1 = new CreateBankAccount();

// // cont1.deposit(500);
// // cont1.showDetails();
// // cont1.withdraw(700);
// // cont1.showDetails();

// var wantsome = {
//     name: 'Andrei',
//     balance: 1000,
// }

// var result = cont1.deposit.bind(wantsome);
// result(200);



// cont1.showDetails.apply(wantsome);

// cont1.deposit.apply(wantsome, [400]);
// var result = cont1.showDetails.bind(wantsome);
// result();

// // arrow functions
// var sum = (a,b) => {
//     return a+b;
// }
// var sum = (a,b) => a+b;
// //arrow functions au return implicit
// //in arrow function nu exista this



// var matrix = {
//     morpheus: 'Fishbourne',
//     neo: 'Keanu',
//     trinity : 'Moss',
//     details: {
//         year: 1999,
//         rating: 8.7,
//     }
// };

// var {morpheus, details:{year: releaseYear}} = matrix;

// var {neo, trinity, ...rest} = matrix;

// console.log(matrix.neo[0]);

// var {neo} = matrix;
// console.log(neo);




class BankAccount {
    constructor(name, initialBalance) {
        this.name = name
        this.balance = initialBalance
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    showBalance() {
        console.log(`Account name: ${this.name} \nBalance: $${this.balance}`)
    }
    
    static getBankBalance() {
        console.log('Banca aceasta iz the best');
    }
}

// const acc1 = new BankAccount('Andrei', 20000);

// acc1.deposit(3000);
// acc1.showBalance();

//metodele withdraw/deposit apartin instantei acc1
//metodele statice apartin clasei BankAccount

function CreateObj(protoObj) {
    function oFn() {}
    oFn.prototype = protoObj;
    return new oFn();
}

