const users = [
    {
        name: 'André',
        revenue: [115.3, 55.6, 65.7, 13.2],
        outlay: [65.4, 22.4, 12.2],
    },
    {
        name: 'Carlos',
        revenue: [260.2, 11.1, 25.4, 5.2],
        outlay: [22.1, 96.4, 123.2],
    },
    {
        name: 'Luana',
        revenue: [111.1, 23.4, 123.2, 55.1],
        outlay: [61.1, 64.1, 6.1, 250.1],
    },
]

function calculateBalance(revenue, outlay) {

    const sumUserRevenue = sumNumbers(revenue);
    const sumUserOutlay = sumNumbers(outlay);

    return sumUserRevenue - sumUserOutlay;
} 

function sumNumbers(arrayValues) {
    let sumNumber = 0;
    for (let i = 0; i < arrayValues.length; i++) {
        sumNumber += arrayValues[i];        
    }    
    return sumNumber;    
}

for (let i = 0; i < users.length; i++) {
    const name = users[i].name;
    const revenue = users[i].revenue;
    const outlay = users[i].outlay;        
    const balance = calculateBalance(revenue, outlay);
    if (balance > 0) {
        console.log(`${name} have credit balance of ${balance}`);
    } else {
        console.log(`${name} have debit balance of ${balance}`);
    }

}