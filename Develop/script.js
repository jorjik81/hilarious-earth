
// Get the button element
var generateBtn = document.querySelector("#generate");

// Add event listener to the button
generateBtn.addEventListener("click", writePassword);

// Define the Generate Password Function
function writePassword() {
  //loops all the  prompts if no any letters, numbers or characters are selected
  while(true) {
  var passwordLength = parseInt(prompt("Enter the desired pass. length between 8-128 symbols"))
  // approves pass length only between 8-128 symbols
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valide length.");
    writePassword()
  }
  var charset = "";
  
  // prompt for uppercase letters
  if (confirm("Include uppercase letters?")) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  //pr. for lowercase letters
  if (confirm("Include lowercase letter?")) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  //pr. for numbers
  if (confirm("Include numbers?")) {
    charset += "0123456789";
  }

  //pr. for special symbols
  if (confirm("include special symbols?")) {
    charset += "!@#$%^&*()_-+=<>?";
  }
  // alert for zero types of symbols selected
  if (charset.length === 0) {
    alert("At least one character type must be selected, let's try again? (press ok)");
    writePassword()
  }
  else {                /* activater very first prompt if no symbol types chosen*/ 
    break;}
}
  
  /*var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";*/
  // randomizes chosen symbols
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    newPassword += charset[randomIndex];
  }
  // sets pasword field
  var passwordField = document.querySelector("#password");
  passwordField.value = newPassword;
}



