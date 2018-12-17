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

