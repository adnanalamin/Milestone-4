const age = 42;
const price = 600;

if(age <= 12){
    console.log("You can eat free");
}
else if (age >= 60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 50){
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 40){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log(price);
}