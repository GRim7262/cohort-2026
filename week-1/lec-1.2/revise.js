// function greet(fname, lname) {
//   return "Hello " + fname + " " + lname;
// }
// const value = greet("vinal", "pawar");
// console.log(value);

// function greetGender(gender, name) {
//   if (gender == "male") {
//     console.log("Hello Mr. " + name);
//   } else if (gender == "female") {
//     console.log("Hello Ms. " + name);
//   } else {
//     console.log(`Gender is incorrect: ${gender}`);
//   }
// }
// greetGender("fsemale", "vinal");

// function sum(num) {
//   let ans = 0;
//   for (let i = 0; i <= num; i++) {
//     ans += i;
//   }
//   return ans;
// }
// const value = sum(100);
// console.log(value);

// function counter(num) {
//   let interval = setInterval(function () {
//     console.log(num);
//     num--;

//     if (num < 0) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }
// counter(30);

// function delayTime() {
//   let start = Date.now();

//   setTimeout(function () {
//     let end = Date.now();
//     console.log(`Delay time is: ${end - start}`);
//   }, 2000);
// }

// delayTime();

// function terminalClock() {
//   setInterval(function () {
//     let time = new Date();

//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();

//     console.log(`${hours}:${minutes}:${seconds}`);
//   }, 1000);
// }

// terminalClock();

// function evenArr(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const value = evenArr([21, 22, 23, 24, 25]);
// console.log(value);

// function biggestNumber(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   console.log(max);
// }
// biggestNumber([2, 4, 5, 6]);

// function reverseArr(arr) {
//   let reversedArr = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }

//   console.log(reversedArr);
// }

// reverseArr([21, 22, 23, 24, 42]);

//print male first name from object

// function printGender(gender) {
//   const allUsers = [
//     {
//       name: "vinal",
//       gender: "male",
//     },
//     {
//       name: "suyog",
//       gender: "male",
//     },
//     {
//       name: "priya",
//       gender: "female",
//     },
//   ];

//   for (let i = 0; i < allUsers.length; i++) {
//     if (allUsers[i].gender == gender) {
//       console.log(allUsers[i].name);
//     }
//   }
// }

// printGender("male");
