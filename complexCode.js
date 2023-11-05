/* 
Filename: complexCode.js
Content: Complex Code Example
*/

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class definition for a Car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to start the car
  start() {
    console.log(`Starting ${this.make} ${this.model} (${this.year})...`);
  }
}

// Create an instance of Person and call the greet method
const person = new Person("John Doe", 30);
person.greet();

// Create an instance of Car and call the start method
const car = new Car("Tesla", "Model S", 2021);
car.start();

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

// Call the factorial function and display the result
console.log(`Factorial of 5: ${factorial(5)}`);

// Function to generate a Fibonacci series
function fibonacci(num) {
  const series = [0, 1];

  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

// Call the fibonacci function and display the result
console.log(`Fibonacci series up to 10: ${fibonacci(10)}`);

// Calculate the sum of all numbers from 1 to n
function sumOfNumbers(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Call the sumOfNumbers function and display the result
console.log(`Sum of numbers from 1 to 10: ${sumOfNumbers(10)}`);

// Complex iterative algorithm
function complexAlgorithm(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        result += arr[i][j][k];
      }
    }
  }

  return result;
}

const complexArray = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(`Complex Algorithm Result: ${complexAlgorithm(complexArray)}`);

// Generate random numbers using a complex formula
function generateRandomNumbers(size) {
  const randomNumbers = [];

  for (let i = 0; i < size; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
  }

  return randomNumbers;
}

console.log(`Random Numbers: ${generateRandomNumbers(10)}`);