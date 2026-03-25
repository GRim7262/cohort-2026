let fname = "vinal";
console.log(fname.length);

let findIndex = "Hello World";
const value = findIndex.indexOf("World");
console.log(value);

let findLastIndex = "Hello World World";
const value2 = findLastIndex.lastIndexOf("World");
console.log(value2);

let str = "Hellow World";
const value3 = str.slice(0, 5);
console.log(value3);

let str2 = "Hello World";
const value4 = str.replace("World", "JavaScript");
console.log(value4);

let str3 = "my name is vinal";
let value5 = str.split(" ");
console.log(value5);

let str4 = "    vinal str    ";
let value6 = str.trim();
console.log(value6);

let str5 = "vinal STR";
let value7 = str5.toLowerCase();
let value8 = str5.toUpperCase();
console.log(`Lower Case: ${value7}`);
console.log(`Upper Case: ${value8}`);
