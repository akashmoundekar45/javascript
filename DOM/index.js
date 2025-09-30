// how to select any element (by tag name)
// let paraa = document.getElementsByTagName('h1')
// console.log(paraa)
// paraa[0].innerText = 'saurabh panday'
// paraa[0].style.backgroundColor = "red"
// paraa[0].style.color = "blue"


// for loop (sare isko ek bar me hi change krana hai to loop use kro)
//let paraa = document.getElementsByTagName('h1')
// console.log(paraa)
// for (let element of paraa) {
//     element.innertext = "saurabh pandey"
//     element.style.background = "#4524"
//     element.style.color = "blue"
//     element.innerHTML = "akash"
//     element.style.display = "flex"
//     element.style.justifyContent = "center"
//     element.style.justifyContent = "center"
//     element.style.boxShadow = "100px"
// }

// how to select any element (by class)
// let allpara = document.getElementsByClassName('head')[0]
// console.log(allpara)
// //add div element
//  allpara.style.color = "blue"
//  allpara.style.display = "flex"
//  allpara.style.gap= "20px"
//  allpara.style.justifyContent = "center"
//   allpara.style.hover= "red"
//   allpara.innerHTML="<h2>name is </h2>"



// // how to select any element (by id)

// let para=document.getElementById('1')
// console.log(para)

// for(let element of para) {
//  para.style.background="rgba(165, 208, 78, 0.27)"
// para.style.color = "blue"
// para.style.display = "flex"
// para.style.justifyContent = "center"
// }


// let paraId = document.getElementById('1')
// console.log(paraId)
// for(let element of paraId ){

//     element.style.background = "#4524"
//     element.style.color = "red"
//     element.innerHTML = "akash"
//     element.style.display = "flex"
//     element.style.justifyContent = "center"
//     element.style.justifyContent = "center"
//     element.style.boxShadow = "100px"
// }


// //queryselector

// The querySelector method in JavaScript is used to select the first element within the document that matches a specified CSS selector or group of selectors.

//The querySelector() method returns the first element that matches a CSS selector.


//agar hum  querySelector() ka use krke trarget krenge kisi bhi html me to vo kitne bar bhi aaye  to query selector sirf 1st vala hi show krenga
// let query = document.querySelector('.head')
// console.log(query)
// //  query.innerHTML= "<h2> is a good</h2>"
//  query.style.color="red"
//  query.style.height=100
//  query.style.width=100
//  query.style.background="blue"
//  query.style.display="flex"
//   query.style.justify = "center"


// let f1= document.querySelector('.original')
//  console.log(f1)
// f1.innerHTML="hellow word!"
//  f1.style.color="red"


//querySelectorAll()
// if you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.

// let f2= document.querySelectorAll(" ul")[1].innerHTML;
// console.log(f2)
// let f2= document.querySelectorAll("#content h1")[1].innerHTML;
// console.log(f2)

//agar hum  querySelectorall() ka use krke trarget krenge kisi bhi html me element to  kitne bar bhi aaye  to query selector all data ko show krenga 

// let body = document.getElementsByTagName('body')[0]
// let body = document.body
// let heading1 = document.createElement("h1")
// heading1.innerText = "Dom class"
// heading1.className = "head1"
// body.appendChild(heading1)
// heading1.setAttribute("class", " id1")
// console.log(heading1)
// example

//21/9/25*************************************************************************************

// const heading = document.getElementById("heading")
// console.log(heading)

// const body = document.getElementsByTagName("body")[0]
// console.log(body)


// function colorBlue() {
//   heading.style.color = "red"
//   heading.style.backgroundColor = "#846586"
// };


// function createH2() {
//   let heading2 = document.createElement('h1')
//   heading2.innerText = 'new tag'
//   heading2.style.color = "blue"
//   heading2.style.backgroundColor = "red"
//   body.appendChild(heading2)
// }


// function createcircle() {
//   let box = document.createElement("div")
//   box.style.width = "120px";
//   box.style.height = "120px";
//   box.style.backgroundColor = "red"
//   box.style.borderRadius = "50%"
//   box.style.shadow = "10px"
//   box.style.display = "flex"
//   box.style.justifyContent = "center"
//   body.appendChild(box)
// }

