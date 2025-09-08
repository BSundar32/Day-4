//Funnction Types

//1. Normal Function

function add(a,b){
    return a+b;
}

console.log(add(3,4));

//2. Anonymous Function || function expression

const sub = function (a,b){
    return a+b;
}

console.log(sub(4,5))

const sub1 = sub;

console.log(sub1(5,6));

//3. Arrow Function

const mult = (a,b) => {
    return a*b;
}

console.log(mult(4,5));

//4. Implicit Return

const square = a => a*a;

console.log(square(5));

//5. IIFE - Immediately Invoked Function Expression

(function(a,b){
    console.log(a+b);
})(4,5);