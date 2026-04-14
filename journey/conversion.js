let score = 33

let valueInNumber = Number(score) // 33
let valueInString = String(score) // "33"
let valueInBoolean = Boolean(score) // true

console.log(valueInNumber) // 33
console.log(valueInString) // "33"
console.log(valueInBoolean) // true

let score1 = "33"

let valueInNumber1 = Number(score1) // 33
let valueInString1 = String(score1) // "33"
let valueInBoolean1 = Boolean(score1) // true

console.log(valueInNumber1) // 33
console.log(valueInString1) // "33"
console.log(valueInBoolean1) // true

let score2 = "33abc"

let valueInNumber2 = Number(score2) // NaN
let valueInString2 = String(score2) // "33abc"
let valueInBoolean2 = Boolean(score2) // true

console.log(valueInNumber2) // NaN
console.log(valueInString2) // "33abc"
console.log(valueInBoolean2) // true

let score3 = ""

let valueInNumber3 = Number(score3) // 0
let valueInString3 = String(score3) // ""
let valueInBoolean3 = Boolean(score3) // false

console.log(valueInNumber3) // 0
console.log(valueInString3) // ""
console.log(valueInBoolean3) // false

let isloogedIn = 1
let valueInNumber4 = Number(isloogedIn) // 1
let valueInString4 = String(isloogedIn) // "1"
let valueInBoolean4 = Boolean(isloogedIn) // true

console.log(valueInNumber4) // 1
console.log(valueInString4) // "1"
console.log(valueInBoolean4) // true

let isloogedIn1 = 0
let valueInNumber5 = Number(isloogedIn1) // 0
let valueInString5 = String(isloogedIn1) // "0"
let valueInBoolean5 = Boolean(isloogedIn1) // false

console.log(+true) // 1
console.log(+false) // 0
console.log(+"") // 0

// String to number ; NaN is not a number, it is a special value that represents an invalid number. It is the result of an operation that cannot produce a valid number, such as dividing zero by zero or converting a non-numeric string to a number. NaN is of type "number", but it is not equal to any other value, including itself. To check if a value is NaN, you can use the isNaN() function or the Number.isNaN() method.

// true = 0 ; false = 1 ; 
