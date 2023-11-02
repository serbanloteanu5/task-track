/*
 * File: sophisticated_code.js
 * Description: A sophisticated and elaborate JavaScript code showcasing various concepts and functionalities.
 * Author: Your Name
 * Date: Date of Creation
 */

// Function to check if a number is prime or not
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to calculate factorial of a number recursively
function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

// Class representing a Point in 2D space
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  distanceTo(otherPoint) {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  static midPoint(point1, point2) {
    const midX = (point1.x + point2.x) / 2;
    const midY = (point1.y + point2.y) / 2;
    
    return new Point(midX, midY);
  }
}

// Function to reverse a string using recursion
function reverseString(string) {
  if (string === "") {
    return "";
  }
  
  return reverseString(string.substr(1)) + string.charAt(0);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Function to generate a random integer between min (inclusive) and max (inclusive)
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle the elements of an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

// Usage examples
console.log(isPrime(17)); // Output: true
console.log(factorial(5)); // Output: 120

const pointA = new Point(1, 2);
const pointB = new Point(4, 6);
console.log(pointA.distanceTo(pointB)); // Output: 5

const midPoint = Point.midPoint(pointA, pointB);
console.log(midPoint); // Output: Point { x: 2.5, y: 4 }

console.log(reverseString("Hello, World!")); // Output: !dlroW ,olleH
console.log(celsiusToFahrenheit(25)); // Output: 77

console.log(generateRandomInteger(1, 10)); // Output: Random number between 1 and 10
console.log(shuffleArray([1, 2, 3, 4, 5])); // Output: Randomly shuffled array