const myName = "deepak"

const myAge =20

console.log(myName + myAge)// old way of code not reccomended

console.log( `Hy my name is ${myName.toUpperCase()} and I am ${myAge} year old`)// new way of code reccomended

const anotherString = new String("deepak")// we add new before string, it will create a string object, and we can use string methods on it, but it is not recommended to use this way of creating string, because it can give unexpected result while doing comparison, because it will compare the reference of the object, not the value of the string, so it will give false even if the value of the string is same, so it is recommended to use string literal to create string, because it will create a primitive string, and it will compare the value of the string while doing comparison, so it will give true if the value of the string is same.

const yourName ='john'
console.log(anotherString.toUpperCase())//DEEPAK
console.log(yourName.toUpperCase())//JOHN

console.log(anotherString[0]) // d
console.log(yourName[0]) // j

console.log(anotherString.length) // 6
console.log(yourName.length) // 4

console.log(anotherString.includes("deep")) // true
console.log(yourName.includes("john")) // true

console.log(anotherString.indexOf("p")) // 2
console.log(yourName.indexOf("o")) // 1

console.log(anotherString.slice(0, 4)) // deep
console.log(yourName.slice(0, 4)) // john

console.log(anotherString.slice(2)) // epak
console.log(yourName.slice(3)) // n
console.log(yourName.slice(0, -4)) // "" because we are slicing from 0 to -4, and -4 is the length of the string, so it will slice the whole string and return empty string

console.log(anotherString.replace("deep", "john")) // johnak
console.log(yourName.replace("john", "deepak")) // deepak

console.log(anotherString.__proto__) // String.prototype
console.log(yourName.__proto__) // String.prototype

console.log(anotherString.charAt(0)) // d
console.log(yourName.charAt(0)) // j


console.log(anotherString.trim()) // deepak
console.log(yourName.trim()) // john

console.log(anotherString.split("e")) // [ 'd', 'epak' ]
console.log(yourName.split("o")) // [ 'j', 'hn' ]

console.log(anotherString.startsWith("d")) // true
console.log(yourName.startsWith("j")) // true

console.log(anotherString.endsWith("k")) // true
console.log(yourName.endsWith("n")) // true

console.log(anotherString.repeat(3)) // deepakdeepakdeepak
console.log(yourName.repeat(3)) // johnjohnjohn

console.log(anotherString.padStart(10, "*")) // ****deepak
console.log(yourName.padStart(10, "*")) // ******john

console.log(anotherString.padEnd(10, "*")) // deepak****
console.log(yourName.padEnd(10, "*")) // john******

console.log(anotherString.substring(2, 4)) // ep
console.log(yourName.substring(2, 3)) // o  
console.log(anotherString.substring(4, 0)) // deep
console.log(yourName.substring(3, 0)) // joh

