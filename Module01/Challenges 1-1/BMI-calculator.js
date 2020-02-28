const name = 'André';
const weight = 96;
const height = 1.73;

const bmi = weight / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you're above of weight, BMI: ${bmi}`);
}
if (bmi < 29.9) {
    console.log(`${name}, you aren't above of weight, BMI: ${bmi}`);
}
