/*
// Methods are functions they use parenthesis
// Properties does not use parenthesis 
// Properties are more like attributes



console.log(100);

console.log("Hello World");

console.log(20, "hello", true);

let x = 100;

console.log(x);

console.error("Alert");
console.warn("Warning");
console.table({ name: "Emma", email: "emma@gmail.com" });

console.group("simple");
console.log(x);
console.error("alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: red; color:green";

console.log("%cHello Word", styles);
*/

//......................................... VARIABLES

/*
let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

let age = "30";

console.log(age);
*/

// Naming Conventions
// -Only letters, numbers, underscores and dollar signs
// -cant start with a number

/*
// Re-asigning Variables
age = 31; // age re-assigned

console.log(age);

let score; // declare and not assign

score = 1; // assign later

if (true) {
  score = score + 1;
}

console.log(score);

// All this work oly with let not with const
// const cant be re-assigned
// with const you cant declare a variable without assigning a value to it

//.................................. DECLARE MULTIPLE VALUES AT ONCE

let a, b, c;
const d = 2,
  e = 5,
  r = 20;

console.log(e);
console.log(a);

*/

//................................ PRIMITIVE DATA TYPES

// - String - Sequence of characters. Must be in quotes or backticks
// - Number - Integers as well as floating-point numbers
// - Boolean - Logical entity / true or false
// - Null - Intentional absence of any object value
// - Undefined - A variable that has not yet been defined/assigned
// - Symbol - Built-in object whose constructor returns a unique symbol
// - BigInt - Numbers that are greater than the "number" type can handle

//STRING
// const firstName = "Emmanuel";
// const lastName = "Calvary";

// Number
// const number = 29;

// Boolean
// const hasKids = false;

// const output = hasKids;

// console.log(output, typeof output);
// NULL
// const aptNum = null;

// const output = null;

// console.log(output, typeof output);

// Undefined
// let score;
// const score = undefined;

// const output = score;

// console.log(output, typeof output);

// Symbol

// const id = Symbol("id");

// const output = id;
// console.log(output, typeof output);

// BigInt
// const n = 3883689298469n;

// const output = n;

// console.log(output, typeof output);

//................................... Primitive vs Reference Types

// - Primitive Types - Stored in the "stack", where it is accessed from
// String| Numbers| Boolean| Null| Undefinedd| Symbol| BigInt

// - Reference Types - Stored in the heap and accessed by referrence
// Arrays| Functions| Objects

/*
// For Primitive types value are stored on the stack

const name = "john";
const age = 30;

// Reference values are stored on the heap
const person = {
  name: "brad",
  age: 40,
};

let newName = name;
newName = "david";

let newPerson = person;
newPerson.name = "james";

console.log(name, newName);
console.log(person, newPerson);
*/

//....................................... TYPE CONVERSION

// convert from string to number

// let amount = "99";
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// convert number to string

//  let amount = 99;
//  amount = amount.toString();
// amount = String(amount);

//  console.log(amount, typeof amount);

// Convert String to decimal

//  let amount = "99.8";
//  amount = parseFloat(amount);

//  console.log(amount, typeof amount);

// Convert Number to Boolean

//  let amount = "1";
//  amount = Boolean(amount);

//  console.log(amount, typeof amount);

//........................................OPERATORS

/*
// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 2;
x = 5 * 2;
x = 5 / 2;
x = 5 % 3;

// Cancatenation

x = "Hello" + " " + "world";

// Exponent

x = 2 ** 5;

// Increment
x = 2;
x = x + 1;
x++;

// Decrement
x = 2;
x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x /= 5;
x *= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// x = 2 == 2;     Evalutes the number

// x = 2 === "2";  Evaluates the type

// x = 2 != 2;   Not equals to (number)

// x = 2 !== 2;  Not equals to (type)

x = 10 > 5;
x = 10 < 5;
x = 10 >= 5;
x = 10 >= 5;

console.log(x);
*/

// .............................................Type Coercion
/*
let x;

x = 5 + "5";

x = 5 + Number(5);

x = 5 * "5";  multiplication converts the string into a Number

x = 5 + null; null will be taken as a number(0)

x = Number(null);

x = Number(true); true will be taken as a number(1)
x = Number(false); false will be taken as a number(0)

x = 5 + true;

x = 5 + false;

x = 5 + undefined;

console.log(x, typeof x)
*/

// ....................................... WORKING WITH STRINGS
/*
let x;

const name = "John";
const age = "32";

x = "Hello my name is " + name + " and i am " + age + " years old";

console.log(x);

// Template Literals

x = `Hello my name is ${name} and i am ${age} years old`;

console.log(x);

//  Sting Properties and Methods

const s = "Hello World";

// Access value by key
// x = s.length;

 x = s[10];

 x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

// x = s.substring(0, 5);

// x = s.substring(7);

// // x = s.slice(-11, -6) with slice you can start from the end with -

// x = "      Hello World";

// // x = x.trim(); gets rid of wide space

// x = s.replace("World", "Calvary"); to replace texts

// x = s.includes(Hell); checks if words or letters are included

// x = s.valueOf(); to get the primitive value

// x = s.split(""); Makes a striing into an array  


console.log(x);
*/

/*
.............................Exercise

const myString = "calvary";

let y;

// y = myString.charAt(0).toUpperCase();
// y = y + myString.substring(1);
// console.log(y);

// y = myString.charAt(0).toUpperCase() + myString.substring(1);
// y = myString[0].toUpperCase() + myString.substring(1);
// y = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(y);

*/

// ................................Working With Numbers
/*
let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.toLocaleString("en-US");

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
*/

// ........................................The Math Objects
/*  
let x;

x = Math.sqrt(9);

x = Math.abs(-5);

x = Math.round(4.2);

x = Math.ceil(4.2);

x = Math.floor(4.9);

x = Math.pow(2, 3);

x = Math.min();
x = Math.max();

x = Math.random();
x = Math.floor(Math.random() * 10 + 1);

console.log(x);

*/

// ..................................... EXERCISES
/*
const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// console.log(x);
// console.log(y);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;

console.log(sumOutput);

const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;

console.log(differenceOutput);

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;

console.log(differenceOutput);

const quotien = x / y;
const quotienOutput = `${x} - ${y} = ${quotien}`;

console.log(quotienOutput);

const rw = x % y;
const rwOutput = `${x} % ${y} = ${rw}`;

console.log(rwOutput);
*/

// ........................................... Date Object Methods

let x;
let d = new Date();

// Get Time Stamp
x = d.toString();
x = d.valueOf();

// Get
x = d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay()}`;

x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
x = d.toLocaleString("default", { month: "short" });

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  minutes: "numeric",
  second: "numeric",
  timeZone: "Nigeria",
});

console.log(x);
