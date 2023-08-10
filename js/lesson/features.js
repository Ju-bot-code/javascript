let log = console.log;

// DEFAULT FUNCTION PARAMETER
// note : order of param matters

let multiply = (a, b = 1) => {
  return a * b;
};
log(multiply(4));
log(multiply(4, 4));
log(multiply(4, 18));

let greet = (person = "tim", greeting = "hi") => {
  log(`${greeting} ${person} !`);
};
greet("judith", "good night");

let multiplyAgain = (a = 1, b) => {
  return a * b;
};

// order of param
log(
  multiplyAgain(1),
  "will return NaN , because second value does not have a default"
);
log(
  multiplyAgain(1, 5),
  "will return NaN , because second value does not have a default"
);

// SPREAD IN FUNCTION CALL
let arr = [3, 4, 3, 2];
log(Math.max(arr), "not valid number");
log(Math.max(...arr), "works"); // equivqlent to Math.max([3,4,3,2])

// SPREAD IN ARRAY

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

// spread and without
log([...num1, num2]);

// spread creats a new array with elems of the array being spread
let data = [...num1];
log(data);

// hence num1 and data are not equal since they have different references
log(data === num1);

// where as just declaring gives true since they will have the same references stored
let newNum1 = num1;
log(newNum1 === num1);

// same holds for objects

// SPREAD IN OBJECTS

// ARGUMENT OBJECT IN FUNCTIONS

//collects things down to a signle array
// array fucntions like push / pop / map does not apply
// does not work in arrow function

function sumAll() {
  return [...arguments].reduce((total,current)=>{
   return total+current
  })
}
console.log(sumAll(1,2,3,4,5),'total here')
