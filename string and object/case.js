const subject = "English";
const book = 'english';

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log("boi pore fatai felbo");
}
else{
    console.log("ami to kichui pari na");
}
const subject1 = "english ";
const book1 = ' english';

if(subject1.trim() === book1.trim()){
    console.log("boi pore fatai felbo");
}
else{
    console.log("ami to kichui pari na");
}