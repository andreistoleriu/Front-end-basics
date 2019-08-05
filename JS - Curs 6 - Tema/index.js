

bankAcc.deposit(1000);
bankAcc.withdraw(700);
bankAcc.deposit(500);
bankAcc.deposit(500);
bankAcc.deposit(300);
bankAcc.withdraw(150);
bankAcc.withdraw(200);
bankAcc.transferMoney(450, secondAcc)

bankAcc.numOfTransactions(3);

console.log(bankAcc.getAccountInfo());

secondAcc.deposit(2000);
secondAcc.transferMoney(1800, bankAcc);
secondAcc.deposit(1500);
secondAcc.withdraw(300);

secondAcc.numOfTransactions(3);

console.log(secondAcc.getAccountInfo());





