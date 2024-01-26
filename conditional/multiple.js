const sarary = 25000;
const isBCS = true;
const height = 58;
const haveCar = true;

if(sarary > 23000 && isBCS == true){
    console.log("asho mama biye kori");
}else{
    console.log("bari jeye muri kha");
}

if(sarary > 26000 || isBCS == true){
    console.log("asho mama biye kori");
}else{
    console.log("bari jeye muri kha");
}

if(sarary > 26000 || isBCS == false || height > 99){
    console.log("asho mama biye kori");
}else{
    console.log("bari jeye muri kha");
}

if(sarary > 23000 && isBCS == true && height > 56){
    console.log("asho mama biye kori");
}else{
    console.log("bari jeye muri kha");
}

if((sarary > 23000 && isBCS == false) || height > 56){
    console.log("asho mama biye kori");
}else{
    console.log("bari jeye muri kha");
}