let arr = ["1,2,minister,country,animal"];
let nice = [100,200,300,"middlEast"]
// Array Methods
arr.push("pakistan");
arr.push(7)
arr.pop()
arr.unshift("karachi")
arr.unshift("lahore")
arr.shift()
console.log(arr);
console.log(arr.includes("karachi"));
console.log(arr.indexOf(0));
const myarr = arr.join()
console.log(myarr);
console.log((arr));
let allarr = arr.concat(nice)
console.log(allarr);
let wings = [...arr,...nice] 
console.log(wings);


const anotherArray = [1,43,2,"islamabad",["king",[123]],"peshawar"]
const real = anotherArray.flat(Infinity)
console.log(real);
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));