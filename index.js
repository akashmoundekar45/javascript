// //oprators
// //arithmatic oprator
// /*let a1=100;
// let b1=200

// console.log(a1+b1)
// console.log(b1-a1)
// console.log(a1*b1)
// console.log(a1/b1)
// console.log(a1%b1)

// //assigment  oprator
// let x=15;
// // it means x=x+10
// console.log("add assigment oprator:" +x)



// //logical oporator
//  let a=100;
//   let b=200;
//  let c=20;

// // //and && 
//  console.log(a>99 && b>50); //true

// // //or
//  console.log(a>20 || b>c && a<c)

// //bitwise
// // 1, 2, 4, 8, 16, 32,64, 128
// //20 ,64
// // 00010100
// // 01000000
// // 10000000 &&
// // 01010100 |
// console.log(20 && 64); //64
// console.log(20 | 64); //84



// //conditional statement(if and else)

// let num1 = 20;
// let num2 = 30;
// //ladder
// if (num1 > num2) {
//     //console.log("num1 is greater"+ num2);
//     console.log(`$(num1) is greater than $(num2)`)

// }
// else if (num1 < num2) {
//     console.log(`${num2} is greater than ${num1}`)
// }
// else {
//     console.log(`${num1} is equal to ${num2}`)
// }

// //ternary operator

// console.log(num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`)


// //condistional statement

// a = 1500;
// b = 10000;
// c = 5000;

// //nested  if 

// if (a > b) {
//     if (a > c) {
//        console.log( `${a} is greater than ${b} and ${c}`);
//     }
//     else{
//        console.log(`${c} is greater than ${a} and ${b}`);
// }
// }
// else if (b > c) {
//     console.log(`${b} is greater than ${a} and ${c}`)
// }
// else {
//     console.log(`${c} is greater than ${a} and ${b}`)
// }
// /*

// //loops
// // while loop
// // let j=20;
// // while(j<=30){
// //     console.log('fail');
// //     j++;
// // }

// // let o=10;
// // while(o<15){
// //     console.log('hello');
// //     o++;
// // }

// // do-while loop
// // let i1=5
// // do{ 
// //     console.log(i1);
// //      i1++
// // }
// // while(i1<7)


//     // let num =8;
//     // while(num<10){
//     //     console.log(num);
//     // }

// //pre incriment and decriments
// // let i=20;
// // console.log(i++);
// // console.log(++i);
// // console.log(i);
// // console.log(i--);
// // console.log(--i);
// */

// // for(let i=1;i<=10;i++){
// //     console.log(i);
// // }
// // console.log("***********50***********");
// // for (let i=10;i>=1;i--){
// //    let j=i*2;
// //    console.log(j);
// // }

// // let arr = [2,56,"akash",true,45,"hello" ,58 ,100,200,300];

// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);
// // console.log(arr[5]);
// // console.log(arr[6]);
// // console.log(arr[7]);
// // console.log(arr[8]);
// // console.log(arr[9]);


// // console.log("**********length**********");
// // console.log(arr.length);


// // console.log("**********for loop**********");
// // for(let i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }
// // console.log("**********for in**********");
// // // for in
// // for (let index in arr) {
// //     console.log(arr[index]);
// // }

// // console.log("**********for of**********");
// // //for of
// // for(let value of arr){
// //     console.log(value);}


// // 1

// console.log("********Print all even numbers from an array.**********");
// let arr2 = [0, -15, 3, 6, 8, 12, 17, 21, 25, 35, 42, 50, 67, 72, 85, 90, 101, 150, -4, 5, 9];
// //print even numbers
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 == 0) {
//         console.log(arr2[i]);
//     }
// }


// // 2
// console.log("**********Print numbers that are greater than 5 or less than 2**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 5 || arr2[i] < 2) {
//         console.log(arr2[i]);
//     }
// }

// // 3
// console.log("**********Count how many elements are positive and even.**********");
// let count = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 0 && arr2[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log("Count of positive and even numbers: " + count);

// // 4
// console.log("**********Print elements that are odd or divisible by 3.**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 !== 0 || arr2[i] % 3 === 0) {
//         console.log(arr2[i]);
//     }
// }


// // 5
// console.log("**********greater than 10 and less than 50**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 10 && arr2[i] < 50) {
//         console.log(arr2[i]);
//     }
// }
// // 6
// console.log("**********Print elements not equal to 0 and divisible by 5**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] !== 0 && arr2[i] % 5 === 0) {
//         console.log(arr2[i]);
//     }
// }

// // 7
// console.log("Replace all negative numbers with 0 if they are also odd.")
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0 && arr2[i] % 2 !== 0) {
//         console.log(arr2[i] = 0);
//     }
// }





// //extra question 
// console.log("**********Print elements that are odd add divisible by 3**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 !== 0 || arr2[i] % 3 === 0) {
//         console.log(arr2[i]);
//     }
// }


// //8
// console.log("**********Print elements either greater than 100 or even.**********");

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 100 || arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }

// //9
// console.log("**********Count how many elements are divisible by 3 or 7**********");
// let count1 = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 3 === 0 && arr2[i] % 7 === 0) {
//         count1++;
//         console.log(arr2[i]);
//     }
// }
// console.log("Count of elements divisible by 3 and 7: " + count1);

