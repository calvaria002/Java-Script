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

// function loginUser(user) {
//   return ` The user ${user.name} with the tag number of ${user.tagnum} has been succesfully logged in`;
// }

// const user = {
//   name: "John",
//   tagnum: 230012,
//   age: 23,
// };

// console.log(loginUser(user));
/*
const social = ["Facebook", "Insta", "Gmail", "X"];

// socials.forEach(function (social) {
//   console.log(social);
// });

social.forEach((social, index, arr) => console.log(`${index} - ${social}`));
*/
/*
const students = [
  {
    name: "Mike",
    Gender: "Male",
    level: 300,
    Regnum: "CHM/11/133",
    Dept: "Chemical Engineering",
  },
  {
    name: "Mack",
    Gender: "Male",
    level: 100,
    Regnum: "CVE/14/323",
    Dept: "Civil Engineering",
  },
  {
    name: "Esther",
    Gender: "female",
    level: 200,
    Regnum: "MEC/12/111",
    Dept: "Mechanical Engineering",
  },
  {
    name: "Ego",
    Gender: "female",
    level: 300,
    Regnum: "MEC/15/223",
    Dept: "Mechanical Engineering",
  },
  {
    name: "Aza",
    Gender: "female",
    level: 400,
    Regnum: "MEC/13/453",
    Dept: "Mechanical Engineering",
  },
  {
    name: "Jack",
    Gender: "Male",
    level: 500,
    Regnum: "CPE/12/623",
    Dept: "Computer Engineering",
  },
  {
    name: "Ann",
    Gender: "female",
    level: 500,
    Regnum: "CHM/14/127",
    Dept: "Chemical Engineering",
  },
  {
    name: "Sarah",
    Gender: "female",
    level: 400,
    Regnum: "EEE/15/165",
    Dept: "Electronical Engineering",
  },
  {
    name: "Endo",
    Gender: "Male",
    level: 300,
    Regnum: "CVE/13/326",
    Dept: "Civil Engineering",
  },
  {
    name: "Saka",
    Gender: "Male",
    level: 100,
    Regnum: "PTE/09/864",
    Dept: "Petroluem Engineering",
  },
  {
    name: "Moses",
    Gender: "Male",
    level: 100,
    Regnum: "PET/09/864",
    Dept: "Petroluem Engineering",
  },
  {
    name: "Glory",
    Gender: "female",
    level: 400,
    Regnum: "CVE/12/058",
    Dept: "Civil Engineering",
  },
  {
    name: "Mary",
    Gender: "female",
    level: 400,
    Regnum: "CPE/13/048",
    Dept: "Computer Engineering",
  },
  {
    name: "Gift",
    Gender: "female",
    level: 500,
    Regnum: "CHM/14/190",
    Dept: "Chemical Engineering",
  },
  {
    name: "Abah",
    Gender: "Male",
    level: 200,
    Regnum: "CPE/17/099",
    Dept: "Computer Engineering",
  },
  {
    name: "Great",
    Gender: "Male",
    level: 200,
    Regnum: "EEE/11/223",
    Dept: "Electrical Engineering",
  },
];
*/
// const femaleGender = students.filter((student) => student.Gender === "female");
// console.log(femaleGender);

// const femaleGender = students.filter(function(student){
//   return student.Gender === "female";
// });
// console.log(femaleGender);

// let g = [];

// students.forEach((student) => {
//   if (student.Gender === "female") {
//     g.push(student);
//   }
// });

// console.log(g);

// const male200 = students.filter(
//   (item) => item.Gender === "Male" && item.level === 200
// );
// console.log(male200);

// let s = [];

// students.forEach((student) => {
//   if (student.Gender === "Male" && student.Regnum.includes("EEE")) {
//     s.push(student);
//   }
// });

// console.log(s);

// const dept = students.filter(
//   (student) => student.Regnum.includes("EEE") || student.Regnum.includes("CPE")
// );
// console.log(dept);


// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "John@gmail.com",
//     phone: "111-111-111",
//     age: 30,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Poe",
//     email: "Jane@gmail.com",
//     phone: "222-222-222",
//     age: 25,
//   },
//   {
//     firstName: "Job",
//     lastName: "Foe",
//     email: "Job@gmail.com",
//     phone: "333-333-333",
//     age: 45,
//   },
//   {
//     firstName: "Sara",
//     lastName: "Soe",
//     email: "sara@gmail.com",
//     phone: "444-444-444",
//     age: 19,
//   },
//   {
//     firstName: "Jese",
//     lastName: "Joe",
//     email: "Jese@gmail.com",
//     phone: "555-555-555",
//     age: 23,
//   },
// ];

// // const youngPeople = people
// // .filter((person) =>  person.firstName && person.lastName && person.age <= 25)
// // .map((person) =>{
// //   return {
// //     name: person.firstName + " " + person.lastName,
// //     email: person.email,
// //     age: person.age
// //   };
  
// // });
// // console.log(youngPeople);

// let youngPeople = [];

// const genZ = people.forEach((person) => {
//   if ( person.firstName && person.lastName && person.age <= 25) {
//     youngPeople.push(person)
//   }
// });
// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -19, 7];

// const positiveNum = numbers
// .filter((number) => number >= 0)
// .reduce((pre, cur) => pre + cur, 0);

// console.log(positiveNum);

// const words = ["coder", "programmer", "developer"];

// const cWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1);
// })

// console.log(cWords);