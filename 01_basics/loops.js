let array = [1, 2, 3, 4, "place", "karachi"];
for (const myloop of array) {
  console.log(myloop);
}
const greet = "hello world";
for (const myloop of greet) {
  console.log(`my char is ${myloop}`);
}
// maps

const map = new Map();
map.set("pk", "pakistan");
map.set("pk", "pakistan");
map.set("karachi city", "sindh");
map.set("in", "India");
map.set("uk", "united kindom");
map.set("karachi", "pakistan");
console.log(map);

// for of loops

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// objects

let myobj = {
  js: "javascript",
  rb: "ruby",
  py: "python",
  swift: "swift by apple",
};

// forin loops
for (const key in myobj) {
  console.log(`${key} shortcut is for ${myobj[key]}`);
}

// forin loops for arrays

let programming = ["cpp", "javascript", "python", "swift"];

for (const key in programming) {
  console.log(key);
  console.log(programming[key]);
}

// forin loops for maps Not iterateble

for (const key in map) {
  console.log(key);
}

// for Eachloop

let mynewarray = ["ruby", "javascript", "java", "python"];

mynewarray.forEach(function (itemvalue) {
  console.log(itemvalue);
});

mynewarray.forEach((item) => {
  console.log(item);
});
function printme(item) {
  console.log(item);
}
mynewarray.forEach(printme);

mynewarray.forEach((item, place, fullArray) => {
  console.log(item, place, fullArray);
});

let myCoding = [
  {
    languageName: "javaScript",
    languageFile: "js",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
];
myCoding.forEach( (item) => {
console.log(item.languageName);
} )