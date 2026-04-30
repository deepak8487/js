const score = 400
 console.log(score);// 400 because it will return the value of the variable score

 console.log(typeof score);// number because it will return the data type of the variable score

 console.log(score.toString());// "400" because it will convert the number to string and then it will return the string

 console.log(score.toFixed(2));// "400.00" because it will convert the number to string and then it will return the string with 2 decimal places

 console.log(score.toPrecision(3));// "400" because it will convert the number to string and then it will return the string with 3 significant digits

 console.log(score.toLocaleString('en-IN')); // "400" because it will convert the number to string and then it will return the string with commas as thousand separators according to the Indian numbering system   


const balance = new Number(100)
 console.log(balance);// [Number: 100] because it will return the value of the variable balance as a Number object

 console.log(typeof balance);// object because it will return the data type of the variable balance as a Number object

 console.log(balance.toString());// "100" because it will convert the Number object to string and then it will return the string

 console.log(balance.toFixed(2));// "100.00" because it will convert the Number object to string and then it will return the string with 2 decimal places

 console.log(balance.toPrecision(3));// "100" because it will convert the Number object to string and then it will return the string with 3 significant digits

 console.log(balance.toLocaleString('en-IN')); // "100" because it will convert the Number object to string and then it will return the string with commas as thousand separators according to the Indian numbering system  

 console.log(balance.toString().length);// 3 because it will convert the number to string and then it will return the length of the string

 console.log(balance.toFixed(1));// 100.0 because it will convert the number to string and then it will return the string with 1 decimal place

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));// 123.9 because it will convert the number to string and then it will return the string with 4 significant digits

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 because it will convert the number to string and then it will return the string with commas as thousand separators according to the Indian numbering system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math); // Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object, so it cannot be called as a function.
 console.log(Math.abs(-4));// 4 because it will return the absolute value of the number
    console.log(Math.ceil(4.2));// 5 because it will return the smallest integer greater than or equal to the number
    console.log(Math.floor(4.7));// 4 because it will return the largest integer less than or equal to the number
    console.log(Math.round(4.5));// 5 because it will return the value of the number rounded to the nearest integer
    console.log(Math.round(4.4));// 4 because it will return the value of the number rounded to the nearest integer
    console.log(Math.max(1, 2, 3, 4, 5));// 5 because it will return the largest of the given numbers
    console.log(Math.min(1, 2, 3, 4, 5));// 1 because it will return the smallest of the given numbers
    console.log(Math.pow(2, 3));// 8 because it will return the value of the first number raised to the power of the second number
    console.log(Math.sqrt(16));// 4 because it will return the square root of the number
    console.log(Math.random());// a random number between 0 and 1 because it will return a random floating-point number between 0 (inclusive) and 1 (exclusive)
    console.log(Math.round(Math.random() * 100));// a random integer between 0 and 100 because it will return a random floating-point number between 0 (inclusive) and 1 (exclusive), then it will multiply it by 100 to get a number between 0 and 100, and then it will round it to the nearest integer

    //  ++++++++++++++++++++++ Number and Math methods +++++++++++++++++++++++++++++

    const num = 123.456789
    console.log(num.toFixed(2));
    console.log(num.toPrecision(4));
    console.log(num.toString());
    console.log(num.toLocaleString('en-IN'));  
    const num2 = 123.456789
    console.log(num2.toExponential(2));
    // ++++++++++++++++++++++ Number and Math properties +++++++++++++++++++++++++++++

    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.NaN);

    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.LN2);
    console.log(Math.LN10);
    console.log(Math.LOG2E);
    console.log(Math.LOG10E);
    // ++++++++++++++++++++++ Number and Math constants +++++++++++++++++++++++++++++
    
    console.log(Number.EPSILON);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);   
    // ++++++++++++++++++++++ Number and Math static methods +++++++++++++++++++++++++++++
    
    console.log(Number.isFinite(123));  
    console.log(Number.isFinite(Infinity));
    console.log(Number.isFinite(NaN));
    console.log(Number.isInteger(123));
    console.log(Number.isInteger(123.456));
    console.log(Number.isNaN(NaN));
    console.log(Number.isNaN(123));
    console.log(Number.parseFloat('123.456'));
    console.log(Number.parseInt('123.456'));

    // ++++++++++++++++++++++ Math static methods +++++++++++++++++++++++++++++
    
    console.log(Math.abs(-4));  
    console.log(Math.ceil(4.2));
    console.log(Math.floor(4.7));
    console.log(Math.round(4.5));
    console.log(Math.round(4.4));
    console.log(Math.max(1, 2, 3, 4, 5));
    console.log(Math.min(1, 2, 3, 4, 5));
    console.log(Math.pow(2, 3));
    console.log(Math.sqrt(16));
    console.log(Math.random());
    console.log(Math.round(Math.random() * 100));   
    // ++++++++++++++++++++++ Math properties +++++++++++++++++++++++++++++
    
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.LN2);
    console.log(Math.LN10);
    console.log(Math.LOG2E);
    console.log(Math.LOG10E);          
// ++++++++++++++++++++++ Math constants +++++++++++++++++++++++++++++

    console.log(Math.SQRT1_2);
    console.log(Math.SQRT2);        
    // ++++++++++++++++++++++ Math static methods +++++++++++++++++++++++++++++
    
    console.log(Math.cbrt(27));
    console.log(Math.clz32(1));
    console.log(Math.cosh(1));
    console.log(Math.expm1(1));
    console.log(Math.fround(1.5));
    console.log(Math.hypot(3, 4));
    console.log(Math.imul(2, 3));
    console.log(Math.log10(100));
    console.log(Math.log2(8));
    console.log(Math.sign(-5));
    console.log(Math.sinh(1));
    console.log(Math.tanh(1));
    console.log(Math.trunc(4.9));
    