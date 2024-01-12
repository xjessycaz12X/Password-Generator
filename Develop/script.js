// Assignment Code
var generateBtn = document.querySelector("#generate");

//wrtie my most code outside
// generate pass word function

function generatePassword() {
  // collect user options
  // prompt user for length of password
  var pwlength = prompt("eneter desire length of password");
  // verify that password length is between 8 and 128 icluded
  // logic to generate passwoed
  // confirm wether or not you want lowercase uppercase numeric and or speical chharacters

  // return pass
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
