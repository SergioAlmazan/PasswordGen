// creating character variables for password
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var UppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var SpeChar = "!$^*-=+_?";

//function will create password and will run once button is active
function genPW() {
    var newPass = [];
    var pwdLength = parseInt(prompt("Please enter the length of password between 8-128."));

    if(pwdLength <= 8 || pwdLength >= 128) {
	    alert("Invalid entry must be a number between 8-128, Try again!");
	    return;
        }
        if(isNaN(pwdLength)){
            alert("Invalid entry must be a number between 8-128, Try again!");
            return;
        }
	    else if (pwdLength >= 8 && pwdLength <= 128);{
	    }
    confirmLow = confirm("Click ok to confirm including lower case letters.");
    confirmUpp = confirm("Click ok to confirm including upper case letters.");
    confirmNum = confirm("Click ok to confirm including numbers.");
    confirmSpl = confirm("Click ok to confirm including special characters.");

    if (confirmUpp == true) {
        (newPass.push(UppChar));
     }
    if (confirmLow == true) {
      (newPass.push(lowChar));
     }
    if (confirmNum == true) {
        (newPass.push(numChar));
     }
    if (confirmSpl == true) {
      (newPass.push(SpeChar));
    }
    //This is validating the character selection to continue
    else if (confirmLow === false && confirmUpp === false && confirmSpl === false && confirmNum === false) {
        alert("You must select one of the character inputs to generate password.");
        return;
    }
    //This is putting everything together from the selection to generate password
    var pwdStr = newPass.join("");
    var password = "";
 
    for (var i = 0; i < pwdLength; i++) {
    var gen = pwdStr.charAt(Math.floor(Math.random() * pwdStr.length));
    password = password.concat(gen);
     }
    document.getElementById("passWD").textContent = password;
 }