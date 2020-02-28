const user = {
    name: 'André',
    age: '25',
    techs: [
        { name: 'C++', especiality: 'Desktop' },
        { name: 'Python', especiality: 'Data Science' },
        { name: 'Javascript', especiality: 'Web/Mobile' },            
    ]    
}

techs = user.techs[0];

console.log(`The user ${user.name} have ${user.age} years old and makes use of ${techs.name} with especiality in ${techs.especiality}`);