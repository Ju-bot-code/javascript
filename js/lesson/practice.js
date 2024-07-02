let data = [];
let array = [1, 2, 3, 4, 5, 5, 6, 6, 7];

document.getElementById("button").onclick = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await res.json();
  if (res.ok) {
    // console.log(data);

    console.log(
      data.find((ele) => ele.id === 6),
      "heres 6"
    );
  } else {
    alert("an error has occured");
  }
};

async function here() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await res.json();
  if (res.ok) {
    // console.log(data)
    // for(dat of data){
    //     console.log(dat.id);
    // }
    // for(arr of array){
    //     console.log(arr);
    // }
    // for(dat in data){
    //     console.log(data[dat].id,'in');
    // }
  } else {
    alert("an error has occured");
  }
}
here();

// let parent = document.getElementById("parent");
// console.log(parent)
// let obj = { name: "judith", age: 25 };
// for ([key, value] of Object.entries(obj)) {
//     // parent.innertHTML=key;
// //   console.log(key, "---", value);
// }
// //APPEND CHILD
// //what to append
// const childdd = document.createElement("hr");

// //which parent
// const par = document.getElementById("append");

// //where to append

// let getBtn = document.getElementById("btnApp");

// let doApp = () => {
// //   log('hey')
//  par.appendChild(childdd);
// };

// getBtn.addEventListener("click", doApp);

let child = document.createElement("hr");

let parent = document.getElementById("append");

let btn = document.getElementById("btnApp");

btn.addEventListener("click", function () {
  let names = ["james", "jaden"];

  for (ele of names) {
    let div = document.createElement("div");
    div.innerHTML = ele;

    parent.appendChild(div);
  }
});

btn.addEventListener("click", function () {
  alert("hello");
});

// Recursion function

// The process in which a function calls itself directly or indirectly is called recursion  and the corresponding function is called a recursive function.

// PROBLEM
// turn the multi dimentional array into single dimension

let arr = [1, 2, 3, [4, 5, [6, 7, 8]], 8];

let done = [];

function res(arr) {
  for (a of arr) {
    if (Array.isArray(a)) {
      res(a);
    }
    done = [...done, a];
  }
}

res(arr);
console.log(done, "Complete");

// Check if data type is Array

console.log(Array.isArray(arr), "<--- Array.isArray(done)");

console.log(arr instanceof Array, "<---- arr instanceof Array");

// PROBLEM
// Create a promise and return it after 2 seconds

// immideate return

let immideatePromise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
  // reject(new Error('Promise rejected'));
});
immideatePromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Run after 2 seconds
let promiseFullfil = new Promise((resolve, reject) => {
  setTimeout(resolve("completed, promise resolved example"), 2000);
});

let promiseReject = new Promise((resolve, reject) => {
  setTimeout(reject(new Error("reject promise example")), 2000);
});

promiseFullfil
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

promiseReject
  .then((data) => console.assert.log(data))
  .catch((err) => console.log(err));
