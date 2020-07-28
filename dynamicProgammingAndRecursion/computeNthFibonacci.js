function fib(n) {

  // Compute the nth Fibonacci number
  //if n is 0 return 0
  if(n === 0 || n === 1) return n
  //return n - 1 + n - 2
  return fib(n - 1) + fib(n - 2)
}



// Tests

let desc = 'zeroth fibonacci';
let actual = fib(0);
let expected = 0;
assertEqual(actual, expected, desc);

desc = 'first fibonacci';
actual = fib(1);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'second fibonacci';
actual = fib(2);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'third fibonacci';
actual = fib(3);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'fifth fibonacci';
actual = fib(5);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'tenth fibonacci';
actual = fib(10);
expected = 55;
assertEqual(actual, expected, desc);

desc = 'negative fibonacci';
const negativeFib = () => (fib(-1));
assertThrowsError(negativeFib, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}