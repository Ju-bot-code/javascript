// LOCAL SCOPE / Functional scope 
//  1->varibale declared inside a function stays in the scope of that function 
//  2->varibale declared in a function cannot be accesed outside the function
//  3->Two fucntions can have similar variable declared and their scope stays in their respective function 
//  4->->same variable can be defined in two different scopes
// 5->var is scoped to functions

let log = console.log

function one() {
    let msg = "i belong to one"
    log(msg);
}

function two() {
    let msg = "I BELONG TO TWO"
    var msgVar = "I BELONG TO TWO VARRRRR"
    log(msg);
    log(msgVar);
}

one();
two();
// 1
// log(msg);
// o/p Uncaught ReferenceError: msg is not defined

// log(msgVar);
// o/p Uncaught ReferenceError: msgVar is not defined


// 4
let here = "I'm in gloabal scope";

function functionScope() {
    let here = "I'm in local scope";
    log(here);
}

functionScope();
log(here);


// Block scope
// 1->   BLOCK SCOPE IS JS IS DEFINED BY "{ }"
// 2->  varibale declared inside a Block stays in the scope of that block 
// 3->LET and CONTS are block scoped
// 4->VAR is not block scoped


// 3
if (true) {
    let animal = "pengu let";
}
// console.log(animal);
// Uncaught ReferenceError: animal is not defined

if (true) {
    const animalCon = "pengu const";
}
// 3
// console.log(animalCon);
// Uncaught ReferenceError: animalCon is not defined

if (true) {
    var animalVar = 'pengu Var'
}
// 4
console.log(animalVar);






// VAR 
// ->function scoped
// -> NOT block scoped
// ->can be redeclared
// ->can be reassigned

// LET
// ->function scoped
// ->block scoped
// ->cannot be redeclared
// ->can be reassigned

let numLet = 8;
numLet = 2;
log(numLet, 're-assigend let');


// CONST
// ->function scoped
// ->block scoped
// ->cannot be redeclared
// ->cannot be reassigned

const num = 7;
// num=25;
// Uncaught TypeError: Assignment to constant variable.







// LEXICAL SCOPE

// ->In nexted functions the variables declared in parent function can be accessed from the child 
// ->the child function cannot be accessed from the global scope

function parent() {
    let hero = 'Doctor stange'

    function child() {
        let cryForHelp = `${hero} , please help me!`;
        log(cryForHelp, 'from child');
    }

    child();
    // OR 

    function childtwo() {
        let cryForHelp = `${hero} , please help me!`;
        log(cryForHelp, 'from child two');
    }

    // log(cryForHelp)
    // o/p cryForHelp is not defined
}
parent()


// Lexical scope can go in many levels deep

function out() {
    let movie = 'no way home';

    (function inner() {
        // let movie='push';
        // if it cannot find movie in here, it moves up a level 

        (function shouldntHaveComeThisFar() {
            log(movie.toUpperCase())
        })();
    })();

}
out();
// o/p --->NO WAY HOME





// FUNCTION EXPRESSION

let add = (x, y) => {
    return x + y;
}

log(add(2, 2), 'Add')


let addAgain = function (x, y) {
    return x + y;
}

log(addAgain(2, 2), 'add Again')


let add3 = function adding(x, y) {
    return x + y;
}

log(add3(2, 2), 'add3')






// Higher Order Function
// Using functions as values

function checkCapital(text) {

    if (/^[A-Z]*$/.test(text)) {
        return `Name has captial letters`
    }

    return `No capitals`
}

function hasVowels(text) {

    for (let ele of ['a', 'e', 'i', 'o', 'u']) {
        if (text.includes(ele)) {
            return `Name has vowels`;
        }
    }

    return `No vowels`

}

function giveLength(text) {
    return `${text.length} is the length of Name`
}

function hasSpace(text) {
    if (text.includes(' ')) {
        return true;
    }
    return 'Name Has No Space';
}

// Using function as a array element
let testsArray = [checkCapital, hasVowels, giveLength, hasSpace];

log(testsArray[1]('Jade'))

for (let ele of testsArray) {
    log(ele('Judith'),'----->Function as ARRAY');
}

// Using function as object values
let testObj={
    'checkCapital':checkCapital,
    'HasVowels':hasVowels,
    'giveLength':giveLength,
    'hasSpace':hasSpace
}

log(testObj.giveLength('MyName Jeff'),'----->Function as OBJECT');

for (let ele of Object.values(testObj)) {
    log(    ele('judith') ,'----->Function as OBJECT'  );
}


// Higher order Functions

// 1------->FUNCTIONS THAT ACCEPTS OTHER FUNCTIONS AD ARGUMENTS
// 2-------> RETURNS A FUNCTION

// examples for 1
function callTwice(fun){
    fun();
    fun();
}

function laugh(){
    log('ha-ha');
}

callTwice(laugh);


// example for 2

function multi(num){
    return function(x){
            console.log(x * num ,'fucntion as a return value');
    }
}

let ans=multi(4);

log(ans(3),'fucntion as a return value');