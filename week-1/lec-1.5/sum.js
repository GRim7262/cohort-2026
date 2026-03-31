function sum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  console.log(ans);
}

function findSumTill100() {
  return sum(100);
}

setTimeout(findSumTill100, 1000);
console.log("Hello World");
