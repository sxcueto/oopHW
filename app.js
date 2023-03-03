// 3.
const anArray = [["Ken", 45], ["Barbie", 50]];

// 4.
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

// 5.
var anotherArray = [[['A','B'], ['C','D'], ['E','F'], ['G','H']]]

// 6.
function greaterThanYou (a,b){
    if (a > b){
        return a
    }else {
        return b;
    }
}
greaterThanYou(17,50)

// 7.
function equalOrNah (a,b){
    if (a === b){
        return 'They are equal.'
    } else {
        return "Nah, they aren't equal."
    }
}

console.log(equalOrNah('pie', 3.14))
console.log(equalOrNah(27, 27))