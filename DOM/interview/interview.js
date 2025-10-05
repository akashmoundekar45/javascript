//push
//pop
//shift
//unshift
//splice

let Names=['akash','pankaj','purva','vidya','gulab']
console.log(Names)
Names.push('xyz')

Names.splice(2,0,"x","y")

//searching
let Names2=['akash','pankaj','purva','vidya','gulab','chaya']
console.log(Names)

//includes
console.log(Names.includes('dhiraj'))
console.log(Names2.includes('akash'))

//index of
console.log(Names.indexOf('pankaj'))


//lastindexof

// let nav= Names2.findIndex((nam)=>{
//     return nam.length>2
// })
console.log("******************")

 let numbers=[0,-15,3,6,8,12,17,21,25,35,42]

// let num= numbers.map((a)=>{
//     if(a>=0){
//         return a;
//     }
//     else{
//         return a+10;
//     }
// })
// console.log(num)


console.log("**********fillter********")
// fillter
let fillternums=numbers.filter((num)=>{
    return num>30
})
console.log(fillternums)


//foreach
    let count=0;
  numbers.forEach((num)=>{
   if(num>0){
    count++
   }

  })
console.log(count)


//reduced(accumulator , ) add of two array
 let numbers4=[0,-15,3,6,8,12,17,21,25,35,42]

 let arr=[0,15,3,6,8]

let y=arr.reduce((a,c)=>{
    return a+c
})
console.log(y)

//sum array
//  let numbers4=[0,-15,3,6,8,12,17,21,25,35,42]

//  let arr=[5,6,7,8,9,10]

//  let sum=0;
//  for(let num of arr){
//     sum+=num
//     console.log(sum)
//  }