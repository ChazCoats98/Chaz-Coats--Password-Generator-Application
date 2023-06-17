// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPassword = [];
var passwordLength = 8;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','z',];
var characters = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=',',','.','?','<','>','?'];
var numbers = ['1','2','3','4','5','6','7','8','9'];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function promptWindow() {
  passwordLength = parseInt(window.prompt("Select a password length between 8 - 128 characters"));
  upperCase = window.prompt("Use upper-case letters? Y or N");
  characters = window.prompt("Use special characters? Y or N");
  numbers = window.prompt("Use numbers? Y or N");
  upperCase = upperCase.toUpperCase();
  characters = characters.toUpperCase();
  numbers = numbers.toUpperCase();

  if (passwordLength < 8 || passwordLength > 128) {
    alert("WARNING! Password length is incorrect.");
    return false;
  }

  finalPassword = finalPassword.concat(lowerCase);
  if (upperCase === "Y") {
    console.log("It works");
    finalPassword = finalPassword.concat(upperCase);
  }
  if (characters === "Y") {
    finalPassword = finalPassword.concat(characters);
  }
  if (numbers === "Y") {
    finalPassword = finalPassword.concat(numbers);
  }
  return true;
}

function generatePassword() {


  return 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", promptWindow);