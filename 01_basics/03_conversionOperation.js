let score = "wahaj";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = "wahaj"
// console.log(isLoggedIn);
// let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "wahaj" => true
// console.log(Math.round(Math.random()* 10) + 1);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// const min = 10
// const max = 20
// console.log(Math.floor(Math.random() * ( max - min + 1)) + min);
let newdate = new Date();
console.log(newdate.toDateString());
console.log(newdate.toString());
console.log(newdate.toISOString());
console.log(newdate.toJSON());
console.log(newdate.toLocaleString());
console.log(newdate.toLocaleTimeString());
console.log(newdate.toTimeString());
console.log(typeof newdate);
let mynewdate = new Date(2006, 4, 30, 2, 3, 5);
console.log(mynewdate.toLocaleString());
let myPreDate = new Date("1-05-2017");
console.log(myPreDate.toLocaleString());
