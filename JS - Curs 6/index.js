var bankAcc = createBankAccount("Andrei", 1000);
var secondAcc = createBankAccount("Costel", 1000);

bankAcc.transferMoney(200, secondAcc);
bankAcc.showName();
bankAcc.showBalance();
secondAcc.showName();
secondAcc.showBalance();

function createBankAccount(name, initBalance) {
  var name = name;
  var balance = initBalance;
  function withdraw(amount) {
    if (amount > balance) {
        console.log('Fonduri insuficiente');
    }
    else {
        balance = balance - amount;
    }
  }
  function deposit(amount) {
    balance = balance + amount;
  }
  function showBalance() {
    console.log("Account balance is " + balance);
  }
  function showName() {
    console.log("Account name is " + name);
  }  
  return {
    withdraw,
    deposit,
    showBalance,
    showName,
  };
}