// //10
// console.log("**********Print all elements that are negative or zero**********");
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0 || arr2[i] === 0) {
//         console.log(arr2[i]);
//     }
// }

// //11
// console.log("**********Print elements divisible by both 2 and 3.**********");

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0 && arr2[i] % 3 === 0) {
//         console.log(arr2[i]);
//     }
// }

// //12
// console.log("**********Replace all elements less than 10 or greater than 100 with -1.**********")

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 10 || arr2[i] > 100) {
//         arr2[i] = -1;
//     }
// }
// console.log("Modified array: " + arr2);


// //13
// console.log("**********Count elements that are either even or greater than 50.**********")

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0 && arr2[i] > 50) {
//         count++;
//     }
// }
// console.log("Count of elements that are either even or greater than 50: " + count);


// console.log("**********Print the sum of elements that are between 10 and 30 (inclusive)**********")

// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] >= 10 && arr2[i] <= 30) {
//         sum = sum + arr2[i];
//     }
// }
// console.log("Sum of elements between 10 and 30: " + sum);



// console.log("**********Find the first element that is odd and greater than 20.**********")

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 20 && arr2[i] % 2 !== 0) {
//         console.log("First odd element greater than 20: " + arr2[i]);
//         break;
//     }
// }

// console.log("**********Print all elements not divisible by 2 and not divisible by 3**********")

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 !== 0 && arr2[i] % 3 !== 0) {
//         console.log(arr2[i]);
//     }
// }

// console.log("**********Double the value of elements if they are even or less than 5.**********")
// //Double the value of elements if they are even or less than 5.
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0 || arr2[i] < 5) {
//         console.log(arr2[i] *= 2);
//     }
// }


// console.log("**********Check if there is any element that is negative and a multiple of 4.**********")

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] < 0 && arr2[i] * 4 === 0) {
//         console.log("Found negative element that is a multiple of 4: " + arr2[i]);
//     }
// }

// // terenary oprator
// //  for( let i=0; i<arr2.length; i++){
// //     let result= (arr2[i]<0 && arr2[i]%4===0)? arr2[i] : 0;
// //         console.log(result);

// //  }

// console.log("**********Print all elements that are between 20 and 80 OR divisible by 7.**********")
// for (let i = 0; i < arr2.length; i++) {
//     if ((arr2[i] > 20 && arr2[i] < 80) || arr2[i] % 7 === 0) {
//         console.log(arr2[i]);
//     }
// }


// let count6 = 0;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0 || arr2[i] % 2 !== 0) {
//         console.log(arr2[i]);
//         count6++;
//     }
// }
// console.log("count of even and odd numbers: " + count6);


// console.log("**********student marks and pass and fail **********")
// let s1 = [45, 67, 89, 23, 56, 78, 90, 34, 23, 12, 67, 89, 90, 56, 43, 21, 34, 56, 78, 90, 99, 85, 11, 100, 9, 35, 25, 47, 68, 79, 88, 92];
// console.log("**********pass and fail**********")
// for (let i = 0; i < s1.length; i++) {
//     if (s1[i] >= 35) {
//         if (s1[i <= 85])
//             console.log(s1[i] + "  pass  with B grade");
//         else if (s1[i] >= 85 && s1[i] <= 94) {
//             console.log(s1[i] + " pass with A grade");
//         }
//         else if (s1[i] >= 94) {
//             console.log(s1[i] + " pass with A++ grade");
//         }
//         else if (s1[i] <= 70 && s1[i] >= 35) {
//             console.log(s1[i] + " only pass");
//         }
//         else if (s1[i] <= 35) {
//             console.log(s1[i] + "  fail");
//         }
//     }
//     else {
//         console.log(s1[i] + "  fail");
//     }
// }

// // chagpt question
// /* A coffee shop sells 5 cups of coffee every hour. Write a program that uses a loop to calculate how many cups they sell in 8 hours */


// console.log("**********A coffee shop sells 5 cups of coffee every hour. Write a program that uses a loop to calculate how many cups they sell in 8 hours**********")

// let total_cup = 0;
// let cup_per_hours = 5;
// let hours = 8;

// for (let i = 1; i <= hours; i++) {
//     //total_cup += cup_per_hours;
//     //console.log("total cup in  hours:"+ total_cup)
//     console.log("total cup in every hours:" + i * 5)
// }

// console.log("********** ou have a shopping list: 👉 Use a loop to print each item on a new line.**********")

// let arr5 = ["Milk", "Eggs", "Bread", "Butter"]
// for (let i = 0; i < arr5.length; i++) {
//     console.log(" list  of  shopping  ")
//     console.log("  ", arr5[i])
// }

// //user input (prompt)
// // const Name = prompt("enter the Name:")
// // console.log(Name)


//  //sep7 ( object and array)//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let user = {
//   name: 'akash',
//   address: {
//     street: "pardi",
//     district: " nagpur",
//     state: "maharastra",
//   },
//   email: "akashmoundekar@gmail.com",
//   age: 21,
//   course: 'FsD',

// }

//console.log(user)

//print value 1st type
// console.log(user.name)// specific properties
// console.log(user.address)//specific properties
// console.log(user.age)//specific properties
// console.log(user.course)
// console.log(user.email)

// //print value 2nd type
// console.log(user["age"]);


// //adding property in the object(insert)
// user.gender = 'male';
// console.log(user.gender)
// console.log(user)
// // user.phone_no = 86698552;
// console.log(user.phone_no)

// user.school = 'v.d.h.s';
// console.log(user.school)

// user.fees = 70000;
// console.log(user.fees)

// console.log(user)


// // change data in array(update)
// user.course = 'B.Tech'
// user.name = 'pankaj';
// user.fees = 900000;
// console.log(user)

// // delete
// delete user.address
// delete user.name
// delete user.age
// delete user .email
// delete user.fees
// console.log(user)

//destructur in array(array me se koi imp element bar- bar repeat krna hai to us important element(name,address) usko destructor krke alag se store kr lete hai)
//console.log(user.course)

// let userEmail= user.email;
// console.log(userEmail)// print a

// let userCourse= user.course;
// console.log(userCourse)
////////////////////////////////
//nested name cant write

// let{email, course, address} = user //syntax of destruchering 
/* console.log(email,course)*/
//console.log(user.address.state) //accessesing state
//console.log(user.address.district)//accessesingdistrict
//////////////////////////////////////////////////

//distucturing in object
//const emp={name:"akash",school:"v.d.d.s.h", age:21, }//object
// let{name, school}=Name;
//console.log()


//distruchering in the array
//const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let[fruits1,fruits2]= fruits // destructering in array

////////////////////////////////////////////////////////////////////////
// what is rest and sprade

//rest operator:
//rest operator is used to pass multiple arguments in a function
//it is used to convert the arguments into an array
function f10(...args){
  console.log(args)
}
f10(10,20,30,40,50)

// //spread operator
// //spread operator is used to convert an array into individual elements
// //it is used to pass an array as arguments in a function
// function f11(a,b,c){
//   console.log(a,b,c)
// }
// f11(...[10,20,30])



//rest or spread oprator denoted as {...},[... ]
// use in cloning of object 
//object
// let user = {
//     name: 'akash',
//     address:{
//         street:"pardi",
//         district:" nagpur",
//         state:"maharastra",
//     },
//      email:"akashmoundekar@gmail.com",
//     age: 21,
//     course: 'FsD',

// }

//
// //let user2= user //how to change a name in user 2 //cloning
// //this method for clonning and reassigning the value
// let user2 = {
//     ...user ,
//      name:'shane',
//      course: "vsil",
//      email: "pankajmoundekar458@gmail.com"

//     // when used a tripal dot then on the object the first curly bresses or the outer layer of the curly bresses is remove. whenever the all user data and information is tranfer in the user2 but name also property is also available then the user.name is overide the user2.name then the output is user.name that means akash is the output  
// }
// console.log(user2)



/////////////////////
// Array amd mearge

// let data = [50, 96, true, null, "akash"]//collection mix data
// // console.log(data)

// let nam1 = [" akash", "pankaj", "sahil", "nar", "jack"]//similar data
// let nam2 = ["vikram", "donakshi", "ajay", "andrew", "kundan"]
// let allname = [...nam1, ...nam2]; // mearge 
// console.log(allname)
//use a triple dot the outtter most layer of array is remove then all contain data are move to 



//orginal array for of loop  and object 
//1.object inside array
// let user=[ 
// //1
//   { name: 'akash', email: "akashmoundekar@gmail.com",age: 21, course: 'FsD'
// },  

// //2
// {  name: 'pankaj',email: "pankajmoundekar@gmail.com", age: 23,course: 'FsD',
// },

//3
// {  name: 'kajal',email: "kajalmoundekar@gmail.com", age: 22,course: 'FsD',
// }
// ]
// user[0].email= doflkmfo@gmail.com //change the email
// console.log(user[0].email)
// console.log(user[0].course)
// console.log(user[1].name)
// console.log(user[2].age)

// //useloop
// for(user of user){
//     console.log(user)
//   console.log(user.email)  
//   console.log(user.age)
// }






// let name1 = ["vikram", "donakshi", "ajay", "andrew", "kundan"]

// let count = 0;
// for (nam of name1) {
//     count++
//     console.log(nam)
// }
// console.log("" + count)



//huge data
// let data =
//   [{
//     "id": 1,
//     "Name": "Udale Reimer",
//     "email": "ureimer0@amazon.co.jp",
//     "gender": "Bigender",
//     "Address": "Apt 1733",
//     "department": "Support"
//   }, {
//     "id": 2,
//     "Name": "Beauregard Fossitt",
//     "email": "bfossitt1@tmall.com",
//     "gender": "Male",
//     "Address": "PO Box 29087",
//     "department": "Sales"
//   }, {
//     "id": 3,
//     "Name": "Christiana Gurdon",
//     "email": "cgurdon2@wunderground.com",
//     "gender": "Female",
//     "Address": "PO Box 16580",
//     "department": "Product Management"
//   }, {
//     "id": 4,
//     "Name": "Bradney Houdhury",
//     "email": "bhoudhury3@alibaba.com",
//     "gender": "Male",
//     "Address": "Suite 48",
//     "department": "Human Resources"
//   }, {
//     "id": 5,
//     "Name": "Boothe Dennington",
//     "email": "bdennington4@cdbaby.com",
//     "gender": "Polygender",
//     "Address": "Room 584",
//     "department": "Accounting"
//   }, {
//     "id": 6,
//     "Name": "Isidor Kilgallon",
//     "email": "ikilgallon5@chicagotribune.com",
//     "gender": "Male",
//     "Address": "Apt 965",
//     "department": "Marketing"
//   }, {
//     "id": 7,
//     "Name": "Johannah Ferro",
//     "email": "jferro6@etsy.com",
//     "gender": "Female",
//     "Address": "Room 1155",
//     "department": "Accounting"
//   }, {
//     "id": 8,
//     "Name": "Tomlin Such",
//     "email": "tsuch7@ucla.edu",
//     "gender": "Male",
//     "Address": "Suite 79",
//     "department": "Legal"
//   }, {
//     "id": 9,
//     "Name": "Irwinn Niccolls",
//     "email": "iniccolls8@nasa.gov",
//     "gender": "Male",
//     "Address": "PO Box 48681",
//     "department": "Product Management"
//   }, {
//     "id": 10,
//     "Name": "Jorgan Foddy",
//     "email": "jfoddy9@squarespace.com",
//     "gender": "Bigender",
//     "Address": "Suite 6",
//     "department": "Support"
//   }, {
//     "id": 11,
//     "Name": "Zebadiah Wapples",
//     "email": "zwapplesa@springer.com",
//     "gender": "Male",
//     "Address": "Suite 21",
//     "department": "Training"
//   }, {
//     "id": 12,
//     "Name": "Cindi Luckett",
//     "email": "cluckettb@squarespace.com",
//     "gender": "Female",
//     "Address": "20th Floor",
//     "department": "Sales"
//   }, {
//     "id": 13,
//     "Name": "Buddie Woolaston",
//     "email": "bwoolastonc@list-manage.com",
//     "gender": "Male",
//     "Address": "Suite 16",
//     "department": "Marketing"
//   }, {
//     "id": 14,
//     "Name": "Reade Binstead",
//     "email": "rbinsteadd@stanford.edu",
//     "gender": "Male",
//     "Address": "Suite 19",
//     "department": "Business Development"
//   }, {
//     "id": 15,
//     "Name": "Penny Brandts",
//     "email": "pbrandtse@guardian.co.uk",
//     "gender": "Male",
//     "Address": "Suite 34",
//     "department": "Human Resources"
//   }, {
//     "id": 16,
//     "Name": "Rafa Kippie",
//     "email": "rkippief@mac.com",
//     "gender": "Female",
//     "Address": "PO Box 70798",
//     "department": "Services"
//   }, {
//     "id": 17,
//     "Name": "Bondy Langton",
//     "email": "blangtong@github.io",
//     "gender": "Male",
//     "Address": "PO Box 65060",
//     "department": "Engineering"
//   }, {
//     "id": 18,
//     "Name": "Wendeline Purple",
//     "email": "wpurpleh@gravatar.com",
//     "gender": "Female",
//     "Address": "Apt 1374",
//     "department": "Engineering"
//   }, {
//     "id": 19,
//     "Name": "Kally Gribble",
//     "email": "kgribblei@dailymail.co.uk",
//     "gender": "Female",
//     "Address": "Suite 2",
//     "department": "Sales"
//   }, {
//     "id": 20,
//     "Name": "Devin Charette",
//     "email": "dcharettej@nsw.gov.au",
//     "gender": "Female",
//     "Address": "Room 308",
//     "department": "Sales"
//   }, {
//     "id": 21,
//     "Name": "Gearard McNysche",
//     "email": "gmcnyschek@nps.gov",
//     "gender": "Non-binary",
//     "Address": "9th Floor",
//     "department": "Product Management"
//   }, {
//     "id": 22,
//     "Name": "Christin Nezey",
//     "email": "cnezeyl@unesco.org",
//     "gender": "Female",
//     "Address": "Apt 1719",
//     "department": "Accounting"
//   }, {
//     "id": 23,
//     "Name": "Blayne Lindenstrauss",
//     "email": "blindenstraussm@mac.com",
//     "gender": "Male",
//     "Address": "18th Floor",
//     "department": "Human Resources"
//   }, {
//     "id": 24,
//     "Name": "Libby Tredwell",
//     "email": "ltredwelln@spotify.com",
//     "gender": "Female",
//     "Address": "Room 1188",
//     "department": "Marketing"
//   }, {
//     "id": 25,
//     "Name": "Mathias Luckcuck",
//     "email": "mluckcucko@mapquest.com",
//     "gender": "Male",
//     "Address": "PO Box 80904",
//     "department": "Training"
//   }, {
//     "id": 26,
//     "Name": "Alvie Keppie",
//     "email": "akeppiep@sitemeter.com",
//     "gender": "Male",
//     "Address": "9th Floor",
//     "department": "Legal"
//   }, {
//     "id": 27,
//     "Name": "Berti Jeannel",
//     "email": "bjeannelq@imgur.com",
//     "gender": "Genderqueer",
//     "Address": "Apt 1249",
//     "department": "Sales"
//   }, {
//     "id": 28,
//     "Name": "Fowler Belfit",
//     "email": "fbelfitr@gnu.org",
//     "gender": "Agender",
//     "Address": "Apt 700",
//     "department": "Support"
//   }, {
//     "id": 29,
//     "Name": "Delainey Blaisdale",
//     "email": "dblaisdales@printfriendly.com",
//     "gender": "Male",
//     "Address": "4th Floor",
//     "department": "Marketing"
//   }, {
//     "id": 30,
//     "Name": "Evyn Inder",
//     "email": "eindert@goodreads.com",
//     "gender": "Male",
//     "Address": "Room 1945",
//     "department": "Human Resources"
//   }, {
//     "id": 31,
//     "Name": "Beitris Quenell",
//     "email": "bquenellu@surveymonkey.com",
//     "gender": "Female",
//     "Address": "Apt 411",
//     "department": "Engineering"
//   }, {
//     "id": 32,
//     "Name": "Catlin Trubshaw",
//     "email": "ctrubshawv@ucla.edu",
//     "gender": "Female",
//     "Address": "Suite 24",
//     "department": "Engineering"
//   }, {
//     "id": 33,
//     "Name": "Pip Ridulfo",
//     "email": "pridulfow@xinhuanet.com",
//     "gender": "Male",
//     "Address": "PO Box 60247",
//     "department": "Sales"
//   }, {
//     "id": 34,
//     "Name": "Regan Baldock",
//     "email": "rbaldockx@vkontakte.ru",
//     "gender": "Female",
//     "Address": "8th Floor",
//     "department": "Legal"
//   }, {
//     "id": 35,
//     "Name": "Judah Winn",
//     "email": "jwinny@last.fm",
//     "gender": "Male",
//     "Address": "16th Floor",
//     "department": "Research and Development"
//   }, {
//     "id": 36,
//     "Name": "Ramsay Stancer",
//     "email": "rstancerz@nih.gov",
//     "gender": "Male",
//     "Address": "Suite 47",
//     "department": "Support"
//   }, {
//     "id": 37,
//     "Name": "Annamarie Lindro",
//     "email": "alindro10@github.io",
//     "gender": "Female",
//     "Address": "Apt 433",
//     "department": "Engineering"
//   }, {
//     "id": 38,
//     "Name": "Cleon Kopec",
//     "email": "ckopec11@biblegateway.com",
//     "gender": "Male",
//     "Address": "Suite 47",
//     "department": "Training"
//   }, {
//     "id": 39,
//     "Name": "Abner Duggen",
//     "email": "aduggen12@hc360.com",
//     "gender": "Male",
//     "Address": "Suite 86",
//     "department": "Engineering"
//   }, {
//     "id": 40,
//     "Name": "Idette Brazur",
//     "email": "ibrazur13@walmart.com",
//     "gender": "Female",
//     "Address": "18th Floor",
//     "department": "Engineering"
//   }, {
//     "id": 41,
//     "Name": "Toddie Godney",
//     "email": "tgodney14@jalbum.net",
//     "gender": "Male",
//     "Address": "4th Floor",
//     "department": "Services"
//   }, {
//     "id": 42,
//     "Name": "Mayor Atling",
//     "email": "matling15@altervista.org",
//     "gender": "Agender",
//     "Address": "Room 630",
//     "department": "Business Development"
//   }, {
//     "id": 43,
//     "Name": "Bevon Tettley",
//     "email": "btettley16@tamu.edu",
//     "gender": "Male",
//     "Address": "Room 1070",
//     "department": "Services"
//   }, {
//     "id": 44,
//     "Name": "Penn Gaylord",
//     "email": "pgaylord17@123-reg.co.uk",
//     "gender": "Male",
//     "Address": "Room 1687",
//     "department": "Business Development"
//   }, {
//     "id": 45,
//     "Name": "Dehlia Kasper",
//     "email": "dkasper18@yahoo.co.jp",
//     "gender": "Female",
//     "Address": "PO Box 16493",
//     "department": "Business Development"
//   }, {
//     "id": 46,
//     "Name": "Ysabel Havers",
//     "email": "yhavers19@latimes.com",
//     "gender": "Female",
//     "Address": "19th Floor",
//     "department": "Human Resources"
//   }, {
//     "id": 47,
//     "Name": "Art Ridler",
//     "email": "aridler1a@mapy.cz",
//     "gender": "Male",
//     "Address": "Room 1325",
//     "department": "Legal"
//   }, {
//     "id": 48,
//     "Name": "Alonzo Crease",
//     "email": "acrease1b@prnewswire.com",
//     "gender": "Male",
//     "Address": "17th Floor",
//     "department": "Engineering"
//   }, {
//     "id": 49,
//     "Name": "Ania Krier",
//     "email": "akrier1c@oakley.com",
//     "gender": "Female",
//     "Address": "16th Floor",
//     "department": "Legal"
//   }, {
//     "id": 50,
//     "Name": "Garwood Beetlestone",
//     "email": "gbeetlestone1d@seattletimes.com",
//     "gender": "Male",
//     "Address": "Apt 21",
//     "department": "Sales"
//   }, {
//     "id": 51,
//     "Name": "Ian Madoc-Jones",
//     "email": "imadocjones1e@house.gov",
//     "gender": "Male",
//     "Address": "12th Floor",
//     "department": "Legal"
//   }, {
//     "id": 52,
//     "Name": "Meggi Griffe",
//     "email": "mgriffe1f@jimdo.com",
//     "gender": "Female",
//     "Address": "Apt 1970",
//     "department": "Services"
//   }, {
//     "id": 53,
//     "Name": "Ricoriki Narrie",
//     "email": "rnarrie1g@ucoz.ru",
//     "gender": "Male",
//     "Address": "Suite 51",
//     "department": "Training"
//   }, {
//     "id": 54,
//     "Name": "Lauren Heliet",
//     "email": "lheliet1h@cornell.edu",
//     "gender": "Male",
//     "Address": "PO Box 5639",
//     "department": "Engineering"
//   }, {
//     "id": 55,
//     "Name": "Neel Pikesley",
//     "email": "npikesley1i@soundcloud.com",
//     "gender": "Male",
//     "Address": "Room 651",
//     "department": "Marketing"
//   }, {
//     "id": 56,
//     "Name": "Alberto Whyborn",
//     "email": "awhyborn1j@nih.gov",
//     "gender": "Male",
//     "Address": "Suite 96",
//     "department": "Accounting"
//   }, {
//     "id": 57,
//     "Name": "Abner Greenall",
//     "email": "agreenall1k@angelfire.com",
//     "gender": "Male",
//     "Address": "Suite 24",
//     "department": "Human Resources"
//   }, {
//     "id": 58,
//     "Name": "Inigo Broune",
//     "email": "ibroune1l@sbwire.com",
//     "gender": "Male",
//     "Address": "PO Box 49575",
//     "department": "Product Management"
//   }, {
//     "id": 59,
//     "Name": "Chantal Perfili",
//     "email": "cperfili1m@cyberchimps.com",
//     "gender": "Female",
//     "Address": "Suite 17",
//     "department": "Marketing"
//   }, {
//     "id": 60,
//     "Name": "Violetta Huggons",
//     "email": "vhuggons1n@hhs.gov",
//     "gender": "Female",
//     "Address": "Apt 597",
//     "department": "Accounting"
//   }, {
//     "id": 61,
//     "Name": "Freddy Darwen",
//     "email": "fdarwen1o@bizjournals.com",
//     "gender": "Male",
//     "Address": "Apt 1998",
//     "department": "Marketing"
//   }, {
//     "id": 62,
//     "Name": "Lew Waleran",
//     "email": "lwaleran1p@ameblo.jp",
//     "gender": "Male",
//     "Address": "Suite 64",
//     "department": "Business Development"
//   }, {
//     "id": 63,
//     "Name": "Saunders Ashman",
//     "email": "sashman1q@trellian.com",
//     "gender": "Male",
//     "Address": "PO Box 66596",
//     "department": "Human Resources"
//   }, {
//     "id": 64,
//     "Name": "Xavier Locksley",
//     "email": "xlocksley1r@youku.com",
//     "gender": "Male",
//     "Address": "PO Box 56773",
//     "department": "Training"
//   }, {
//     "id": 65,
//     "Name": "Hirsch Malamore",
//     "email": "hmalamore1s@cloudflare.com",
//     "gender": "Genderqueer",
//     "Address": "10th Floor",
//     "department": "Engineering"
//   }, {
//     "id": 66,
//     "Name": "Hilde Pratty",
//     "email": "hpratty1t@stanford.edu",
//     "gender": "Female",
//     "Address": "Apt 419",
//     "department": "Sales"
//   }, {
//     "id": 67,
//     "Name": "Scottie Phifer",
//     "email": "sphifer1u@ca.gov",
//     "gender": "Bigender",
//     "Address": "Room 49",
//     "department": "Research and Development"
//   }, {
//     "id": 68,
//     "Name": "Micaela Fetherston",
//     "email": "mfetherston1v@ibm.com",
//     "gender": "Female",
//     "Address": "7th Floor",
//     "department": "Accounting"
//   }, {
//     "id": 69,
//     "Name": "Codi Meenehan",
//     "email": "cmeenehan1w@wufoo.com",
//     "gender": "Female",
//     "Address": "PO Box 63705",
//     "department": "Accounting"
//   }, {
//     "id": 70,
//     "Name": "Ashly Tulley",
//     "email": "atulley1x@odnoklassniki.ru",
//     "gender": "Female",
//     "Address": "Suite 52",
//     "department": "Human Resources"
//   }, {
//     "id": 71,
//     "Name": "Gayel Gilardi",
//     "email": "ggilardi1y@skyrock.com",
//     "gender": "Polygender",
//     "Address": "PO Box 36214",
//     "department": "Product Management"
//   }, {
//     "id": 72,
//     "Name": "Alex Farries",
//     "email": "afarries1z@ca.gov",
//     "gender": "Male",
//     "Address": "20th Floor",
//     "department": "Legal"
//   }, {
//     "id": 73,
//     "Name": "Giulia Coo",
//     "email": "gcoo20@a8.net",
//     "gender": "Female",
//     "Address": "Suite 71",
//     "department": "Accounting"
//   }, {
//     "id": 74,
//     "Name": "Drusie Zorzini",
//     "email": "dzorzini21@godaddy.com",
//     "gender": "Female",
//     "Address": "PO Box 7977",
//     "department": "Marketing"
//   }, {
//     "id": 75,
//     "Name": "Andrei Jelf",
//     "email": "ajelf22@npr.org",
//     "gender": "Female",
//     "Address": "Apt 1153",
//     "department": "Engineering"
//   }, {
//     "id": 76,
//     "Name": "Vite Mandel",
//     "email": "vmandel23@blogtalkradio.com",
//     "gender": "Male",
//     "Address": "1st Floor",
//     "department": "Engineering"
//   }, {
//     "id": 77,
//     "Name": "Breena Lowers",
//     "email": "blowers24@parallels.com",
//     "gender": "Female",
//     "Address": "Suite 100",
//     "department": "Human Resources"
//   }, {
//     "id": 78,
//     "Name": "Merrili Waby",
//     "email": "mwaby25@google.ca",
//     "gender": "Female",
//     "Address": "Apt 1026",
//     "department": "Sales"
//   }, {
//     "id": 79,
//     "Name": "Lexis Lundy",
//     "email": "llundy26@hc360.com",
//     "gender": "Female",
//     "Address": "PO Box 44654",
//     "department": "Human Resources"
//   }, {
//     "id": 80,
//     "Name": "Cy Balffye",
//     "email": "cbalffye27@geocities.jp",
//     "gender": "Non-binary",
//     "Address": "PO Box 87920",
//     "department": "Business Development"
//   }, {
//     "id": 81,
//     "Name": "Cyrill Maharg",
//     "email": "cmaharg28@house.gov",
//     "gender": "Male",
//     "Address": "18th Floor",
//     "department": "Accounting"
//   }, {
//     "id": 82,
//     "Name": "Timofei Dobbinson",
//     "email": "tdobbinson29@sourceforge.net",
//     "gender": "Male",
//     "Address": "PO Box 31459",
//     "department": "Legal"
//   }, {
//     "id": 83,
//     "Name": "Sarina Jirak",
//     "email": "sjirak2a@nyu.edu",
//     "gender": "Female",
//     "Address": "Room 911",
//     "department": "Support"
//   }, {
//     "id": 84,
//     "Name": "Marcella Rains",
//     "email": "mrains2b@furl.net",
//     "gender": "Female",
//     "Address": "Room 1831",
//     "department": "Engineering"
//   }, {
//     "id": 85,
//     "Name": "Lucas Aberdalgy",
//     "email": "laberdalgy2c@sciencedirect.com",
//     "gender": "Male",
//     "Address": "Suite 94",
//     "department": "Research and Development"
//   }, {
//     "id": 86,
//     "Name": "Belia O'Corrin",
//     "email": "bocorrin2d@usnews.com",
//     "gender": "Female",
//     "Address": "1st Floor",
//     "department": "Sales"
//   }, {
//     "id": 87,
//     "Name": "Marcelo Gorler",
//     "email": "mgorler2e@php.net",
//     "gender": "Male",
//     "Address": "Room 196",
//     "department": "Sales"
//   }, {
//     "id": 88,
//     "Name": "Moshe Martland",
//     "email": "mmartland2f@jalbum.net",
//     "gender": "Male",
//     "Address": "Apt 1412",
//     "department": "Business Development"
//   }, {
//     "id": 89,
//     "Name": "Aryn Ebbrell",
//     "email": "aebbrell2g@springer.com",
//     "gender": "Genderqueer",
//     "Address": "PO Box 76098",
//     "department": "Sales"
//   }, {
//     "id": 90,
//     "Name": "Towny MacIlory",
//     "email": "tmacilory2h@accuweather.com",
//     "gender": "Male",
//     "Address": "Room 312",
//     "department": "Human Resources"
//   }, {
//     "id": 91,
//     "Name": "Woody Brodley",
//     "email": "wbrodley2i@tinyurl.com",
//     "gender": "Male",
//     "Address": "2nd Floor",
//     "department": "Support"
//   }, {
//     "id": 92,
//     "Name": "Nils Decort",
//     "email": "ndecort2j@ftc.gov",
//     "gender": "Male",
//     "Address": "Room 1967",
//     "department": "Business Development"
//   }, {
//     "id": 93,
//     "Name": "Jase Vedeshkin",
//     "email": "jvedeshkin2k@freewebs.com",
//     "gender": "Non-binary",
//     "Address": "PO Box 92388",
//     "department": "Human Resources"
//   }, {
//     "id": 94,
//     "Name": "Orrin Tapply",
//     "email": "otapply2l@angelfire.com",
//     "gender": "Male",
//     "Address": "Apt 1005",
//     "department": "Services"
//   }, {
//     "id": 95,
//     "Name": "Philip Boatswain",
//     "email": "pboatswain2m@ask.com",
//     "gender": "Genderqueer",
//     "Address": "Apt 1375",
//     "department": "Engineering"
//   }, {
//     "id": 96,
//     "Name": "Sutherlan Drews",
//     "email": "sdrews2n@twitpic.com",
//     "gender": "Male",
//     "Address": "PO Box 74366",
//     "department": "Legal"
//   }, {
//     "id": 97,
//     "Name": "Myrtle Branscombe",
//     "email": "mbranscombe2o@etsy.com",
//     "gender": "Female",
//     "Address": "PO Box 56531",
//     "department": "Human Resources"
//   }, {
//     "id": 98,
//     "Name": "Celestina Naul",
//     "email": "cnaul2p@pagesperso-orange.fr",
//     "gender": "Female",
//     "Address": "Apt 446",
//     "department": "Legal"
//   }, {
//     "id": 99,
//     "Name": "Steffane Littlewood",
//     "email": "slittlewood2q@webeden.co.uk",
//     "gender": "Female",
//     "Address": "8th Floor",
//     "department": "Engineering"
//   }, {
//     "id": 100,
//     "Name": "Delaney Cuddihy",
//     "email": "dcuddihy2r@latimes.com",
//     "gender": "Male",
//     "Address": "Room 1389",
//     "department": "Product Management"
//   }]


// console.log(data)
// console.log(data.length)

// let count=0;
// for( userdata of data){
//      //console.log(userdata.Address)
//      //console.log(userdata.gender)
//    if(userdata.gender== 'Female'){
//     console.log(userdata.Name)
//     console.log(userdata.email)
//     console.log(userdata.department)
//     count++
//    }
//    console.log(count)
// }


//how to create array into the data 
// let femaleEmployeesNames = []
// for (userdata of data) {
//   //console.log(userdata.Address)
//   //console.log(userdata.gender)
//   if (userdata.department == 'deparment') {
//     femaleEmployeesNames.push(userdata.id, userdata.Name, userdata.Address)//push krne se sara data ek array me convert ho gya 
//   }
// }
// console.log(femaleEmployeesNames)


//   let jajo= []
// for( userdata of data){
//      //console.log(userdata.Address)
//      //console.log(userdata.gender)
//    if(userdata.department== 'Legal'){
//    jajo.push(userdata.id, userdata.Name, userdata.Address )//push krne se sara data ek array me convert ho gya 
//    }
//   }
//   console.log(jajo)



//adding school in array
// data.school = 'v.d.h.s';
// console.log(data.school)
// console.log(data)

//Question

// let employees = [
//   {
//     name: "John Doe",
//     age: 28,
//     department: "Engineering",
//     salary: 75000,
//     isPermanent: true,
//   },
//   {
//     name: "Jane Smith",
//     age: 34,
//     department: "HR",
//     salary: 60000,
//     isPermanent: false,
//   },
//   {
//     name: "Sam Johnson",
//     age: 45,
//     department: "Finance",
//     salary: 90000,
//     isPermanent: true,
//   },
//   {
//     name: "Sara White",
//     age: 30,
//     department: "Engineering",
//     salary: 85000,
//     isPermanent: false,
//   },
//   {
//     name: "Tom Brown",
//     age: 23,
//     department: "Marketing",
//     salary: 50000,
//     isPermanent: true,
//   },
// ];

// Que1
// for (Emp of employees) {
//   console.log(Emp.name)

// }

////////////////////////
//Que2
//  Print All Attributes of Each Employee
//outer loopfor(const Emp of Employee){
// Outer loop: iterate over each employee object

// for (const employee of employees){
//   console.log("Employee:");
//   for(const key in employee) {
//     console.log(` ${key}: ${employee[key]}`);
//   }
// }

//ans number 3

// for(const em of employees){
//   if(em.department==="Engineering"){
//     console.log(em.name, em.age, em.salary)
//     console.log(`${em.name}: ${em.age} , ${em.salary}`)
//   }
// }

//ans number 4
// let sum = 0;

// for (const em of employees) {
//   sum += em.salary;
// }
// console.log(`total salary is :${sum}`)

//que 5
// for(const em of employees){
//   if(em.salary>70000){
//     console.log(em.name)
//   }
// }

//Que6;
// let count = 0;
// for (const em of employees) {

//   if (em.isPermanent === true) {
//       count++
//   }
//   // console.log(count)//number of count krne ke liye
// }
// console.log(count)// ek bar ke answer ke liye

//Que67;
// Use a for...of loop to determine the employee with the maximum age.


// let oldemployee = employees[0];

// for (const em of employees) {
//   if (em.age > oldemployee.age) {
//     oldemployee = em;
//   }
// }
// console.log(`The oldest employee is ${oldemployee.name}, age ${oldemployee.age}.`);

//8
//agar group means a array me krnahai to .push method ka use krte hai;
// const groupedByDepartment = {};

// for (const employee of employees) {
//   const dept = employee.department;
//   const name = employee.name;

//   if (!groupedByDepartment[dept]) {
//     groupedByDepartment[dept] = [];
//   }

//   groupedByDepartment[dept].push(name);
// }

// console.log(groupedByDepartment);

/////////////////////////////////////////////////////
// let groupedByDepartment={}
//  for (const em of employees){
//   let depa= em.department;
//   let name= em.name;
//   if(!groupedByDepartment[depa]){
//     groupedByDepartment[depa]=[];
//   }
//   groupedByDepartment[depa] .push(name)
//  }
//  console.log(groupedByDepartment)

// let groupWithId = {}
// for (const em of employees) {
//        let depa = em.department;
//  let name = em.name;
//   if (!groupWithId[depa]){
//     groupWithId[depa]=[ ];
//   }
//   groupWithId[depa].push(name)
// }
// console.log(groupWithId)


// //9
// let name=0;
// for(let em  of employees){
//   if(em.name==="John Doe"){
//     console.log("atrribute of joan doe: ")
//   }

//   for(let key in em){
//     console.log(`  ${key}: ${em[key]}`);
//   }
// }









//13/09/25     saturday////////////////////////////////////////////////////////////////////////////////////////////
//1st
// let arr = [2, 4, 7, 9, "hello", true]
// for (let i = 0; i > arr.length; i++) {
//   if (typeof [arr] === number) {
//     console.log(arr[i])
//   }
// }

//2nd
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     result += arr[i];
//   }
// }
// if (sum === 20) {
//   console.log("sum is ")
// }



// let sum2 = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     sum += arr[i];
//   }
// }

// if (sum2 === 20) {
//   console.log("✅ Sum is equal to 20");
// } else {
//   console.log("❌ Sum is not equal to 20, it's " + sum2);
// }


//functions

// function is a block of code for specific task, when the code are maintainable and reusable

// syntax

// function nameoffunction(){
//   //write a code or logic
// }

// type of function
// function declaration;
//parameterised function/ function expression
//arrow function;
//ananymous function
//IIFE (Immediately Invoked Function Expression)
//sum of two number ;

let n1 = 10
let n2 = 20

function sum2() {
  console.log(n1 + n2)
}

sum2();

//dyamicaly sum of 2 number

function f1(a, b) {
  console.log(a + b)
}
f1(10, 20)
f1(85, 96)

//take a number as a argument and return square;
function square(a) {
  console.log(a * a)
}
square(50)

function f2(a, b) {
  console.log(a * a * b)
}
f2(20, 20)
f2(10, 10)

// find max
function f3(a, b) {
  if (a > b) {
    console.log(`${a} is greater`)
  }
  else {
    console.log(`${b} is max`)
  }

}
f3(10, 50)

f3(70, 85)

f3(78, 11)

function fun(a) {
  console.log(a)
}

fun("pankaj") //string
fun(50)// number
fun([10, 20, 30, 40.50, 60, 70, 80, 90])

// //write a fun which takes an array as argument and return the sum of that array

const total = function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum)
}
total([10, 58, 75, 65])

