// // const { use } = require("react")

// // //array
// // const arr = ["akash", "pankaj", "jayesh", "shiv"]
// // console.log(arr)

// // arr[3] = "dahade"// modefied arrray
// // //console.log([arr])
// // //console.log(arr)
// // // acces 1st Element
// // console.log(arr[2])
// // //last element
// // let a = arr[arr.length - 1]
// // console.log(" ", a)



// // // modifing the Element
// // arr[0] = "moundekar";
// // console.log(arr)

// // arr[1] = "Moundekar";
// // console.log(arr)


// // //add .push and unshift
// // arr.push("jadu")

// // arr.push("sachin")

// // arr.push("saurabh1")

// // arr.push("saditi")

// // arr.push("saurabh2")

// // arr.push("mahesh")

// // //push can add the element at the last postion
// // // unshift add the element at thr front element

// // arr.unshift("akash")

// // arr.unshift(" pankaj")

// // arr.unshift("hero")

// // console.log(arr)


// // //removeing the element 
// // // used method like pop(),shift(),splice().


// // //.pop is used for remove the last element in the array
// // let a5 = arr.pop();
// // console.log(a5)

// // let b = arr.pop();
// // console.log(b)

// // let c = arr.pop();
// // console.log(c)

// // let d = arr.pop()
// // console.log(d)
// // let z = arr.pop();
// // console.log("After Removing the last: " + z);

// // // .shift can remove the first Element. its is totally oppose of the .pop
// // let e = arr.pop();
// // console.log(e)

// // console.log(arr)

// // let a1 = arr.shift();
// // console.log(a1)

// // console.log(arr)

// // let a2 = arr.shift();

// // console.log(a2)

// // let b2 = arr.shift();
// // console.log(b2);


// // // The splice() method removes or replaces the element from the array.
// // arr.splice(1, 2)// Removes 2 elements starting from index 1
// // console.log(arr)


// // //length of array

// // let s = arr.length;
// // console.log(s)

// // //increasing the array or set the array
// // arr.length = 12;
// // console.log("after increasing length  :" + arr);


// // //decressing the array or set the array
// // arr.length = 5;
// // console.log("after increasing length " + arr);

// // // for of or for in loop

// // for (const element of arr) {
// //   console.log(element)

// // }

// // for (const element in arr) {
// //   console.log(element)
// // }

// // //rest properties

// // Array Destructuring 09/05/2025
// // const myArray = ["apple", "banana", "cherry", "date", "elderberry"];
// // const [first, second, ...rest] = myArray;


// // myArray[2] = "grape"; // Modifying the original array
// // console.log(myArray); // Output: ["apple", "banana", "grape", "date", "elderberry"]
// // console.log(first);
// // console.log(second);
// // console.log(rest);






// // when today date is 13/09/2025//////////////////////////////////////////////////////////////////////////////////////

// //  this question is 07/09/2025

// const complexData = [
//     {
//         id: 1,
//         name: "John Doe",
//         age: 30,
//         address: {
//             street: "123 Main St",
//             city: "Anytown",
//             country: "UK",
//         },
//         orders: [
//             { orderId: "A123", amount: 50.75, status: "completed" },
//             { orderId: "B456", amount: 30.25, status: "pending" },
//         ],
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         age: 25,
//         address: {
//             street: "456 Oak St",
//             city: "Othercity",
//             country: "USA",
//         },
//         orders: [
//             { orderId: "C789", amount: 100.5, status: "completed" },
//             { orderId: "D012", amount: 75.2, status: "completed" },
//         ],
//     },
// ]
// //  Filter those users who are aged 25 or younger.
// const filteredUsers = complexData.filter(user => user.age <= 25);
// console.log(filteredUsers);

// // //question 1// Filter those users who are aged 25 or younger.
// // for (const element of complexData) {
// //     if (element.age <= 25) {
// //         // console.log(element,elemeqnt.age, "age is 25 or younger");
// //         console.log(`${element.name} is younger, age is ${element.age} old , address is ${element.address.street}, ${element.address.city}, ${element.address.country}`);
// //     }
// // }
// // console.log("******************************")

// // // 2.itrate the array to get an array of user names. and add new name in the array


// let usernames = []
// for (const element of complexData) {
//     usernames.push(element.name)
// }
// console.log(usernames)

// console.log("******************************")

