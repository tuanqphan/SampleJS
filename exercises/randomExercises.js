var hellostring = "Hello everyone, how are you?"

var wordsarray = [];
var newword = "";
var newchar = "";

for (let each = 0; each <= hellostring.length; each++) {
    newchar = hellostring.charAt(each);
    if (newchar != " ") {
        newword = newword.concat(newchar);
    } else {
        wordsarray.push(newword);
        newword = "";
    }
}

wordsarray.push(newword);

// for (let each = wordsarray.length - 1; each >= 0; each--) {
//     console.log(wordsarray[each])
// }

each = wordsarray.length - 1;
do {
    console.log(wordsarray[each]);
    --each;
} while (each >= 0)


//==========================================================
var txt = ["a", "b", "c", "d", "e"];   // String
var [...tmpstring] = txt.toString().split(",")
console.log(tmpstring)

//==========================================================

var intsarray = [12, 2, 3, 6, 7, 43, 5 , 20, 20, 88, 23, 9, 34]

function sortIntArray(array) {
    for (let each = 0; each < array.length; each++) {
        for (let remaining = each + 1; remaining < array.length; remaining++) {
            if (array[each] > array[remaining]) {
                tmp = array[each];
                array[each] = array[remaining];
                array[remaining] = tmp;
            }
        }
    }
     
    return array;
}

console.log(sortIntArray(intsarray).toString())