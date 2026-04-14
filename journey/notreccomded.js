// Not recommended to use this in real code, but its works
console.log(3 +
    3
)
// learn about prefix and postfix increment and decrement operator 
// documentation: mdn and tc39 spec
console.log(+true) // 1
console.log(+false) // 0

// not recommended to use this in real code, but its works
console.log(3 + 4 * 5 % 3) 

// not recommended to use this in real code, but its works
let num1,num2,num3;
num1 = num2 = num3 = 2 + 2

// learn about prefix and postfix increment and decrement operator
let gameCounter = 0;
console.log(gameCounter)
gameCounter++

// Make sure data type of variable is same while doing comparison, otherwise it will give unexpected result
console.log("2" + 2) // "22"
console.log("2" - 2) // 0
console.log("2" * 2) // 4
console.log(2 / "3") // 0.6666666666666666

// make sure data type of variable is same while doing comparison, otherwise it will give unexpected result
console.log("2" > 1) // true
console.log("02" > 1) // true
console.log("2" == 2) // true
console.log("2" === 2) // false

// Avoid using null in comparison, it can give unexpected result 
console.log (null > 0)
console.log (null == 0)
console.log (null >= 0)

// We are using node js to run this code, so alert will not work, but in browser it will work
alert(3 + 3)