// // let userNames = [];
// // for (const element of complexData) {
// //     userNames.push(element.name)
// //     // userNames.unshift(element.name = "saji;")
// // }
// // console.log(userNames)
// console.log("******************************")

// // // 3./ Filter out orders with an amount greater than 50


// for (const element of complexData) {
//     const filteredOrders = element.orders.filter(order => order.amount > 50)
//     if (filteredOrders.length > 0) {
//         console.log(`${element.name} has orders with amount greate than 50`, filteredOrders)
//     }
// }



// for (const element of complexData) {
//     const filteredOrders = element.orders.filter(order => order.amount > 50);//query
//     if (filteredOrders.length > 0) {
//         console.log(`${element.name} has orders with amount greater than 50:`, filteredOrders);
//     }
// }

// console.log("******************************")

// // //4. Iteate the array to get an array of order IDs
// let orderId = []
// for (let element of complexData) {
//     for (const order of element.orders) {
//         orderId.push(order.push)
//     }
// }
// // let orderIds = [];
// // for (const element of complexData) {
// //     for (const order of element.orders) {
// //         orderIds.push(order.orderId);
// //     }
// // }
// // console.log(orderIds);
// console.log("******************************")

// // //5.Filter users who have at least one order with a status of 'pending'
// for (const element of complexData) {
//     const PendingOrder = element.orders.some(order => order.status === 'pending')
//     if (PendingOrder) {
//         console.log(`${element.name} has at least one pending order.`)
//     }
// }
// // for (const element of complexData) {
// //     const PendingOrder = element.orders.some(order => order.status === 'pending');
// //     if (PendingOrder) {
// //         console.log(`${element.name} has at least one pending order.`);
// //     }
// // }
// console.log("******************************")
// // 6. Itrate the array to get an array of objects containing user names and their total order amounts.
// // let userOrderTotals = [];
// // for (const element of complexData) {
// //     const totalorderAmount = element.orders.reduce((sum, order) => sum + order.amount,0);
// //     userOrderTotals.push({ name: element.name, totalorderAmount: totalorderAmount })
// // }
// // console.log(totalorderAmount)

// let userOrderTotals = [];
// for (const element of complexData) {
//     const totalAmount = element.orders.reduce((sum, order) => sum + order.amount, 0);
//     userOrderTotals.push({ name: element.name, totalAmount: totalAmount });
// }
// console.log(userOrderTotals);


// // // Calculate the total amount spent by each user on completed orders

// // let userOrderTotals = [];
// // for (const element of complexData) {
// //     const totalAmount = element.orders.reduce((sum, order) => sum + order.amount, 0);
// //     userOrderTotals.push({ name: element.name, totalAmount: totalAmount });
// // }

// let userordertotals = [];
// for (const element of complexData) {
//     const totalAmount = element.orders.reduce((sum, order) => sum + order.amount, 0)
//     userOrderTotals.push({ name: element.name, totalAmount: totalAmount })
// }
// console.log()


// // Filter out orders with an amount between 30 and 70.
// for (const element of complexData) {
//     const filteredOrders = element.orders.filter(order => order.amount > 30 && order.amount < 70);
//     if (filteredOrders.length > 0) {
//         console.log(`${element.name} has orders with amount between 30 and 70:`, filteredOrders);
//     }
// }

// // 2nd method
// for (const element of complexData) {
//     {
//         if (element.orders.amount > 30 && element.orders.amounts < 70) {
//             console.log(element.name)
//         }
//     }
// }



// // // Filter users who live in the 'USA' and have at least one order with an amount greater than 50.

// for (const data of complexData) {
//     if (data.address.country === "USA") {
//         const getcountry = data.orders.find(order => order.amount > 50);
//         if (getcountry) {
//             console.log(`${data.name} lives in USA and has at least one order with amount greater than 50`);
//         }
//     }
// }
// // Filter users who do not live in the 'USA' and have at least one order with an amount greater than 50.
// for (const data of complexData) {
//     if (data.address.country !== "USA") {
//         const getcountry = data.orders.find(order => order.amount > 50);
//         if (getcountry) {
//             console.log(`${data.name} lives in ${data.address.country} and has at least one order with amount greater than 50`);
//         }
//     }
// }


// // Modifing the country name from USA to UK
// for (const data of complexData) {
//     if (data.address.country === "USA") {
//         data.address.country = "UK";
//         console.log(`${data.name} has moved from USA to UK`);
//     }
// }
// // itrate the array to get an array of user names.


