const users = '{"name": "vinal", "age": 24, "gender": "male"}';

const user = JSON.parse(users);
console.log(user);

const people = {
  name: "vonal",
  age: 20,
  gender: "male",
};

const person = JSON.stringify(people);
console.log(person);
