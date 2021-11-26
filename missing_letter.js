//function to generate missing letters within a string
// missingLetters(acef) = bd;

function missingLetters(str){
    let missing_letters = [];
    let str_array = str.split("");
    let str_len = str_array.length;
    let count = 0 ;

    if(str_len){
        const initial_charcode = str_array[0].charCodeAt();
        const last_charcode = str_array[str_len-1].charCodeAt();
      
        for(let i=initial_charcode; i<last_charcode; i++){
            if(!(i===str_array[count].charCodeAt())){
                missing_letters.push(String.fromCharCode(i));
            }else{
                count++;
            }
        }
    }
    return (missing_letters.length) ? missing_letters.toString() : undefined ;
}
console.log(missingLetters("ag"));