// //write a fun which takes an array as argument and return the max of that array

const total2 = function (arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num
    }
  }
  console.log(max)
}
total2([10, 50, 65, 76, 84]) //called method

//write a function that takes two arguments an array and a key 
// //return the index number of that key if present 

function f4(arr, key) {
  for (let index in arr) {
    if (arr[index] == key) {
      console.log(`index of ${key} is ${index}`)
    }
  }
}
f4([5, 9, 8, 5, 6, 7, 2, 4], 7)//called method
f4([5, 87, 66, 78, 26, 4], 4)//called method
console.log("********************852852852852852852852852******************")
///////////////////////////////////////////////// 
// function in object
let laptop = {
  brand: "Hp",
  ram: "8gb",
  Storage: "512GB",
  Price: 50000,
  color: "black",
  screen: 13,
}

//write a function that takes two arguments an objects and a property and return that value;

function f6(obj, key) {
  for (let prop in obj) {
    if (prop == key) {
      console.log(obj[prop])
    }
  }
}
f6(laptop, "color")
f6(laptop, "brand")
f6(laptop, "ram")
f6(laptop, "Storage")


// 2nd way

function obj(o, k) {
  console.log(o[k])
}

obj(laptop, "Price" )
obj(laptop, "Storage")
obj(laptop, "ram")

