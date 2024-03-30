const accountId = 14453
let accountEmail = "animee@google.com"
var accountPassword = "12345"
accountCity = "bhopal"
let accountState;

accountEmail = "anshu@.com"
accountPassword = "12323"
accountCity = "jaipur"

console.log(accountId)
/*
prefer not to use var because of issue in block scope
and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);