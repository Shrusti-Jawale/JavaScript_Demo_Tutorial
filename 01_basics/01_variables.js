const accountId = 45321
let accountEmail = "shru@gmail.com"
var accountPassword = "12345" // Not to use var due to issue of block and functional scope
 accountCity = "Mumbai" // Not a correct way to declare variable

// accountId = 2 // not allowed as it is already declared in const

accountEmail = "shrusti@gmail.com"
accountPassword = "45675"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])