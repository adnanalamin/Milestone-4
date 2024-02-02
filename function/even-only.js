function evenNumberOnly(numbers) {
  let added = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      added.push(number);
    }
  }
  return added;
}

const number = [2, 3, 4, 5, 6];
// const add = evenNumberOnly(number);
// console.log(add);

function sumAllNumber(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
    }
  }
  return sum;
}

const total = sumAllNumber(number);
console.log(total);
