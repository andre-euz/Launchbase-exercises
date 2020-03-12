const name = 'André';
const sex = 'M';
const age = 38;
const contribution = 70;

const total = age + contribution;

if (sex === 'M') {
    if (total >= 95) {
        console.log(`${name}, you may retire!`);
    } else {
        console.log(`${name}, you still can't retire!`);
    }
} else {
    if (total >= 85) {
        console.log(`${name}, you may retire!`);
    } else {
        console.log(`${name}, you still can't retire!`);
    }
}
