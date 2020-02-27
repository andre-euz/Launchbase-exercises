const user = {
    name: 'André',
    transactions: [],
    balance: 0
}

function createTransaction(type,value) {
    user.transactions.push({type,value});                            
    if (type === 'credit') {
        user.balance += value;
    }
    if (type === 'debit') {
        user.balance -= value;
    }

    return console.log(user);
}

function getHigherTransactionByType(type) {
    let highValue = 0;
    for (let transactions of user.transactions) {
        if (transactions.type === type) {
            let valueNow = transactions.value;
            if (valueNow > highValue) {
                highValue = valueNow;
                highObject = transactions;
            }        
        }        
    }
    return console.log(highObject);
}

function getAverageTransactionValue() {
    let sumValue = 0;
    for (let transactions of user.transactions) {
        sumValue += transactions.value;
    }
    return console.log(sumValue/user.transactions.length);
}

function getTransactionsCount() {
    let transactionCount = {credit: 0,
                            debit: 0};
    for (let transactions of user.transactions) {
        if (transactions.type === 'credit') {
            transactionCount.credit += 1;
        }
        if (transactions.type === 'debit') {
            transactionCount.debit += 1;
        }
    }
    return console.log(transactionCount);
}

createTransaction('credit',20);
createTransaction('credit',70);
createTransaction('debit',20);
createTransaction('debit',100);
createTransaction('credit',80);

getHigherTransactionByType('credit');
getHigherTransactionByType('debit');

getAverageTransactionValue();

getTransactionsCount();