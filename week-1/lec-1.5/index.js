const fs = require("fs");

function iReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

iReadFile().then(onDone);

let p = new Promise(function (resolve) {
  resolve("Hi there");
});

p.then(function () {
  console.log(p);
});