// let arr = [2, 4, 7, 9, 10, 50, 60, 86, 88, 23, 'hello', true]

// //  Print only the numbers from the array.(method 1)
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

// // method 2
// for (const number of arr) {
//     if (typeof number === "number") {
//         console.log(number);
//     }
// }

// // square a of only numbers from the array
// console.log("**************************")
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i] * arr[i]);
//     }
// }
// console.log("**************************")

// //print the string in uppercase 

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'string') {
//         console.log(arr[i].toUpperCase())
//     }
// }

// // print the string as loower case
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i].toLowerCase())
//     }
// }

// // Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".
// function orderPizza(size, topping = "cheese") {
//     console.log(`you have ordered a ${size} pizza with ${topping} topping.`);
// }
// orderPizza("large", "margreta")
// orderPizza("medium")
// orderPizza("small", "onion")


// //  Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator  .
// // function makeCoffee(type, ...ingredients) 
// // {
// //     return  `making a ${type} coffee with the following ingrediants: ${ingredients.join(", ")}`;
// // }

// // console.log(makeCoffee("latte", "milk", "sugar"));


// function MakeCoffee(type, ...ingrediants) {
//     if (ingrediants.length == 0) {
//         return `Coffee type:${type} with No extra ingredients`;
//     }
//     else {
//         return `Coffee type:${type} with ingredients: ${ingrediants.join(", ")}`;
//     }
// }

// console.log(MakeCoffee("tapri"))

// // makeCoffee("espresso");


// /// Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat
// function makeSandwich(filling, breadType = "whole Wheat") {
//     return `Making a ${breadType} sandwich with ${filling}.`;
// }

// console.log(makeSandwich("chicken", "brown bread"));

// console.log(makeSandwich("veggies"));

// console.log(makeSandwich("cheese", "white bread"));

// console.log(makeSandwich("peanut butter"));

// //extra//  Write a function calculateTotal that takes a variable number of arguments representing item prices and returns the total price using the rest operator.

// function calculateTotal(...prices) {
//     return prices.reduce((total, price) => total + price, 0);
// }
// console.log(calculateTotal(10, 20, 30)); // 60

// //Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.
// function addNumbers(...numbers) {
//     {
//         return numbers.reduce((total, num) => total + num, 0);

//     }
// }
// console.log(addNumbers(1, 2, 3, 4)); // 10

// // 2nd
// function addNumbers(...numbers) {
//     for (const number of numbers) {
//         if (typeof number === 'number') {
//             return numbers.reduce((total, num) => total + num, 0);
//         }
//     }
//     return "Error: All arguments must be numbers.";
// }
// console.log(addNumbers(1, 2, 3, 4)); // 10
// console.log(addNumbers(5, 10, 15));
// console.log(addNumbers(1, 2, "3", 4)); // 


// // / Write a function introducePerson that takes two positional arguments name and profession, with profession defaulting to "Student".
// function intoducePerson(name, profession = "Student") {
//     return `hello my name is ${name}and i am a${profession}`
// }
// console.log(intoducePerson("akash", "developer"));
// console.log(intoducePerson("pankaj", "millonare"));

// //  Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.
// function findMax(...numbers) {
//     return Math.max(...numbers);
// }



// function findMax(...numbers) {
//     if (number.length === 0) {
//         return null;
//     }





//     // function calculateTotal(...prices) {
//     //     return prices.reduce((total, price) => total + price, 0);
//     // }

//     // console.log(calculateTotal(10, 20, 30)); // 60
//     // console.log(calculateTotal(5, 15));      // 20
//     // console.log(calculateTotal(100));        // 100

// }




// // 20/sep/2025

//  // write a function getName that takes an array of names and a number as arguments and number pass and return the greater than the number of length names
// function getName(names, minLength) {
//     return names.filter(name => name.length > minLength);
// }
// const names = ["Alice1", "Bob1", "Charlie1", "David1"];
// const minLength=5;
// console.log(getName(names, minLength)); // Output: ["Alice", "Charlie", "David"]

// // 2nd type
// function getName(names, minLength) {
//     for (const name of names) {
//         if (name.length >= minLength) {
//             console.log(name);
//         }
//     }
// }
// getName(["Alice", "Bob", "Charlie", "David"], 5);



//////////////////////////////////////////////////////////////////////////////////////////


