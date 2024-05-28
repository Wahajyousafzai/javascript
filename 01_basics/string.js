"use strict";
function players(a, b) {
    return `${a} and ${b}`;
}
let team = new String("worldcup");
let newteam = ["nepal", "ireland"];
let matches = 3 + 2;
let final = true;
let announcement = `next week series of ${matches} matches and ${newteam
    .toLocaleString()
    .replace(",", " ")
    .trim()} ${team} will be played with ${players("india", "bharat")} players ${final}`;
console.log(announcement);
let personName = "\t John Doe \n";
console.log(personName);
