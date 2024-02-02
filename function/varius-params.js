function evenSize(str) {
  const len = str.length;
  if (len % 2 === 0) {
    return true;
  }
  return false;
}

const result = evenSize("Dhaka");
// console.log(result);

function someNumbers(numbers) {
    const len = numbers.length;
    return len;
}

const number=[12,33,45,78,88,900,13];
const total = someNumbers(number);
// console.log(total);


function age(person){
    const result=person.age;
    return result;
}

const man = {
    name:'adnan',
    age:23
}

const find = age(man);
console.log(find);




