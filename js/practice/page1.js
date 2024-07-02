let log = console.log;

// ================================================================

// STRING

let text = "hello world";
let arr = [1, 2, 3, 4, 5, 6];

// case sensitive
// returns -1 if the world or letter is not present

// log(text.indexOf('H')); -1
// log(text.indexOf('h')); 0
// log(text.indexOf('world')); 6

// ================================================================

// SET()

console.log([...new Set(arr)], "d");
//---> returns a array with unique

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("a");
// --->when same values are added twice it only adds the first element and rejects the second keeping the array/object unique
letters.add("b");
letters.add("c");

log(letters, "letters");

let lettr = new Set([1, 2, 3]);

log(lettr.size, "sdc");
// --->returns the length of the set
log(lettr.delete(3), "sdc");
//---> used to delete a property , return true
log(lettr, "sdc");
log(lettr.entries(), "sdc");
// --->has no key hence returns [value,value]

for (let [ele, index] of lettr.entries()) {
  log(ele, index);
  //   value,value
  //   1 1
  //  2 2
}

log(lettr.has(2));
// returns a boolean true or false

// USECASE OF SETS

// --->makes the array unique
let messy = [1, 2, 3, 3, 3, 3, 3, 4, 55];
log([...new Set(messy)]);
// [1, 2, 3, 4, 55]

//--->adds two array into one
log([...new Set(messy.concat([44, 55, 66, 77]))]);
// [1, 2, 3, 4, 55, 44, 66, 77]

//---> creates a union of sets
log([...new Set([...messy, ...lettr])]);
// [1, 2, 3, 4, 55]

// ---> checks for intersection
log(
  messy.filter((x) => lettr.has(x)),
  "intersection"
);
// 'intersection'

// ================================================================

// FIRST CLASS FUNCION

/*
A language where function can be treated as a variable is called a  first class function 
- function can be manupilated 
-passed into another function 
- fun can br returned from that function 
*/

function num(num) {
  return num + num;
}

function display(fn) {
  console.log(fn, "displaying function ");
}

display(num(5));


/* Argument vs params

data recieved in the function is called the param
function display(fn) { ---> fn is the parameter
  console.log(fn, "displaying function ");
}

data passed when the function is called is called the argument 
display(num(5));  ->>>5 is the argument

*/