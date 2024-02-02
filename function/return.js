// Discus about function returns keyword

function tenTimes(number) {
  const result = number * 10;
  return result;
}

const output = tenTimes(5);
console.log(output);

// Example ======================== 2

function age(num1, num2) {
  const diff = num1 - num2;
  return diff;
}

const fatherAge = 50;
const myAge = 23;
const different = age(fatherAge,myAge);
console.log(different);
