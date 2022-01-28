// -------------------------------------------------------
// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddnumbers = function () {
  let b = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 !== 0) {
      b.push(arr[index]);
    }
  }
  console.log(b);
};
oddnumbers();
// -------------------------------------------------------
// Convert all the strings to title caps in a string array
var caps = "wish you happy new year 2022  all my friends";
var titlCaps = caps.toUpperCase();
console.log(titlCaps);

// -------------------------------------------------------

// Sum of all numbers in an array
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
var add = 0;
function foo() {
  for (let index = 0; index < sum.length; index++) {
    // console.log(sum[index]);
    add = add + sum[index];
  }
  console.log(add);
}
foo();

// Remove duplicates from an array
var arr = [];
var dup = [1, 2, 3, 3, 4, 5, 6, 6, 8, 9, 10];
var foo = function () {
  for (let i = 0; i < dup.length; i++) {
    // console.log( dup[i]);

    if (arr.indexOf(dup[i]) === -1) {
      arr.push(dup[i]);
    }
  }
  console.log(arr);
};

foo(dup);
// -------------------------------------------------------

// Return all the prime numbers in an array
var primenumebers = function () {
  var prime = [1, 2, 3, 3, 4, 5, 6, 6, 8, 9, 10];
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; index++) {}
  }
};
// -------------------------------------------------------
// Rotate an array by k times

var result = [];

rotateArray = function (a, n, k) {
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      result.push(a[n + i - k]);
    } else {
      result.push(a[i - k]);
    }
  }
};

let input = [1, 2, 3, 4, 5];

let N = input.length;

let K = 3;

rotateArray(input, N, K);

console.log(result);

// ---------------------------------------------------------
// Return median of two sorted arrays of same size

function getMedian(ar1, ar2, n) {
  var i = 0;

  var j = 0;

  var count;

  var m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;

      m2 = ar2[0];

      break;
    } else if (j == n) {
      m1 = m2;

      m2 = ar1[0];

      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;

      m2 = ar1[i];

      i++;
    } else {
      m1 = m2;

      m2 = ar2[j];

      j++;
    }
  }

  return (m1 + m2) / 2;
}

var input1 = [1, 12, 15, 26, 38];

var input2 = [2, 13, 17, 30, 45];

var n1 = input1.length;

var n2 = input2.length;

if (n1 == n2) {
  console.log("Median is " + getMedian(input1, input2, n1));
} else {
  console.log("Doesn't work for arrays of unequal size");
}

// uing arrow function-------------------------------------------------------------------------------------------

// Print odd numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddnumbers = () => {
  let b = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 !== 0) {
      b.push(arr[index]);
    }
  }
  console.log(b);
};
// -------------------------------------------------------

oddnumbers();
// Convert all the strings to title caps in a string array
foostring = () => {
  var caps = "wish you happy new year 2022  all my friends";
  var titlCaps = caps.toUpperCase();
  console.log(titlCaps);
};
foostring();

// -------------------------------------------------------

// Sum of all numbers in an array
var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
var add = 0;
foosum = () => {
  for (let index = 0; index < sum.length; index++) {
    // console.log(sum[index]);
    add = add + sum[index];
  }
  console.log(add);
};
foosum();

// -------------------------------------------------------

// Return all the prime numbers in an array
var arr = [
  1, 2, 5, 9, 11, 3, 7, 22, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34,
];

var isPrime = function (n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }

    return true;
  }
};

var filterPrime = function (arr) {
  //const filtered = arr.filter(el => !isPrime(el));

  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
};

console.log(filterPrime(arr));
// -------------------------------------------------------
