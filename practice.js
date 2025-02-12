/*
let firstName = "John";
let lastName = "Doe";
let age = 32;

console.log(firstName, lastName);

age = 23;

console.log(age);

let x;

x = `My name is ${firstName} ${lastName} and i am ${age} years old`;

console.log(x);

let score = 2;

if (score > 0) {
  score = score + 1;
}

console.log(score);

const person = {
  name: "John",
  age: 30,
};

let newName = name;
newName = "David";

let newPerson = person;
newPerson.name = "james";
console.log(name, newName);
console.log(person, newPerson);

let amount = "99";
// amount = parseInt(amount);
amount = +amount;
console.log(amount, typeof amount);

x = 10 > 5;
console.log(x);

x = 5 + "5";
// x = 5 + Number(5);
x = 5 + parseInt(5);

console.log(x);

const t = "Hello World";

x = t.charAt(0).toLowerCase();
x = t.substring(0, 4);
x = t.substring(6);
x = t.replace("World", "Calvary");

x = Math.floor(Math.random() * 10 + 1);

console.log(x);

let d;

d = Date();

console.log(d);

const arr = [1, 2, 3, 4, 5, 6];

const year = new Array(1999, 2342, 5454);

x = arr.length;

console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

x = Array.isArray(year);
x = Array.from("84798320");
console.log(x);

const client = {
  fName: "John",
  lName: "Doe",
  age: 30,
  address: {
    street: "25 lagos road",
    city: "Boston",
    state: "Lagos",
  },
  hobbies: ["football", "work-out"],
};

x = client.fName;
x = client["age"];

client.fName = "James";
client.ofAge = true;

console.log(client.fName);
console.log(client);

function add(num1, num2) {
  return num1 * num2;
}

const result = add(2, 5);

console.log(result, add(10, 2));

function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));
*/

function loginUser(user) {
  return ` The user ${user.name} with the tag number of ${user.tagnum} has been succesfully logged in`;
}

const user = {
  name: "John",
  tagnum: 230012,
  age: 23,
};

console.log(loginUser(user));
