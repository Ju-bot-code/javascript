let log = console.log;

log('LOG works ')

// variable
let jade='here we are';

// variable in object
let ob={name:jade, 45:'Fourty five'}

log(ob['45']);
// op:"Fourty five"

log(([3,4,42,33,5,43,99,98][2]) ,'returns the value of index 2 in array i,e 42');
// op: 42

log({name:'jade',color:'yellow'}['color']);
// op: 'yellow'

log([{name:'jade',color:'yellow'},{name:'jean',color:'pink'}][1]['color']);
// op : 'pink'


// CREATING A NEW OBJECT PROPERTY

let emptyOb={};

emptyOb.name='jane';
log(emptyOb,'original');

emptyOb.name=42;
log(emptyOb,'updated');

// REFERENCE

log([]===[],'[]===[],Will be false since they have different references');


let here=[];
let moreName= here;

log(here === moreName ,'Will be true due to same reference ')


