let text = "Hello world";

// REVERSE STRING

// with spread oparator
let arr = [...text];
// console.log(arr.reverse().join(""));

// with split('')
// console.log(text.split('').reverse().join(''));

/*
  Notes
 - text => spilt('') => ['h','e','l'...]
 - reverse function works in array
 - join() joins the reversed array back to text 
*/

// with for loop
let arrWithfor = [];
for (let i = Number(text.length) - 1; i >= 0; i--) {
  arrWithfor.push(text[i]);
}
// console.log(arrWithfor.join(""));

// with reduce function

let reducedText = text.split("").reduce((curr, acc) => {
  return acc + curr;
}, "");
// console.log(reducedText);

/* turns text to array with split
- (line 31) initalizing the reduce function with a '' turns the datatype to string
- accumalator (dl)  + current value (r) => dlr
*/

// REVERSE ARRAY
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function handleReverseArray() {
  let result = num.reverse((curr, acc) => {
    return acc + curr;
  });
  return result;
}
// console.log(handleReverseArray(), "handleReverseArray");