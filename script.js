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

// ............................................DATE AND TIME
/*
let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10);
// d = new Date(2021, 0, 10, 19, 20, 51); --- Time added

d = new Date("2021-07-10");
// d = new Date("2021-07-10T12:30:00"); ---- Timme added

// d = new Date("07/10/2021 12:30:00"); --------- Same format

// d = new Date("2021-07-10"); --- Puting the year first might put your date a day behind;

// d = new Date("07-10-2022"); ---- Puts in the good way

// TIME STAMP

// d = Date.now(); Get TimeStamp down to millisecond

// d = new Date("07-10-2020");
// d = d.getTime(); get time stamp of the date
// d = d.valueOf(); get time stamp of the date

// d = new Date(1594364400000); get date and time from Time Stamp
// d = Math.floor(Date.now() / 1000);  get date and time from Time Stamp without milliSecond

console.log(d);
*/

// ........................................... Date Object Methods
/*

 let x;
let d = new Date();

// Get Time Stamp
x = d.toString();
x = d.valueOf();

// Get
x = d.getFullYear();
x = d.getMonth(); it is zero based +1 to get the exact month
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
  timeZone: "America/Ney_york",
});

console.log(x);
*/

// -----------------------------------------ARRAYS AND OBJECTS
// - Arrays are a special type of object
// - They can store multiple variables
// - Values inside an array are surrounded in brackets and are called elements
// - Elements can be any data types they can even be arrays within arrays
// - Arrays ar 0 based

//  Array Literals
/*
const numbers = [12, 15, 60, 24, 78];

console.log(numbers);

//  Array Litterals

const fruits = new Array("Apple", "Mango", "Banana", "Orange");

console.log(fruits);

let x;

x = numbers[0];

x = numbers[1] + numbers[3];

x = `My best fruits are ${fruits[0]} and ${fruits[2]} `;

x = numbers.length;

fruits[2] = "Peach";

// fruits.length = 2;  deciding specific lenght

fruits[fruits.length] = "blueberry"; add an extra fruit
fruits[fruits.length] = "Pear";

console.log(fruits);
*/

// ...........................................ARRAY METHODS
/*
let x;

const arr = [38, 48, 85, 84, 45];

// arr.push(100); add to the end

// arr.pop(); remove from the end

// arr.unshift(99); add at the begining

// arr.shift(); remove at the start

// arr.reverse(); reverse it

x = arr.includes(200); check if a data is in the array

x = arr.indexOf(48); check the index of a data

x = arr.slice(1, 4); select 1 - 3 data on the array , does not affect the array

// x = arr.splice(1, 4); plug out 1-4 (it affects the array)

// x = arr.splice(3, 1); plug out only index 3 on the array

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
*/

// -------------------------------------------- Nesting, Concat and Spread

// -------------------------------------------- Nesting
/*
let x;

const fruit = ["Apple", "Grape", "Orange"];
const berries = ["Strawberries", "Blueberries", "Rasberry"];

// fruit.push(berries);

// x = fruit[3][1];

const allFruits = [fruit, berries];

x = allFruits[1][0];

// --------------------------------------CONCAT

x = fruit.concat(berries);

// ------------------------------------------SPREAD
let y;

y = [...fruit, ...berries];

// console.log(x, y);

const arr = [2, 3, [4, 5], 6, 7, [8, 9], 10, 11];
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(berries);

x = Array.from("84798320");

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
*/

// ------------------------------------------EXERCISE

// const arr = [1, 2, 3, 4, 5];

// arr.push(6);

// arr.unshift(0);

// arr.reverse();

// console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// arr2.shift(0);

// const arr3 = arr1.concat(arr2);

// console.log(arr3);

// --------------------------------------------Object Literal
/*
let x;

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "25 lagos road",
    city: "Boston",
    state: "Lagos",
  },
  hobbies: ["football", "work-out"],
};

// x = person.name;
// x = person["age"];
// x = person.isAdmin;
// x = person.address.city;
// x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;
person["name"] = "John Doe";

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet();

const person2 = {
  "first name": "Brad",
  "Last name": "Pitt",
};

x = person2["First name"];

console.log(x);
*/

// ------------------------------------------Objects Spread Operator & Methods
/*
let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    cords: {
      lat: 86.9868,
      lng: -34.5674,
    },
  },
};

x = person.address.cords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).lenght;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty("age");

console.log(x);
*/
/*
// ---------------------------------------------DEStructuring & Naming
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure arrays

const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
*/

// -------------------------------------------JSON
/*
const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON String
const str = JSON.stringify(post);

console.log(str);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
*/

// --------------------------------------------EXERCISES
/*

let x;

const Library = [
  {
    title: "Law School",
    author: "Mr Don",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Law School",
    author: "Mr Don",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Law School",
    author: "Mr Don",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

Library[0].status.read = true;

const { title: firstBook} = Library[0];

console.log(firstBook);

const libraryJSON = JSON.stringify(Library);

console.log(libraryJSON);

*/

// --------------------------------------------Functions, Scope & Execution Context
/*
function sayHello() {
  console.log("Hello World");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 23);

function subtract(num1, num2) {
  return num1 - num2;

  // console.log("After the return");
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
*/

// -----------------------------------------Params & Arguments

// Default Params
/*
function registerUser(user = "Bot") {
  // if (!user) {
        // user = "bot";  
    // }
    return user + " is registered ";
}

console.log(registerUser());

// Rest Params 
  function sum(...numbers) {
    let total = 0;

    for (const num of numbers){
      total += num;
    }

    return total;
  }

  console.log( sum(1, 2, 3, 4, 5));

  // Objects as Params
  function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in `;
  }

  const user = {
    name: "John",
    id:   1,
  };

  console.log(loginUser(user));
  console.log(loginUser({
    id: 2,
    name: "Sara",
  })
);

// Arrays as params
function getRandom(arr){
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/

// ----------------------------------------------Global & Function Scope
/*
const x = 100;

console.log(x, "in global");

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();

if (true) {
  console.log(x, "in block");
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();
*/

// --------------------------------------------Block Scope

// --------------------------------------------Nested Scope
/*
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

if (true) {
  const x = 150;

  if (x === 150) {
    const y = 250;
    console.log(x + y);
  }
}
*/

// ----------------------------------------------Function Declaration vs Expression

// Function Declaration
/*
function addDollarSign(value) {
  return "$" + value;
}

console.log(addDollarSign(200));

// Function Expression

const addSumSign = function (value) {
  return "+" + value;
};

console.log(addSumSign(200));
*/
// -------------------------------------------Arrow Functions
/*
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax

const add = (a, b) => {
  return a + b;
};

// Implicit Return

const substract = (a, b) => a - b;

// Can leave off () with a single param

const sum = (a) => a + 20;

// Returning an object

const createObj = () => ({
  name: "Brad",
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a cellback
numbers.forEach((n) => console.log(n));

console.log(createObj());

console.log(sum(5));
*/

// --------------------------------------------------------IIFE (Immediately Invoked Function Expressions)
/*
(function () {
  const user = "John";
  console.log(user);
  const hello = () => console.log("hello from the IFFE");
  hello();
})();

(function (name) {
  console.log("hello" + " " + name);
})("shawn");

(function hello() {
  console.log("Hello");
})();
*/

// --------------------------------------------------Exercise
// 4:44
function getCelsius(f) {
  const celsius = ((f - 32) * 5) / 9;
  return celsius;
}

getCelsius(50);

// console.log(getCelsius(53));

// const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(getCelsius(53));
