/* // algorithms
// time complexity
// space complexity
// asymptotic notation
// 1. big o notation (O)
// 2. omega notation
// 3. theta notation
// find the time complexity

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sum([3, 2, 4, 5, 2, 1])); // O(n) - linear time complexity

function sum2(number1, number2) {
  return number1 + number2;
}

console.log(sum2(10, 20)); // O(1) - constant

let n = 10;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i, j); // O(n^2) - quadratic time complexity
  }
}

// 3 nested for loop : O(n^3) - cubic

// O(1) -- best
// O(n) -- okay
// O(n^2) -- avoid
// O(n^3) -- avoid

// objects --> insert: O(1), remove: O(1), access: O(1), search: O(n), Object.keys() or Object.values() or Object.entries(): O(n)

// arrays --> push() or pop(): O(1), shift() or unshift(): O(n), arr[3]: O(1), search: O(n), slice() or splice(): O(n), forEach() or map(): O(n)

// fibonacci series
// fibonacci(2) --> [0,1]
// fibonacci(3) --> [0,1,1]
// fibonacci(4) --> [0,1,1,2]
// fibonacci(5) --> [0,1,1,2,3]
// fibonacci(6) --> [0,1,1,2,3,5]
// fibonacci(7) --> [0,1,1,2,3,5,8]
// fibonacci(8) --> [0,1,1,2,3,5,8,13]
// i = (i - 1) + (i -2)

function fibonacci(n) {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8)); // O(n)

// 1 loop --> O(n)
// 2 loop --> O(n^2)
// constant --> O(1)
// input size dived by half --> O(logn)

// factorial
// n! --> n * (n-1)!
// 8! --> 8 * (8-1)!
// 8! --> 8 * 7!

// 0! --> 1
// 5! --> 5 * 4!
// 6! --> 6 * 5 * 4 * 3 * 2
// 7! --> 7 * 6 * 5 * 4 * 3 * 2
// 7! --> 7 * 6!

function factorial(n) {
  let fact = 1;

  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(8)); // O(n)

// 64-bits number system (64  ---> 1, 64 ---> 0)

// prime number
// 3 ---> (1 * 3), (3 * 1)
// 4 ---> (1 * 4), (4 * 1), (2 * 2)

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(125));
console.log(isPrime(1)); // O(n)

// power of 2
// 1 --> 2^0
// 2 --> 2^1
// 8 --> 2^3
// 9 --> flase
// 16 --> 2^4

function powerOfTwo(number) {
  if (number < 1) return false;

  while (number > 1) {
    if (number % 2 !== 0) return false;
    number = number / 2;
  }

  return true;
}

console.log("Power of 2");
console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(8));
console.log(powerOfTwo(9));
console.log(powerOfTwo(16)); // O(logn) - logarithmic

// unit step
// x = n
//y = [1,1,1,1,1,......n] --> time samples

function unitStep(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    y.push(1);
  }
  return y;
}

console.log(unitStep(10)); // O(n)

// unit ramp
// x = n
// y = [1,2,3,....n]

function unitRamp(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    y.push(i);
  }

  return y;
}

console.log(unitRamp(10)); // O(n)

// unit impulse
// x = 0
// y = 1, otherwise 0
// y = [1, 0, 0, .... n]

function unitImpulse(n) {
  let y = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) y.push(1);
    else y.push(0);
  }

  return y;
}

console.log(unitImpulse(10)); // O(n)

// trapping rain water
function trappingRainWater(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  if (height.length < 3) return water;

  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      // water = waterLevel - elevetor height
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }

  return water;
}

console.log(trappingRainWater([5]));
console.log(trappingRainWater([5, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3]));
console.log(trappingRainWater([5, 3, 4, 7, 3, 11, 8, 7, 5, 6, 4, 2, 1, 5, 7]));

// recursion
// parts
// base case

// fibonacci
//[0,1,1,2,3,5,8,13,....n]
// 6th el = 8
// 7th el = 13

// [0,1]

// 0 -- > 0
// 1 --> 1

// el < 2; return el

// n = (n-1) + (n-2)
// n-1
// n-2

function recursiveFibonacci(n) {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13

// input = 1 = n = 100
// called = 2 ^ n = 2 ^ 100

// O(2^n)

// recursive factorial
//6! = 6 * 5 * 4 * 3 * 2
// 6! = 6 * 5!
// n! = n * (n-1)!
// n
// (n-1)!
// n === 0, 1

function recursivefactorial(n) {
  if (n === 0) return 1;

  return n * recursivefactorial(n - 1);
}

console.log("----------------------------");
console.log(recursivefactorial(0));
console.log(recursivefactorial(1));
console.log(recursivefactorial(4));
console.log(recursivefactorial(8));
console.log(recursivefactorial(6)); // O(n) - linear

// search algorithm
// arr = [23,34,54,22,12], 54 ---> 2
// arr = [23,34,54,22,12], 55 ---> -1
// arr = [23,34,54,22,12], 12 ---> 4

// linear search

function linearSearch(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([23, 34, 54, 22, 12], 54)); // 2
console.log(linearSearch([23, 34, 54, 22, 12], 55)); // -1
console.log(linearSearch([23, 34, 54, 22, 12], 12)); // 4

//O(n) - linear */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    }

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([11, 14, 15, 16, 41, 51, 55], 16));
console.log(binarySearch([11, 14, 15, 16, 41, 51, 55], 51)); // O(logn)