//write a function that takes two arguments an array and a key and return index number of that key if present

function f7(arr, key) {
  for (let index in arr) {
    if (arr[index] == key) {
      console.log(`index of ${key} is ${index}`)
    }
  }
}

f7([5, 8, 7, 6, 55, 25], 25)
f7([5, 9, 8, 5, 6, 7, 2, 4], 4)
f7([5, 87, 66, 78, 26, 4], 26)
console.log("*****************************kdknklfd****************************")

//write a function that takes two arguments an array and a key and return index number of that key if present


function f44(arr,key){
  for(let index in arr){
    if(arr[index] == key){
      console.log(`index of ${key} is${index}`)
    }
  }
}
f44([5, 9, 8, 55, 6, 7, 2, 4],5)
f44([55, 98, 18, 557,2,78 ,67, 97, 72, 24],2)






//default parameter////////////////////////////////////////////
//rest operator and spread operator
//return

//default parameter cant be changed;
//if we do not pass the value of b then it will take default value of b=10

function f9(a, b = 10) {
  console.log(a + b)
}
f9(10)
f9(20) //if we pass the value of b then it will be already take a default value


let number = [10, 20, 30, 40, 50]

//write a that take array as a argument and return even number from that array
function getEvenNumbers(arr) {
  let evenNumbers = [];               //array to store even numbers
  for (let num of arr) {
    if (num % 2 == 0) {
      evenNumbers.push(num); //adding element on the last in the array 
    }
  }
  //  console.log("Even numbers are:",evenNumbers) // agar console kiya hai to value display hoti hai but return keyword use kiya to value store hojati hai
  return evenNumbers; // return value that value can be stored in a variable and can be used later
}
console.log(getEvenNumbers(number));
console.log("***********");
console.log(getEvenNumbers([11, 22, 33, 44, 55, 66, 77, 88, 99]));



