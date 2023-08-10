
// Get the button element
var generateBtn = document.querySelector("#generate");

// Add event listener to the button
generateBtn.addEventListener("click", writePassword);

// Define the Generate Password Function
function writePassword() {
  var passwordLength = parseInt(prompt("Enter the desired pass. length between 8-128 symbols"))
  while(true) {
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
    alert("Please enter a valide length.");
    return;
  }
  else {
    break;}
  }
  var charset = "";
  
  var includeUppercase = prompt("Include uppercase letters? (Y/N)");
  if (includeUppercase === "y") {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var includeLowercase = prompt("Include lowercase letters? (Y/N)");
  if (includeLowercase === "y") {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  var includeNumbers = prompt("Include numbers? (Y/N)");
  if (includeNumbers === "y") {
    charset += "0123456789";
  }

  var includeSpecialSymbols = prompt("Include special symbols? (Y/N)");
  if (includeSpecialSymbols === "y") {
    charset += "!@#$%^&*()_-+=<>?";
  }

  if (charset === "") {
    alert("At least one character type must be selected, let's try again? (Y/N)");
    parseInt(prompt("Enter the desired pass. length between 8-128 symbols"));
    else {
      break;}
  
  }
  
  /*var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";*/

  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset[randomIndex];
  }

  var passwordField = document.querySelector("#password");
  passwordField.value = newPassword;
}



