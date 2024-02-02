function sumOfAll(numbers){
    let sum = 0;
    for(let number of numbers){
        sum=sum+number;
    }
    return sum;
}

const number = [2,3,4,5];
const total = sumOfAll(number);
console.log(total);