

// My Solution
function printFizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    let w = !!(i % 3) ? '' : "Fizz";
    w += !!(i % 5) ? '' : "Buzz";
    console.log(w || i);
  }
}

printFizzBuzz();

// Best Solution
function printFizzBuzz2() { 
  for(i=0;++i<101;)console.log([i,"Fizz","Buzz","FizzBuzz"][!(i%3)+!(i%5)*2])
}

// printFizzBuzz2();