// write a function that take number as a argument and return sum of both number return sum and find the element inside number of a same index
function sumAndFindIndexa(a, b) {
  let sum = a + b;
  let index = number.indexOf(a);
  return { sum, index };
}

//write a fun that take two number as a argument and sum of both number return sum and find the element inside number of a same index
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
function f11(a, b) {
  console.log(a + b)
}
f11(10, 20)//callback
f11(50, 60) //callback

//write a function that take two number as a argument and sum of both number return sum and find the element inside number of a same index
function f12(a, b) {
  console.log(number5[a + b])
}
let number5 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
f12(2, 3)//callback
f12(1, 4)//callback
f12(1, 5)//callback




// when this data are shift after the code 
function f13(a, b) {
  return a + b
}
f13(3,8)
//console.log(f13(10,20))
let result = f13(3, 5)//callback
console.log(result);

console.log("***********");
let number8 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(number8[result]);

console.log("***********");
console.log(number8[f13(1, 4)]);// must imp //callback

console.log(number8[f13(2, 4)])


//default parameter
//if we do not pass the value of b then it will take default value of b=10

function f14(a, b = 10) {
  return a + b//agar return kr rha hai to print krne ke liye callback ko console me likh na padta hai
}
console.log(f14(10))//callback
console.log(f14(20))//callback

