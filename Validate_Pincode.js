var ps = require("prompt-sync")
var prompt = ps();
var pinCode= (prompt("Enter the PINCODE: "));

try {
let pinRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
if(pinRegex.test(pinCode)) {
    console.log("PINCODE is valid")
}
else throw 'INVALID PINCODE!!!'
} catch (e) {
    console.log(e);
}
