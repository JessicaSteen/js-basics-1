console.log ("Welcome to the Password Validation tool!");

const { stdin } = require("process");
const readline = require("readline");

const reader = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

reader.question("Enter password to validate:", function(answer){
    password = function(answer)
})

var password = answer

for (var i = 0; i >= password.length +10; i++) {
    if(password[i] < 10) {
    console.log("failure");
    } else if (password[i] >=10) {
    console.log("success!"); }
}

