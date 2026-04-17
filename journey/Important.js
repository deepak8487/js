// use clean code, avoid using not recommended code, and follow best practices to write clean and maintainable code. Always check documentation of mdn and tc39 spec for more details about JavaScript features and best practices.
// Documentation: mdn and tc39 spec

// To run code use node js, you can run this command in terminal: node journey/Important.js

// To find out data type of variable, you can use typeof operator

// "use strict" is a directive that enables strict mode in JavaScript, which helps catch common coding mistakes and unsafe actions. It is recommended to use strict mode in your code to improve its quality and maintainability.

// For module , module give remainder

console.log(10 % 3) // 1
console.log(10 % 2) // 0

let gameCounter = 100

gameCounter++ // 101
console.log(gameCounter) // 101

gameCounter-- // 100
console.log(gameCounter) // 100

//*************************************** */ Notes of javaScript**************************************************************************************************

// for Display 
console.log("Hello World") // for log

//  for table
console.table(["Hello", "World", 2024])

// Documentation: mdn and tc39 spec
// For more details about data types, you can check mdn documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values



// To run code use node js, you can run this command in terminal: node journey/Important.js

// To find out data type of variable, you can use typeof operator

// "use strict" is a directive that enables strict mode in JavaScript, which helps catch common coding mistakes and unsafe actions. It is recommended to use strict mode in your code to improve its quality and maintainability.


// JavaScript has dynamic typing, which means that variables can hold values of any data type and can change their type at runtime. The main data types in JavaScript are:

// Data types in javaScript can be categorized by memory allocation ,storage access and mutability

// Data types in javaScript can be categorized into two main types: primitive and non-primitive (or reference) types.

// Primitive data types include:
// String, Number, Boolean, Undefined, Null, Symbol, BigInt

// Non-primitive (or reference) data types include: 
// Object, Array, Function

// primitive data types are immutable, which means that their values cannot be changed after they are created. When you assign a primitive value to a variable, you are actually creating a new value in memory. If you change the value of the variable, it will not affect the original value.

// non primitive data types are mutable, which means that their values can be changed after they are created. When you assign a non-primitive value to a variable, you are actually creating a reference to the value in memory. If you change the value of the variable, it will affect the original value because both variables are referencing the same value in memory.

// return type of operator typeof of primitive data type will be the name of the data type, but for non-primitive data type it will return "object" for array and object, and "function" for function.



// MEMOry Stack and Heap 
// In JavaScript, memory is managed in two main areas: the stack and the heap.
// Stack is used for storing primitive data types and function calls, while the heap is used for storing objects and arrays. When a variable is declared, it is allocated memory on the stack if it holds a primitive value, or on the heap if it holds a reference to an object or array. The stack is faster to access than the heap, but it has limited size, while the heap can grow dynamically as needed. Understanding how memory works in JavaScript can help you write more efficient code and avoid memory leaks.
// When a variable is assigned a primitive value, it is stored directly in the stack memory. When a variable is assigned a reference value (like an object or array), it is stored in the heap memory, and the variable holds a reference (or pointer) to that location in the heap. This means that when you assign one variable to another, if they are primitive types, they will hold their own copies of the value. However, if they are reference types, they will both point to the same location in the heap, and changes made through one variable will affect the other variable as well.
// For more details about memory management in JavaScript, you can check mdn documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
