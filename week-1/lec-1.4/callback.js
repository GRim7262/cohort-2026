function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function finalSum(a, b, method) {
  let val1 = method(a);
  let val2 = method(b);

  return val1 + val2;
}

const finalValue = finalSum(2, 2, cube);
// console.log(finalValue);

//------------------------------------------------------------------------

function sumOfSomething(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);

  return val1 + val2;
}

const value = sumOfSomething(2, 2, function (a) {
  return a + a;
});

console.log(value);
