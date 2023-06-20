// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','z',];
var characters = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=',',','.','?','<','>','?'];
var numbers = ['1','2','3','4','5','6','7','8','9'];
generateBtn.addEventListener("click", writePassword);
// Function gets the returned values from the promptWindow function then writes that value into the "password" ID text area
function writePassword() {
var password = promptWindow();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Function makes randomPassword a string, creates a randomizer function that is constrained to the length pf the output of the finalPassword array, applies that randomizer to the values in that array, then returns the result of the finalPassword as a string in randomPassword.
function generatePassword() {
  var randomPassword = "";
  for(let i = 0; i < passwordLength; i++) {
      let randomizer = Math.floor(Math.random() * finalPassword.length);
      randomPassword += finalPassword[randomizer];
  }
    return randomPassword;
}

// Function sets the base array for finalPassword to be just lower case letters, then asks the user for a password length, if the password length is within the specified requirements it continues on to the next if statements which ask thre user for their preferences on character types, then it returns the value of the generatePassword function
function promptWindow() {
  finalPassword = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  passwordLength = parseInt(prompt("Select a password length between 8 - 128 characters"));

  if(isNaN(passwordLength) || passwordLength <= 8 || passwordLength >= 128) {
    alert("WARNING! Invalid password length entered");
    return "";
  }
  if (confirm("Include uppercase letters in password?")) {
    finalPassword = finalPassword.concat(upperCase);
   }
  if (confirm("Include special characters in password?")) {
    finalPassword = finalPassword.concat(characters);
  }
  if (confirm("Include numbers in password?")) {
    finalPassword = finalPassword.concat(numbers);
   }
   return generatePassword();
}
