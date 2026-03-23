// 1. let & const
const name = "Saumya";
let age = 20;

if (true) {
  let age = 25;
  console.log("Block age:", age);
}
console.log("Global age:", age);


// 2. Arrow Functions
const add = (a, b) => a + b;
console.log("Add:", add(2, 3));


// 3. Template Literals
console.log(`My name is ${name} and I am ${age} years old`);


// 4. Destructuring
const user = {
  username: "Saumya",
  userAge: 20,
  address: { city: "Ahmedabad" }
};

const { username, userAge } = user;
console.log("Destructured:", username, userAge);

// Array destructuring
const arr = [10, 20, 30];
const [a, b] = arr;
console.log("Array destructuring:", a, b);


// 5. Spread Operator
const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 };
console.log("Spread object:", obj2);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread array:", arr2);


// 6. Rest Operator
const sum = (...nums) => {
  return nums.reduce((acc, curr) => acc + curr, 0);
};
console.log("Sum:", sum(1, 2, 3, 4));


// 7. Default Parameters
const greet = (user = "Guest") => `Hello ${user}`;
console.log(greet());
console.log(greet("Saumya"));


// 8. Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 1000);
});

myPromise.then(res => console.log(res));


// 9. Async / Await
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Async data"), 1000);
  });
};

const getData = async () => {
  const data = await fetchData();
  console.log(data);
};

getData();


// 10. Optional Chaining
console.log("City:", user.address?.city);
console.log("Country:", user.address?.country);


// 11. Nullish Coalescing
const nickname = null;
const finalName = nickname ?? "Default Name";
console.log("Final Name:", finalName);


// 12. Array Methods
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter
const even = numbers.filter(n => n % 2 === 0);
console.log("Even:", even);

// find
const found = numbers.find(n => n === 3);
console.log("Found:", found);

// reduce
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total:", total);


// 13. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const p1 = new Person("Saumya", 20);
console.log(p1.greet());