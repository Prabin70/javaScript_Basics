//rest operator
// Spread operator

// let { name, country, ...rest } = {
//   rest operator always placed at last.
//   name: "Prabin",
//   age: 23,
//   location: "Kathmandu",
//   country: "Nepal",
// };

// console.log(rest);

// let data = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// };
// data(1, 2, 4, 5, 6, 7);

//output 1 will be placed in  a variable and rest will be placed in "b"

// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//Spread operator is the wrapper opener
// let list = [1, 2, 3, 4, 5];
// let list2 = ["ram", "Krishna", "hari"];
// let output = [1, 2, 3, ...list, "ant", "Kumar", ...list2, "Harry"];
//  console.log(output);
// let info = {
//   name: "Prabin",
//   age: 23,
//   location: "Ktm",
// };

// let info2 = { ...info, country: "nepal", isMarried: true };
// console.log(info2);

// function sum(a, ...b) {
//   console.log(a);
//   console.log(b);
// }
// sum(1, 2, 3, 45, 6, 7, 8);

// let name = [
//   { name: "Phone", Price: 23000 },
//   { name: "camera", Price: 15000 },
//   { name: "battery", Price: 5000 },
// ];
// // 23000, 15000, 5000
// // 43000
// let output = name.map((value, index) => {
//   return value.Price * 1;
// });
// console.log(output);
// let nextOutput = output.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);
// console.log(nextOutput);

// let name = [
//   { name: "mobile", price: 200 },
//   { name: "T-shirt", price: 2 },
//   { name: "couse", price: 5000 },
//   { name: "russian", price: 6000 },
//   { name: "mundrey", price: 5 },
// ];
// 200,2,5000,6000,5
//total value of items

// let output = name.map((value, index) => {
//   return value.price;
// });
// console.log(output);

// let total = output.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);
// console.log(total);
