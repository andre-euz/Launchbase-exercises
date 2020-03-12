const users = [
    {
        name: 'André',
        techs: ['C++','Python','Javascript']    
    },
    {
        name: 'Carlos',
        techs: ['C#','CSS']   
    },
    {
        name: 'Luana',
        techs: ['NodeJS','CSS','Javascript']   
    },
]

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} work with ${users[i].techs}`);
}