// using three parameter

function f15(a, b, c = 10) {
  return a + b + c
}
console.log(f15(1, 5));//callback
console.log(f15(10, 20));//callback


function welcome(name = 'ananymous') {
  return name
}
console.log(welcome('pankaj'))//callback

//spread operator whenever use a ... it is called spread operator
//spread operator is used to convert an array into individual elements
//it is used to pass an array as arguments in a function
//spread operator is used to copy the array
//spread operator is used to merge two arrays
//spread operator is used to in array or object then the object or array upper layer is removed

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(...arr2)


let arr3 = [100, 200, 300]
let arr4 = [20, 30, 40]
let arr5 = [...arr3, ...arr4]
console.log(arr5)



//...c is rest operator. whenever use a and b got a value in array and remaining value got in c in the array from because of rest operator
//rest operator is used to pass multiple arguments in a function
//it is used to convert the arguments into an array
//sum uknown number of arguments 
function sum(...c) {  //convert into array
  let add = 0;
  for (let num of c) {
    add += num
  }
  console.log(add)
}
sum(45, 85, 99, 75, 25, 64, 14, 85, 96, 500)










//rest operator
//rest operator is used to pass multiple arguments in a function
//it is used to convert the arguments into an array
// function f10(...args){
//   console.log(args)
// }
// f10(10,20,30,40,50)

