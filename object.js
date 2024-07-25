//Object

//Array : Array is a collection of values whereas a collection of a key value pairs. Key values are  called properties.

//get  value
// let name = {
//   name: "ram",
//   location: "ktm",
//   age: 20,
//   adddress: "kapan",
// };
// console.log(name.age);
// name.name = "Hari";
// //change value

// //delete value

// delete name.location;

// let info = {
//   name: "ram",
//   favFruits: ["Orange", "Apple", "Banana"],
//   location: {
//     city: "Kathmandu",
//     province: "bagmati",
//     country: "Nepal",
//   },
//   age: () => {
//     console.log("I am a function");
//   },
// };

// info.age();
// console.log(info);
// console.log(info.name);
// console.log(info.favFruits[2], console.log(info.location.country));

// let products = [
//   { name: "mobile", price: 15000 },
//   { name: "battery", price: 5000 },
//   { name: "radio", price: 3000 },
// ];
// let output = products
//   .map((value, index) => {
//     return value.price * 1;
//   })
//   .reduce((prev, curr) => {
//     return prev + curr;
//   }, 0);
// console.log(output);
// console.log(output);
// let result = output.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);
// console.log(result);

// let name = ["Ram", "Prabin", "Anish", "AaryanDaka", "AlishVeda"];
// let result = name.sort((x, y) => {
//   return x.length - y.length;
// });
// console.log(result);
//output = [ 'AaryanDaka', 'AlishVeda', 'Anish', 'Prabin', 'Ram' ]
//output2 = [ 'Ram', 'Anish', 'Prabin', 'AlishVeda', 'AaryanDaka' ]according to length of string

// let data = {
//   name: "prabin",
//   age: 45,
//   location: "ktm",
// };
// let output = Object.keys(data);
// console.log(output);
//[ 'name', 'age', 'location' ]

// let output = Object.values(data);
// console.log(output);

// let output = Object.entries(data);
// console.log(output);
// [ [ 'name', 'prabin' ], [ 'age', 45 ], [ 'location', 'ktm' ] ] == array of array

// let data = [
//   ["name", "prabin"],
//   ["age", 45],
//   ["location", "ktm"],
// ];
// let result = Object.fromEntries(data);
// console.log(result);

// let info = [
//   ["name", "Prabin"],
//   ["age", 12],
//   ["location", "kapan"],
// ];
// let result = Object.fromEntries(info);
// console.log(result);

// let start = [
//   ["name", "prabin"],
//   ["age", 36],
//   ["favFoods", ["meat", "orange", "sausage"]],
// ];
// let output = Object.fromEntries(start);
// console.log(output);

// condition ? true : false;

let age1 = 20;
if (age1 > 18) {
  console.log("allowed");
} else {
  console.log("not allowed");
}

let name = "ramesh";
let output = name.length > 4 ? "correct" : "not valid";
console.log(output);
