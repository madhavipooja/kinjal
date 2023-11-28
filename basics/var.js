const accountId = 123456
let accountEmail = "pooja@gmail.com"
var accountPassword = "12345" //mostly used let not var okkk
accountCity = "thangadh" //widly do not used
let accountState; //undefined value

// accountId = 2 // not allowed


accountEmail = "kinjal.com"
accountPassword = "354465789"
accountCity = "rajkot"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])