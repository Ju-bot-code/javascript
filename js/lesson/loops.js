
let log=console.log;

log('For Of')

// FOR OF 
// not supported in internet explorer
// works on anything that is ittirable in javascript

let names=['jane','jade','judith','jenny','jennifer'];

// array
for(let ele of names){
    log(ele,'names');
}

// stirng
let text='here me out'
for (let ele of text){
    log(ele)
}

// object
let obForOf=[
    {name:'jade',age:12},
    {name:'judith',age:22},
    {name:'july',age:42},
    {name:'jenny',age:52}];

    for (let ele of obForOf){
     log(ele.age);
    }

    // with different keys 
  let obFor={
    name:'jane',
    address:'4th street main block',
    place:'hamlton',
    age:47,
  }

//   wont work 

//   for(let ele of obFor){
//     log(ele);
//   }

  for(let ele of Object.keys(obFor)){
    log('keys:',ele,', Values:',obFor[ele]);
  }

//   FOR IN LOOP
// ---> only returns key of Object and Arrays 
// ----> returns indexes for Array as it only returns keys
// ----> with array the values might get jumbled index

for(let ele in  obFor){
    log(ele);
}
// Out Put
// name 
// address 
// place 
// age 

for(let ele in  obFor){
    log(obFor[ele]);
}
 let hey =new Array();

 hey =[23,13,42,123];

 for (let ele in hey){
    // loops throught index
    log(ele);
 }

// Out Put
// 0
// 1
// 2
// 3


 for (let ele in hey){
    // Array elements 
    log(hey[ele]);
 }

// Out Put
// 23
// 13
// 42
// 123




