// syntax of addeventlistner used

//1st type of assign the addEventListener
// document.getElementById("header").onmouseenter = abc;
// function abc(){
//     document.getElementsbyId("header").style.backgroundColor="orange"
//}

//2ndtype
document.getElementById("header").onclick = abc;//function
function abc() {
    document.getElementById("header").style.color= "orange";
    //  document.getElementById("header").innerHTML="i am akash";
     document.getElementById("header").style.fontSize="40px";
     document.getElementById("header").style. background="rgba(38, 217, 61, 0.4)"
     document.getElementById("header").style.border="2px solid black"
     document.getElementById("header").appendChild="<h1>heloo<h1>"
}

//3rd type direct function is used
const div= document.getElementById("header")
div.addEventListener("click",function(){
    div.style.color="rgba(243, 237, 243, 0.83)"
    div.style.background="#2456"
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignItems="center"
    alert("color changed")
})

//4th type function in this two argument one is event and second is function
//  const div2= document.getElementById("header")
//   div.addEventListener("click", good)

//   function good(){
//     const firstclick= document.getElementById("header")
//   firstclick.style.background="purple";

// }


// const mouse= document.getElementById("header")
// mouse.addEventListener("",work)

// function work(){
//     const select=document.getElementById("header")
//     select.style.color= "blue";
//     select.style.backgroundColor="rgba(169, 107, 46, 0.13)"
// }

const card2=document.getElementById("enrollBtn")
card2.addEventListener("click",add)
let count=0;

function add(){
    const uto = document.getElementById("card")
    
    if(count==0){
        uto.style.background="#8532";
       uto.style.color="black";
        count=1;
    }
    
    else{
        uto.style.background="rgba(199, 48, 149, 0.98)";
        count=0;
    }

    // if(uto.style.background == "red")
    // {
    //     uto.style.background="pink";
    // }
    // else if(uto.style.background=="pink"){
    //     uto.style.background="#7539"        
    // } 
}

const firstclick=document.getElementById("detailsBtn")
firstclick.addEventListener("click",x)

function x(){
    const y= document.getElementById("card")
     y.innerText="Good morning";
    background="red";
     y.style.fontSize="20px"
     y.style.height="100px"
   y.style.width="#4521";
}





