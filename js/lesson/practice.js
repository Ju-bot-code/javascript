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


let child=document.createElement('hr');

let parent =document.getElementById('append');

let btn=document.getElementById('btnApp');

btn.addEventListener('click',function(){
    let names=['james','jaden']

    for(ele of names){
        let div=document.createElement('div');
        div.innerHTML=ele;

        parent.appendChild(div);
    }
})

btn.addEventListener('click',function(){
    alert('hello');
})