// function addnewcolor(){
//     let color = document.getElementById("addddd")
//     color.style.width = "320px";
//   color.style.height = "320px";
//   color.style.backgroundColor = "blue"
//     color.style.color="white"
//     color.style.borderRadius = "50%"
//     color.style.fontSize="40px"

// }

// const button = document. createElement('button') 
// button. textContent=" click"

// button.addEventListener('click'," addnewcolor")
// document.body.appendChild(button);

//alert
// const button = document.getElementById("addddd");
// button.addEventListener('click',function(){
//   alert("hello")
// } )

// const button = document.getElementById("addddd");
// button.addEventListener('click', firstfunction, );
// function firstfunction(){
//  const add= document.getElementById("demo")
//  add.innerHTML=Date()
//  add.style.color="blue"
//  add.innerText="akash"
//  add.style.fontSize="90px"
// //  add.style.background="red"
//  console.log("adddate")
// }


// //   console.log('add name')

// //   button.style.height="500px";
// //    buttonutton.style.width="100%";



/////////////////////////////////////////////////////////////////////

//  23/09/25 -->

// // const element= document.createElement(htmlTag);
// //adding a div
// const div = document.createElement('div');
// div.id = "content";
// div.innerHTML = '<p>hello i am </p><h2>akash</h2>'
// document.body.appendChild(div)
// console.log(div)

// //
// const heading = document.createElement('heading2')
// heading.id = "content1";
// heading.innerHTML = '<h1>this is select </h1>'
// document.body.appendChild(heading)
// console.log(heading)

// // Adding a class to the div
// const lead = document.createElement('div')
// lead.id = "content"
// lead.className = "note"
// lead.innerHTML = '<p> createElement example </p>';
// document.body.appendChild(lead);
// console.log(lead)


// // create a new div and set its attributes

// const div2 = document.createElement('div')
// div2.id = "content1"
// div2.className = "note"
// let text = document.createTextNode('CreateElement example');
// div.appendChild(text);
// document.body.appendChild(div);


// // Adding an element to a div and h2 tag 

// const div3 =document.createElement("div")
// div3.id="content";
// div3.className="note"
// const h2=document.createElement('h2')
// h2.textContent="h2 element"
// div3.appendChild(h2)
// document.body. appendChild(div3)
// console.log(div3)


// const button = document.createElement('button')
// button.className = 'good';
// button.innerHTML = 'Register';
// document.body.appendChild(button)
// console.log(button)


//innerhtml

// const menu= document.getElementById("menu")
// menu.innerHTML="<li>contact1</li> <li>contact2</li> <li>contact3</li> <li>contact4</li> <li>contact5</li><li>contact6</li> <li>contact7</li>"
// console.log(menu)

//addeventlistner


// function firstclick(){
//     const para=document.getElementById("text")
//     para.style.color="red";
//     para.style.background="blue"
//     para.innerText="hello i am pankaj"
// }


let first = document.getElementById("myBtn")
first.addEventListener("click", firstclick);
function firstclick() {
    let pankaj = document.getElementById('para')
    pankaj.style.color = "blue"
    pankaj.style.fontSize = "50px"
}

let second = document.getElementById("heart")
second.addEventListener("click", first2)

function first2() {
    let akash = document.getElementById('7')
    akash.style.fontSize = "500px"
    if (akash.style.color === "red") {
        akash.style.color = "blue"
        akash.style.fontSize = "250px"

    } else {
        akash.style.color = "red";
        akash.style.fontSize = "200px"
    }
    akash.style.background = "#8484"
}


let mybutton  = document.getElementsByClassName("vehical")
mybutton.addEventListener("click",shift)
 mybutton.style.fontSize="200px"
  mybutton.style.height="40rem"
    mybutton.style.width="25rem"
    mybutton.style.color="red"

function shift(){
  let pankaj = document.getElementById("second")
  pankaj.style.fontSize="200px"
      pankaj.style.height="40rem"
    pankaj.style.width="25rem"
      
}


































