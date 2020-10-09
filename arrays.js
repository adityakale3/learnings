// let myArray = [
//   "Manchester",
//   "London",
//   "Liverpool",
//   "Birmingham",
//   "Leeds",
//   "Carlisle",
// ];

// let newLength = myArray.push("Bristol");
// // Returns Length
// console.log(myArray);
// console.log(newLength);

// let newLength = myArray.unshift("Bristol", "Nagpur");
// // Returns Length
// console.log(myArray);
// console.log(newLength);

// let removedItem = myArray.pop();
// // returns removed item
// console.log(myArray);
// console.log(removedItem);

// let removedItem = myArray.shift();
// // returns removed item
// console.log(myArray);
// console.log(removedItem);

let total = 0;
let productList;
let productPrice;
// number 1
let products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

// for (let i = 0; i < products.length; i++) {
//   console.log(i);
//   // number 2
//   // number 3
//   let data = products[i].split(":");
//   productList = data[0];
//   productPrice = Number(data[1]);
//   // number 4
//   total += productPrice;
//   // number 5
//   let itemText = `${productList} - $${productPrice}`;
//   console.log(itemText, total);
// }

// products.forEach(function (item, index, array) {
//   console.log(item, index);
// });

// Find Index of
console.log("Index of Shoes", products.indexOf("Shoes:23.99"));

// Splice by Index
products.splice();
console.log(products);

// Slice
let shallowCopy = products.slice();

// Every
var ages = [32, 33, 18, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  console.log(ages.every(checkAdult));
}
myFunction();

// splice test
let newArr = ["i20", "wego", "hudibaba", "vespa", "Eco-sports"];
newArr.splice(2, 1, "Shine", "Creata", "Swift");
console.log("Result:::::::", newArr);

console.log("+++++++++++++++++++++++++++++++++++++++++");
let arrNumbMax = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

console.log(arrNumbMax.max());

console.log(Math.max(null, arrNumbMax));

console.log("Aditya");
