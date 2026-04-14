console.log(2>1) // true
console.log(2<1) // false
console.log(2>=1) // true
console.log(2<=1) // false
console.log(2==1) // false
console.log(2!=1) // true

// Make sure data type of variable is same while doing comparison, otherwise it will give unexpected result
// not recommended to use this in real code, but its works
console.log(2==="2") // false
console.log(2!=="2") // true
console.log("2" > 1) // true
console.log("02" > 1) // true
console.log("2" == 2) // true
console.log("2" === 2) // false

// Avoid using null in comparison, it can give unexpected result 
console.log (null > 0) // false
console.log (null == 0) // false
console.log (null >= 0) // true

