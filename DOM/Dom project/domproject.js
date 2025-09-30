// Like Counter in DOM

// Create Like button and counter span
const card = document.getElementById("card");
const likeBtn = document.getElementById("add")

likeBtn.addEventListener("click", function () {

  likeBtn.innerText = "like";
  likeBtn.style.color = "#fff"
  
  const y = document.getElementById("one")
  y.innerHTML = "Akash moundekar";
})

const counter = document.createElement("span");
counter.innerText = "counter:";
counter.style.marginLeft = "15px";
counter.style.fontWeight = "bold";
counter.style.fontSize = "18px";
card.appendChild(counter);

// const body =document.getElementsByTagName("body")
// body.addEventListener("click",()=>{
//   body.style.background="rgba(154, 22, 237, 0.24)"
// })


let count = 0;
likeBtn.onclick = function () {
  count++;
  counter.innerText = 
  counter.fontSize = "200px";
};


const likeBtn2 = document.getElementById("remove")
likeBtn2.addEventListener("click", abc)

function abc() {
  const y = document.getElementById("one")
  y.innerHTML = "pankaj Moundekar"

  const x = document.getElementById("two")
  likeBtn2.onclick = function () {
    count--;
    counter.innerText = count;
    counter.fontSize = "10px";
  };
  x.style.color = "#2ab9e1f0";
  x.innerHTML = "<p> i am  the brother of akash </p>"
  x.style.border = "2px sold yellow"
};






// const card2 = document.getElementById("card");
// const likeBtn5= document.getElementById("remove")
// likeBtn5.addEventListener("click",function(){
//   likeBtn5.style.color="orange"
// })

// const counter=document.createElement("span");
// counter.innerText = "0";
// counter.style.marginLeft = "10px";
// counter.style.fontWeight = "bold";
// counter.style.fontSize = "18px";
// card.appendChild(counter)

// if(likeBtn5==remove)
// {
//   let count = 0;
// likeBtn5.onclick = function() {
//     count--;
//     counter.innerText = count;
// }}


