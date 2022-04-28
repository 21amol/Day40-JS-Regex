var ps = require("prompt-sync")
var prompt = ps();
var email= (prompt("Enter the Mail ID: "));

try {
let mailRegex = RegExp('^[a-zA-Z0-9]+([+_.-][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
if(mailRegex.test(email)) {
    console.log("Mail ID is valid")
}
else throw 'INVALID Mail ID!!!'
} catch (e) {
    console.log(e);
}