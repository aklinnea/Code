/*
//greeting
//alert ( 'Hello World' ); 

console.log('I like pizza');
console.log('With a lot of cheese');

//window.alert('PIZZA IS AWESOME');

// I don´t know if I have learned anything, actually

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = 'Linnea'; // strings
let age = 33; // numbers
let student = true; // booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Your are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

console.clear();

//from school 

console.log(document);

const section1Element = document.querySelector('section');
console.log(section1Element);

const headerElement = document.querySelector('header');
console.log(headerElement);

// querySelector med class* i HTML
const p2Element = document.querySelector('.p-2');
console.log(p2Element);

p2Element.textContent = 'This paragraph is the second paragraph';

// querySelector med ID #
const p1Element = document.querySelector('#p-1');
console.log(p1Element);


const headerElement = document.querySelector('header');
console.log(headerElement);

const h1Element = document.querySelector('h1');
h1Element.textContent = 'Let´s learn some JavaScript!';
h1Element.style = 'color: #ff0000';

const imgElement = document.querySelector('img');
console.log(imgElement);
imgElement.width = '300';

const p1Element = document.querySelector('.p-1');
console.log(p1Element);

const p2Element = document.querySelector('#p-2');
console.log(p2Element);

const footerElement = document.querySelector('footer');
console.log(footerElement);


const norskeKroner = prompt('Verdi i norske kroner');
const euro = 0.093
const dollar = 0.1
const action = prompt('Valuta: euro/dollar');
const resultElement = document.querySelector('#result');

if(action === 'dollar') {
    console.log(norskeKroner * dollar);
    resultElement.textContent = 'result: ' + (norskeKroner * dollar);
}

if(action === 'euro') {
    console.log(norskeKroner * euro);
    resultElement.textContent = 'result: ' + (norskeKroner * dollar);
}
*/

// from youtube
/*
    arithmetic expression is a combination of...
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;


let students = 20;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// let extraStudents = students % 3; 

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

console.log(students);


    operator precedence
    1. paranthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction


let result = 1 + 2 * (3 + 4);

console.group(result);
*/

// How to accept user input
// Easy way with a window prompt
// Difficult way with HTML textbox

// let username = window.prompt('What´s your name?');
// console.log(username);

document.getElementById('myButton').onclick = function() {

    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = "Hello " + username;

}

/*
// const = a varible that can´t be changed

const PI = 3.14159;
let radius;
let circumference;

//PI = 420,69; - const can´t be changed

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 *PI * radius;

console.log("The circumference is:", circumference);



// Math

let x;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);
// maximum = Math.max(x, y, z);
// minimum = Math.min(x, y, z);
x = Math.PI;

console.log(x);
*/

let a;
let b;
let c;
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c);
*/

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);
 
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

// Let´s make a counter

let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function() {
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}


