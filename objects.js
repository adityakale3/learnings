let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);

obj1.a = 1;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

obj2.a = 2;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

obj2.b.c = 3;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}
