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

function checkUsersCSS(userCheck) {
    for (let i = 0; i < userCheck.techs.length; i++) {
        if (userCheck.techs[i] == 'CSS') {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < users.length; i++) {  
    const userWorksCSS = checkUsersCSS(users[i]);    
    if (userWorksCSS) {
        console.log(`The user ${users[i].name} works with CSS`);
    } 
}

