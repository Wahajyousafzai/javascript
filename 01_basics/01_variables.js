const accountId = 12200
let accountEmail = "wahaj@gmail.com"
var accountPassword = "552evvsf"
accountCity = "karachi"

// accountId = 2 // not Allowed

accountEmail = "a@gmail.com"
accountPassword = "000001"
accountCity = "lahore"
let accountState
/*
Prefer not to use var
Because of block-scoped and functional scope
*/

console.log(accountId);
console.table([ accountId, accountEmail, accountPassword, accountCity, accountState]);