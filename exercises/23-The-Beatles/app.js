let sing = () => {

    let lyrics = "";

    for (let i=0; i<12; i++){
        if (i==4){
            lyrics += "whisper words of wisdom, ";
        } else if (i==10){
            lyrics += "there will be an answer, "
        } else if (i==11){
            lyrics += "let it be"
        } else {
            lyrics += "let it be, "
        }
    }

    return lyrics;
}

//Your code above ^^^

console.log(sing());

