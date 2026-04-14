// Not REccommended , this is not a clean code, good practice to use string and number together because it can lead to unexpected results and bugs in your code.
console.log("1" + 2) // "12"
console.log( 1 + "2") // "12"
console.log( "1" + 2 + 2) // "122"
console.log( 1 + 2 + "2") // "32"

console.log(3 + 4 * 5 % 3) // 3 + (4 * 5) % 3 => 3 + 20 % 3 => 3 + 2 => 5
console.log((3 + 4) * 5 % 3) // (3 + 4) * 5 % 3 => 7 * 5 % 3 => 35 % 3 => 2


// ToSolve this problem we can use Number() function to convert string to number
// ToSolve read documentation of mdn and tc39 .

console.log(Number("1") + 2) // 3
console.log( 1 + Number("2")) // 3
console.log( Number("1") + 2 + 2) // 5
console.log( 1 + Number("2") + 2) // 5