// //spread operator
// //spread operator is used to convert an array into individual elements
// //it is used to pass an array as arguments in a function
// function f11(a,b,c){
//   console.log(a,b,c)
// }));
// f11(...[10,20,30])









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//14/09/2025 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // write the function that takes and array
// // const data = [
// //   { id: 1, name: "Alice", age: 25 },
// //   { id: 2, name: "Bob", age: 30 },
// //   { id: 3, name: "Charlie", age: 35 }
// // ];

// // function findDataById(id) {
// //   return data.find(item=>item.id===id  )
// // }
// // // Use
// // const result = findDataById(2);
// // console.log(result);

// // console.log(findDataById(3))







let usersData = [{
  "id": 56,
  "name": "Gloriana Allitt",
  "email": "gallitt0@tumblr.com",
  "gender": "Female",
  "address": "PO Box 5459",
  "department": "Human Resources",
  "salary": 25000
}, {
  "id": 2,
  "name": "Trueman Tebboth",
  "email": "ttebboth1@wikipedia.org",
  "gender": "Male",
  "address": "Room 191",
  "department": "Human Resources",
  "salary": 35000
}, {
  "id": 3,
  "name": "Ruthy Kiraly",
  "email": "rkiraly2@pbs.org",
  "gender": "Female",
  "address": "PO Box 94670",
  "department": "Human Resources",
  "salary": 20000
}, {
  "id": 4,
  "name": "Jazmin Clausson",
  "email": "jclausson3@apache.org",
  "gender": "Female",
  "address": "11th Floor",
  "department": "Human Resources",
  "salary": 25000
}, {
  "id": 5,
  "name": "Patrizia Roycroft",
  "email": "proycroft4@stumbleupon.com",
  "gender": "Female",
  "address": "PO Box 64077",
  "department": "Training",
  "salary": 22000
}, {
  "id": 6,
  "name": "Becka Maskelyne",
  "email": "bmaskelyne5@answers.com",
  "gender": "Female",
  "address": "Suite 7",
  "department": "Human Resources",
  "salary": 15000
}, {
  "id": 7,
  "name": "Katharine Giffkins",
  "email": "kgiffkins6@theguardian.com",
  "gender": "Female",
  "address": "Apt 995",
  "department": "Services",
  "salary": 2500
}, {
  "id": 8,
  "name": "Montgomery Holme",
  "email": "mholme7@quantcast.com",
  "gender": "Male",
  "address": "PO Box 62782",
  "department": "Human Resources",
  "salary": 2000
}, {
  "id": 9,
  "name": "Branden Bake",
  "email": "bbake8@parallels.com",
  "gender": "Male",
  "address": "Suite 86",
  "department": "Training",
  "salary": 75000
}, {
  "id": 10,
  "name": "Yorke Amiss",
  "email": "yamiss9@sfgate.com",
  "gender": "Male",
  "address": "18th Floor",
  "department": "Training",
  "salary": 55000
}, {
  "id": 11,
  "name": "Carter Brien",
  "email": "cbriena@ihg.com",
  "gender": "Male",
  "address": "Room 14",
  "department": "Human Resources",
  "salary": 45000
}, {
  "id": 12,
  "name": "Freda Landrieu",
  "email": "flandrieub@shinystat.com",
  "gender": "Female",
  "address": "Apt 855",
  "department": "Training",
  "salary": 64000
}, {
  "id": 13,
  "name": "Jackie Marsland",
  "email": "jmarslandc@dedecms.com",
  "gender": "Female",
  "address": "PO Box 26898",
  "department": "Training",
  "salary": 39000
}, {
  "id": 104,
  "name": "Teddy Guidera",
  "email": "tguiderad@weibo.com",
  "gender": "Female",
  "address": "18th Floor",
  "department": "Services",
  "salary": 71000
}, {
  "id": 15,
  "name": "Daven Goter",
  "email": "dgotere@loc.gov",
  "gender": "Male",
  "address": "Room 342",
  "department": "Services",
  "salary": 85000
}]
//write a function that takes two arguments an array and id and returns that user associated with that id
function findUserById(data, id) {
  for (let user of data) {
    if (user.id == id) {
      return user;

    }
  }
}

