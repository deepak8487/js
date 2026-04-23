const score = 400
 console.log(score);

const balance = new Number(100)
 console.log(balance);

 console.log(balance.toString().length);
 console.log(balance.toFixed(1));

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math);
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
