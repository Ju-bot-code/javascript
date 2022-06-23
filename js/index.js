// document.getElementById('button').onclick = ()=>{
//     document.getElementById('content').innerHTML='your order has been placed';
//     document.getElementById('button').style.display='none';
// }

// // NESTED IF -- CHECKING FOR PASSWORD

let log = console.log;
// let password;

// function isLower(pass){
//     return pass == pass.toLowerCase() && pass != pass.toUpperCase();
// }

// document.getElementById('passwordCheck').onclick=()=>{
//     password=document.getElementById('password').value;
//     goOn();
// }

// function goOn(){
//     if(password.length >= 6  &&
//          password.indexOf(' ') === -1 &&
//         ( password.includes('@')  || password.includes('#') || password.includes('!')  ) &&
//         !isLower(password)
//     ){
//         log('Password is valid  ');
//      }else{
//             if(! password.length >= 6 ){
//                 log('password not long enough');
//             }
//             if(password.indexOf(' ') !== -1 ){
//                 log('password contains spaces');
//             }
//             if(! password.includes('@')  || !password.includes('#') || !password.includes('!') ){
//                 log('password needs to contain at least one special characters');
//             }
//             if(isLower(password)){
//                 log('need to contain atleast one Capital letter');
//             }
//      }
// }

// //TRUTHY AND FALSY

// let hey='';

// if(hey){
//     log('its truthy');
// }else{
//     log('falsy');
// }

// //PARING SWITCH STATEMENT

// let emoji="lips";

// switch(emoji){
//     case 'heart':
//     case 'lips':
//         log('this emoji is red');
//         break;
//     case 'simle':
//     case 'sad face':
//         log('this emoji is yellow');
//         break;
//     case 'dog':
//     case 'cat':
//         log('this is a animal emoji that may come in a couple of different colors');
//         break;
//     default:
//         log('emoji not a match');
// }

//  //CREATING AN ARRAY

//  let colors=new Array('red','blue','green');

//  //PUSH AND POP

//  let songs=[
//      'mean it',
//      'i like it like that',
//      'beat it ',
//      'e-girls ruining my life'
//  ];

//  let addSongs=()=>{
//     let newSong=document.getElementById('newsong').value
//     songs.push(newSong);
//     log(songs);
//  }

//  let text='';

// songs.forEach((so,index) =>{
//     text += `${index} : ${so} <br>`;
// })

// document.getElementById("demo").innerHTML = text;

// let removeSong=()=>{
//     // log('pop');
//     songs.pop(songs[songs.length-1]);
//     log(songs);
// }

// //CONCAT
// //->returns a new array
// let veggies=['carrort','pumkin','beans','onion','brocolie'];
// let fruites=['apple','grapes','bannana','papaya','pineapple','cherry'];
// let meat=['chicken','fish'];

// let vegan=veggies.concat(fruites);
// log(vegan);

// let wholeMeal=veggies.concat(fruites,meat);
// console.log(wholeMeal);

// //INCLUDES
// log(`Is apple included in the fruits array ? : ${fruites.includes('apple')}`);
// log(`Checking includes with index . \n   Is grapes included after index 3 ?: ${fruites.includes('grapes',3)}  \n   without index includes grapes ? : ${fruites.includes('grapes')}  `);

// //REVERSE
// //->mutates the array
// let letters =['A','P','P','L','E'];
// log(letters.reverse());

// //JOIN
// //->coverses all the array elements into string and joins  them

// log(letters.reverse().join(' '));

// //SLICE
// //-> makes a copy of the array
// //->does not include the END index

// let animals=['otter','whale','lizard','tortize','lion',];
// let swimmers=log(animals.slice(0,2));
// // let qudruples=log(animals.slice(2,5));
// // let qudruples=log(animals.slice(2));
// let qudruples=log(animals.slice(-3));
// let mammles=log(animals.slice(1,2).concat(animals.slice(-1)));
// let chunk =log(animals.slice(-3));

// // SPLICE
// //mutates the array

