// Refrence (Non Primitive)

// Array, Objects, Functions
const cities = ["karachi", "lahore", "peshawar"];
 
const myobj = {
  population : "22 crore",
  averageAge: 18-45,
};
const myfunction = function (){
    console.log(`Hello World`);
}
// console.log(typeof myobj);

// stack ( primitive ) ,  Heap ( Non-Primitive )

let myYoutubechannel = "wahajyousafzai"
let anotherName = myYoutubechannel
anotherName = "irfan junejo"
console.log(anotherName);
console.log(myYoutubechannel);

let userOne = {
  email:"wahaj@gmail.com",
  id : 12356653763655
}
let usertwo = userOne
usertwo.email = "swati@gmail.com"
console.log(userOne);