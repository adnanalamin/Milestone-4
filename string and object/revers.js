// 1st formula to revers a string
const sentens = "i am a student.";

let revers = "";

for (letter of sentens) {
  revers = letter + revers;
}
console.log(revers);

let rev = "";
for (let i = 0; i < sentens.length; i++) {
  const letter = "sentens[i]";
  rev = letter + rev;
}

const reversed = sentens.split('').reverse().join('');
console.log(reversed)
