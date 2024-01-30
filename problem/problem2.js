// Sum array element
const numbers = [10,20,30,40,50];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    let currentNumber = numbers[i];
    sum = sum + currentNumber;
}
console.log(sum);