const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background="grey";
     bodyEl.style.border="2px solid white";

  } else {
    bodyEl.style.background = "white";
   
  }
}
inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();

});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));

}

// const heading= document.createElement("h2")
// heading.innerText = "Welcome to the Project!";
// heading.style.color = "orange";

// bodyEl.appendChild(heading);

// heading.style.height="500px"
// heading.style.width="100px"
    
// ...existing code...

// Create a card element
const card = document.createElement("div");
card.style.width = "320px";
card.style.margin = "40px auto";
card.style.padding = "24px";
card.style.background = "#fff";
card.style.borderRadius = "16px";
card.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.alignItems = "center";

// Add an image to the card
const img = document.createElement("img");
img.src = "https://cdn.pixabay.com/photo/2025/03/04/06/03/bird-9445431_1280.jpg";
img.alt = "Bird";
img.style.width = "100%";
img.style.maxWidth = "250px";
img.style.borderRadius = "12px";
img.style.marginBottom = "16px";
card.appendChild(img);

// Add a title
const title = document.createElement("h3");
title.innerText = "Beautiful Bird";
title.style.margin = "0 0 8px 0";
title.style.color = "#333";
card.appendChild(title);

// Add a description
const desc = document.createElement("p");
desc.innerText = "This is a sample card created with JavaScript. You can add more content or style as needed.";
desc.style.margin = "0 0 16px 0";
desc.style.color = "#555";
desc.style.textAlign = "center";
card.appendChild(desc);

// Add two buttons
const btnContainer = document.createElement("div");
btnContainer.style.display = "flex";
btnContainer.style.gap = "20px";

const btn1 = document.createElement("button");
btn1.innerText = "Like";
btn1.style.padding = "8px 18px";
btn1.style.background = "#ff9800";
btn1.style.color = "#fff";
btn1.style.border = "none";
btn1.style.borderRadius = "60px";
btn1.style.cursor = "pointer";
// btn1.style.

const btn2 = document.createElement("button");
btn2.innerText = "Share";
btn2.style.padding = "8px 18px";
btn2.style.background = "#36d1c4";
btn2.style.color = "#fff";
btn2.style.border = "none";
btn2.style.borderRadius = "60px";
btn2.style.cursor = "pointer";


btnContainer.appendChild(btn1);
btnContainer.appendChild(btn2);
card.appendChild(btnContainer);

// Append the card to the body
bodyEl.appendChild(card);


const x= document.getElementsByClassName

























// let a=10;
// for(let i=0;i<=a ;i++)
// {
//   console.log(i)
// }
// console.log("*****************************")

// for (let i = 20; i >= 10; i--) {
//   console.log(i);
// }
// console.log("*****************************")
// let f=20
// while(f>=1){
//   console.log(f)
//   f--
// }
// console.log("*****************************")

// for (let i=50;i<=60;i++){
//   console.log(i)
// }
// console.log("*****************************")
// for(let i=60; i>=50; i--){
//   console.log(i)
// }
// console.log("*****************************")
// let number = [5,8,9,6,7,5,12,45,32,14]
// for(let x in number){
//   console.log(number[z])
// }

  // for(let x of number){
  //   console.log(number[z])
  // }

// let z=0;
// while(z<number.length){
//   console.log(number[z])
//   z++
// }

// //all even numbers
// let number = [5,8,9,6,7,5,12,45,32,14]

// // for(let i = 0; i>number.length;i++){
// //   if(e%2==0){
// //     console.log(i)
// //   }
// // }

// for(let e of number){
//   if(e%2==0){
//     console.log(e)
//   }
// }
// console.log("*****************************")
// for(let e of number){
//   if(e%2!=0){
//     console.log(e)
//   }
// }
// console.log("*****************************")

// for(let e of number){
//   if(e>20){
//     console.log(e)
//   }
// }

//05/10/25


// Array
//? it is a data strucher and algorithm
// it is allows indexing to all data 
//.length
//.map (agar array me update kiya tha to .map use krte hai)
//  let update=[]
let price = [20,46,32,99,56,41]
// for(let x in price){
//   update.push(x*2)
// }
// console.log(update)

// price.map(()=>{
//   console.log('hello')
// })

let update= price.map((s)=>{
  return s*s;
})
console.log(update)

 let n=["akash","pankaj, sahil,kundan"]
let uppercase= n.map(name=>name.toUpperCase());
console.log(uppercase)

let upper= n.map((o)=>{
  return o.toUpperCase();
})
console.log(upper)

// fillter
//   The filter method creates a new array with all elements that pass a certain condition defined by a callback function
let marks = [20,46,32,99,56,41]
//  let  count = marks.filter(marks=>marks>=90);
//  console.log(count)

 let passed=marks.filter((mark)=>{
  return marks>=90 || marks%2==0 
 })

// let marks2= [20, 46, 32, 99, 56, 41];
//  let passed2=marks2.filter((mark2)=>{
//   return  marks%2===0;
//  })


