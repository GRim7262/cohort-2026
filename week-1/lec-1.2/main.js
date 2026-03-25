// greet person firstName + lastName

let firstName = "test";
let lastName = "test2";
console.log("Greetings " + firstName, lastName);

// greet person based on gender

let gender = "male";

if (gender === "male") {
  console.log("Greetings Mr." + firstName);
} else if (gender === "female") {
  console.log("Greetings Ms." + firstName);
} else {
  console.log("Define gender correctly");
}

// count sum from 0 - 1000

let ans = 0;

for (let i = 0; i <= 1000; i++) {
  ans += i;
}

console.log(ans);

// Counter from 30 to 0
let i = 30;

let interval = setInterval(function () {
  console.log(i);
  i--;

  if (i < 0) {
    clearInterval(interval);
  }
}, 1000);

// Calculate the time it takes between a setTimeout call and the inner function actually running

let start = Date.now();

setTimeout(function () {
  let end = Date.now();
  console.log(`Delay in seconds: ${(end - start) / 1000}`);
}, 2000);

// Terminal Clock HH:MM:SS
setInterval(function () {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);

// even number
let ageArray = [21, 22, 23, 24, 25];
for (let i = 0; i < ageArray.length; i++) {
  if (ageArray[i] % 2 == 0) {
    console.log(ageArray[i]);
  }
}

// biggest number
let numberArr = [21, 22, 23, 24, 25];
let max = numberArr[0];

for (let i = 0; i < numberArr.length; i++) {
  if (numberArr[i] > max) {
    max = numberArr[i];
  }
}
console.log(max);

// reverse array

let arr = [21, 22, 23, 24, 25];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr);

// print male first name from an object
const allUsers = [
  {
    firstName: "vinal",
    gender: "male",
  },
  {
    firstName: "suyog",
    gender: "male",
  },
  {
    firstName: "priya",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender == "male") {
    console.log(allUsers[i].firstName);
  }
}

// function sum of two numbers

function sum(num1, num2) {
  return num1 + num2;
}
console.log(`Sum = ${sum(2, 3)}`);

function sum(num1, num2) {
  return num1 + num2;
}

function displayResult(data) {
  console.log(`Result of the sum is: ${data}`);
}

function displayResultPassive(data) {
  console.log(`Sum's result is: ${data}`);
}

displayResult(sum(1, 1));
