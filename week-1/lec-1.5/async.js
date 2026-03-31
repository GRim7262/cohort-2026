const { log } = require("console");

function readAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi there");
    }, 1000);
  });
  return p;
}

async function main() {
  let value = await readAsyncFunction();
  console.log(value);
}

main();
