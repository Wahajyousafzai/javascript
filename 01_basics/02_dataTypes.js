"use strict"; // Treat All js code as a newer version

// alert( 3 + 3 ) // we are using nodejs, not browser

console.log(3
    +
    3);  // code readability should be high

let name = "wahaj"
let age = 18
let isLoggedIn = "true"
let check = String(isLoggedIn)
console.log(check);
/* DataTypes
number = 0 => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique    

*/
//  object 
console.log(typeof undefined);
console.log(typeof null);

const id = Symbol("wahaj")
const anotherid = Symbol("wahaj")
console.log(id === anotherid);
const bigNumber = 1273683636836637783555757357535778n
const str = "wahaj"
const num = 1234567891011121
const bool = true
let player 
const teamPlayer = null
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof player);
console.log(typeof teamPlayer);
console.log(typeof temperature);