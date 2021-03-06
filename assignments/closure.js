// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const challenge1 = (first_name, last_name) => {
    let salutation = "hello everyone, my name is";

    function helloMyName() {
      return salutation + " " + first_name + " " + last_name;
    }
    return helloMyName();
}

console.log(challenge1('Jose', 'Garza'));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return {
    newCounter: function() {
      count++;
      return count;
    }
  }

};

//const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