// let animals2 = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
// log(animals2);
// let anima=animals2.splice(1,1, 'teddybear');
// log(anima);
// log(animals2);

// //splice(startIdx, deleteCount, itemsToInsert);

// // =====================
// // INSERTING w/ SPLICE
// // =====================
// // 'at index 1, delete 0 items and insert "octopus"'
// // animals.splice(1, 0, 'octopus');
// //["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// // =====================
// // DELETING w/ SPLICE
// // =====================
// //'at index 5, delete 2 items'
// // animals.splice(5, 2);
// //["shark", "octopus", "salmon", "whale", "bear"]

// // =====================
// // REPLACING w/ SPLICE
// // =====================
// //'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
// // animals.splice(3, 2, 'orca', 'grizzly');
// // ["shark", "octopus", "salmon", "orca", "grizzly"]

// //SORTS
// //->mutates the array
// //does not sort numbers since it covers everything into strings

// log(animals2.sort());

// //CONST

// //->can be mutable with refrence data type

// let col=['red','yellow','green','purple'];
// col.push('PINK');
// log(col);

//ticktacktoe

// let slots=['null','null','null',
//             'null','null','null',
//             'null','null','null'
//           ];

//  let x_text="X";
//  let o_text="O";
//  let text="X";
//  let i=1;

// let boxes =Array.from(document.getElementsByClassName('box'));

//     let myturn =(e)=>{

//         document.getElementById(e.target.id).innerText=text;

//         if(text === x_text){
//             text=o_text;
//             return;
//         }
//         if(text === o_text){
//             text= x_text;
//             return;
//         }

//     }

// boxes.forEach(() =>

//     addEventListener('click',myturn)
//     )

//     let clicked=(e)=>{
//         // log(e.target.id);

//         document.getElementsByClassName(e.target.id).style.position = 'relative';
//     }

// let fun =Array.from(document.getElementsByClassName('box2'));
//    log(document.getElementsByClassName(id));

// fun.forEach(()=>{
//         addEventListener('click',clicked);
//     })

//   log(boxes);
// const letGo = ()=> {
//     slots.forEach(slot => {

//     });
// }

//62 Nested Arrays and Objects

const student = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

log(student.strengths[1]);
log((student.exams.midterm + student.exams.final) / 2);

// for loops

const cars = ["Saab", "Volvo", "BMW"];

for (let i = 0; i < cars.length; i++) {
  log(cars[i]);
}

let car = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

for (let i = 0; i < car.length; i++) {
  // log(car[i]);
  log(
    `the ${car[i].type} is ${car[i].color} in color , Registered on ${car[
      i
    ].registration.toDateString()} and it holds ${car[i].capacity} people `
  );
}

let word = "stressed";
let reveresed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reveresed += word[i];
}
log(reveresed);

let sum = 0;

for (let i = 0; i < car.length; i++) {
  sum += car[i].capacity;
}
log(`${sum / car.length}`);

let gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let sum2 = 0;

for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (j = 0; j < row.length; j++) {
    sum += row[j];
    log(row[j]);
  }
}
log(`Avarage of Game Board is ${sum / gameBoard.length}`);

//WHILE LOOP
//Guess game

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  log(`target ${target}`);
  log(`guess ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

if (guess === target) {
  log(
    `congratulations you won the game \n target:: ${target} \n guess:: ${guess} `
  );
}

//FOR OF LOOP

//array
let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
for (let element of alphabets) {
  log(element);
}

// objects
let cAr = [
  {
    color: "purple",
    details: {
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
  },
  {
    color: "red",
    details: {
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  },
  {
    color: "pink",
    details: {
      type: "G wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  },
];

for (let car of cAr) {
  let details = car.details;

  document.getElementsByClassName("forOf").innerHTML = details.type;

  log(details.type);
}

//APPEND CHILD
//what to append
const childdd = document.createElement("hr");

//which parent
const par = document.getElementById("append");

//where to append

let getBtn = document.getElementById("btnApp");

let doApp = () => {
  log('hey')
 par.appendChild(childdd);
};

getBtn.addEventListener("click", doApp);


