alert("Hello world");
console.log("Hellow World");
document.write("Hellow World");

//variables
let fullName= "Yummy";
let age= 18;
let isStudent= true;

//showing variables
console.log("Name=" , fullName);
console.log("age=" , age);
console.log("Is student=" , isStudent);

//basic math
let a=5
let b=10

//arthemetic operations
console.log("5+10=" , a+b);
console.log("10-5=" , b-a);
console.log("5*10=" , a*b);
console.log("10/5=" , b/a);
console.log("10%5=" , b%a);
console.log("10**5=" , b**a);

//using inner HTML to diplay value in <p> tag
document.getElementById("output").innerHTML =
"Name=" + fullName +                      
"Age=" + age +
"Student=" + isStudent;

//Button Function
function showMessage(){
    alert("button Clicked!")
};
