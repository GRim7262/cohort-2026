const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getFullYear());

setInterval(function () {
  let timer = new Date();
  console.log(
    `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`,
  );
}, 1000);

function calculateSum() {
  let ans = 0;
  for (let i = 0; i < 500000; i++) {
    ans += i;
  }
  return ans;
}

const beforeTime = new Date();
const beforeTimeMs = beforeTime.getTime();

calculateSum();

const afterTime = new Date();
const afterTimeMs = afterTime.getTime();

console.log(afterTimeMs - beforeTimeMs);
