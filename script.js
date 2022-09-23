// algorithms
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
