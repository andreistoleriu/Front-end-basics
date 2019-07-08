function createBankAccount(name) {
  var accountInfo = {
    name: name,
    balance: 100,
    transactionsLog: []
  };
  function getAccountInfo() {
    return accountInfo;
  }

  function withdraw(amount) {
    if (amount > accountInfo.balance) {
      console.log("Fonduri insuficiente");
    } else {
      accountInfo.balance = accountInfo.balance - amount;
      accountHistory("Withdraw", amount);
    }
  }
  function deposit(amount) {
    accountInfo.balance = accountInfo.balance + amount;
    accountHistory("Deposit", amount);
  }
  function showBalance() {
    return accountInfo.balance;
  }
  function showName() {
    return name;
  }
  function transferMoney(amount, account) {
    accountInfo.balance = accountInfo.balance - amount;
    account.deposit(amount);
    accountHistory('Transfer', amount);
  }
  function accountHistory(transactions, amount) {
    let input = {
      transactions,
      amount,
      Date: Date.now()
    };
    accountInfo.transactionsLog.push(input);
  }

  return {
    getAccountInfo,
    withdraw,
    deposit,
    showBalance,
    showName,
    transferMoney,
    accountHistory
  };
}

var bankAcc = createBankAccount("Andrei", 1000);
var secondAcc = createBankAccount("Costel", 1000);

bankAcc.deposit(1000);
bankAcc.withdraw(700);
bankAcc.deposit(500);
bankAcc.deposit(500);
bankAcc.deposit(300);
bankAcc.withdraw(150);
bankAcc.withdraw(200);
bankAcc.transferMoney(450, secondAcc)
console.log(bankAcc.getAccountInfo());

secondAcc.deposit(2000);
secondAcc.transferMoney(1800, bankAcc);
secondAcc.deposit(1500);
secondAcc.withdraw(300);

console.log(secondAcc.getAccountInfo());