console.log(findUserById(usersData, 10));
console.log(findUserById(usersData, 15));
console.log(findUserById(usersData, 3));
console.log("***********");

function findtheEmail(data, email) {
  for (let user of data) {
    if (user.email = email) {
      return user;
    }
  }
}
console.log(findtheEmail(usersData, "yamiss9@sfgate.com"));
console.log(findtheEmail(usersData, "gallitt0@tumblr.com"));
console.log("***********");

// write a function that takes two arguments an array and gender and returns all the user names associated with
function findgender(data, gender) {
  for (let user of data) {
    if (user.gender == gender) {
      return user.name;
    }
  }
}


console.log(findgender(usersData, "Male"));
console.log(findgender(usersData, "Female"));

// 2nd method


function findgender2(data, gender) {
  let arr = [];
  for(let user of data){
    if(user.gender==gender){
      arr.push(user.name) //add one or more elements to the end of an array. I
    }
  }
  // return arr;
  console.log(arr)
}

findgender2(usersData, "Male");
findgender2(usersData, "Female");



// sum of their salary
function sumofsalary(data, gender) {
   let total=0;
  for (let user of data) {
    if (user.gender == gender) {
      total += user.salary;
    }
  }
  return total;
}
console.log(sumofsalary(usersData, "Male"));
console.log(sumofsalary(usersData, "Female"));


// big data


// // function findgender(data,gender){
// //   let arr=[]
// //   for(let user of data){
// //     if(user.gender == gender ){
// //        arr.push(user.name)
// //     }
// //   }
// //   console.log(arr)
// // }
// // findgender(usersData ,'male')
// //  console.log(usersData,female)



// // salary
// // function findgender(data,gender){
// //   let total=0;
// //   for(let user of data){
// //     if(user.gender == gender ){
// //         total+=user.salary
// //     }
// //   }
// //  return total;
// // }







// // array properties

let marks = [10, 12, 11, 55, 89]
// .map map method is only apply on the array.
//The map method creates a new array by applying a function to each element of the original array.


let num = marks.map((a) => {
  return a * 2
})
console.log(num);

// // let num1 = marks.map((a) => {     // without parameter function called as ananomus funtion
// //   return a*a                           .map method is used for cheak by step by step
//                                                  .map used for create a Array
// // })
// // console.log(num1)

// // let number = mark.map((a)=>{                          normal case me hi .map use krte hai
// //   return a>33;
// // })
// // console.log(number);

let num5 = marks.filter((a)=>{ //The filter method creates a new array with all elements that pass a certain condition defined by a callback function
  return a>22
})
console.log(num5)

let num6 = marks.map((a)=>{
  return a*2             //return in array thats why use map
})
console.log(num6)

console.log("********************************")
//.filter are Returns the elements of an array that meet the condition specified in a callback function.
//big data
let newdata=
usersData.filter((user)=>{
    return user.gender=="Male"
})
console.log(newdata)

//condition ke hisab se agar array me loop lgana hai to sirf fillter use krna
// let num1 = mark.filter((a) => { 
//   return a*a
// })
// console.log(num1)

// // let number1 = mark.filter((a)=>{
// //   return a>33;
// // })
// // console.log(number1);


// // let newData = usersData.filter(user=>user.gender =='female')
// // console.log(newData)

// // filter out user with grater than

// // que1
// //  let newarr=[10,20,30,40,50,60,70,80,90];
// // let a= newarr.map((a)=>{
// //   return b;
// // })
// // console.log(newarr)



//   function f1(arr){
//     return arr.map(num => Num*2)
//   }
//   let number=[10,20,30,40,50]
//   let doubled = (number)
//   console.log(doubled)
//


//20/9/2025

