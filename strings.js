// Define Strings
let aNewString = "Hi How u doin ?"; // Typeof = Strings

let anotherString = new String("I am Another String"); // Typeof = Object

// Character
console.log(aNewString.charAt(0)); // Returns Character at Index passed

// Includes
console.log(aNewString.includes("h")); // Case Sensative, returns boolean
console.log(aNewString.includes("w", 6)); // Accepts search word and index to search from

// IndexOf() || lastIndexOf()
let str =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
let str2 = "I learned to play the Ukulele in Lebanon.";

console.log(str.indexOf("dog")); // Returns Index or -1

// Try, get index of all recurring search term

let thingToSearch = "le"; // Niddle
let pos = 0; // Position Ref
let result = []; // Final output of all indexs to be saved in.
let strToLower = str2.toLowerCase();

// Check for condition
while (strToLower.indexOf(thingToSearch, pos) != -1) {
  result.push(strToLower.indexOf(thingToSearch, pos));
  pos = strToLower.indexOf(thingToSearch, pos) + 1;
}

console.log("Final ", result);

//
// padEnd() // padStart()
//
let str3 = "Hi How u doin, friend character Joey";

// console.log(str3.padEnd(100, ".")); // If string doesnt match the count/length passed, it fills with char passed, as second arg
// console.log(str3.padEnd(5));

console.log("2".padStart(2, "0")); // adds zero before the string
console.log("12".padStart(2, "0")); // doesnt work as condition of 2 meet

//
// Replace() || ReplaceAll()
//
console.log(str.replace("dog", "cat"));
//console.log(str.replaceAll("dog", "cat");   // Not working for all browsers instead use : /dog/g with replace
console.log(str.replace(/dog/g, "cat"));

//
// slice()
//
console.log(str.slice(10)); // Returns Everything after the index
console.log(str.slice(-10)); // Returns Everything before the index
console.log(str.slice(10, -3)); // Returns Everything in between the index, skipping 1st

//
//  Split()
//
console.log(str.split(" ")); // Returns an array of strings populated by splitting the calling string at occurences of the substring
console.log(str.split(" ", 5)); // Returns limited number of splits

//
// .substr (from, length) || substring (from, to)
//
// str.substr(start[, length])
console.log(str.substr("10")); // returns Everything after the index
console.log(str.substr("10", 10)); // returns Everything after the index , with limit set
