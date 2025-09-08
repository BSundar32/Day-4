//Scoping

//Global Scope
var a = "Hello World";
function greet() {
     a="world";
    console.log(a); // Accessible   
}
greet();
console.log(a); // Accessible

//block scope
{
    let b = "Hello World";  
    const c = "Hello World";
    var d = "Hello World"; // Not Accessible
    console.log(b);
    console.log(c);
    console.log(d);
}
// console.log(b); // Not Accessible
// console.log(c); // Not Accessible
console.log(d); // Accessible

//hoisting
console.log(x); 
var x = 5;
console.log(x);

console.log(y);
let y = 10;
console.log(y);