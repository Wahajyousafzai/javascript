"use strict";
const user = {
    userName: "wahaj",
    prices: 1000
};
function handleObject(anyObject) {
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.prices}`);
    return;
}
handleObject(user);
