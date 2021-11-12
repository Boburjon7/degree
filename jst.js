var a = +prompt('Enter a number')
var b = +prompt('Enter a degree')

total = 1


while (isNaN(a) || a == ' ' ) {
    a = +prompt("Enter a number")
}while (isNaN(b) || b == ' ' ){
    b = +prompt("Enter a degree")
}for (let i = 1; i <= b; i++) {
    total = total * a
    
}

alert("Result: " + total)


// if (isNaN(a) && isNaN(b)) {
//     alert("ikkalasi ham son emas")
// }else if (isNaN(a)) {
//     alert("Birinchisi son emas")
// }else if (isNaN(b)) {
//     alert("ikkinchisi son emas")
// }else(
//     alert("Result: " + total)
// )


// if (a<1 && 1<a) {
//     alert("Son emas")
// }





// Boburjon