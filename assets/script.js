document.querySelector("#generate").addEventListener("click", writePassword);

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var lowercaseABC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  var confirmLength = prompt(
    "Your password must be between 8 and 128 characters."
  );

  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = prompt(
      "Your password must be between 8-128 characters"
    );
  }

  alert(`Your password will have ${confirmLength} characters`);

  var confirmSpecialCharacter = confirm(
    "Click OK to confirm if you would like to include special characters"
  );
  var confirmNumericCharacter = confirm(
    "Click OK to confirm if you would like to include numeric characters"
  );
  var confirmLowerCase = confirm(
    "Click OK to confirm if you would like to include lowercase characters"
  );
  var confirmUpperCase = confirm(
    "Click OK to confirm if you would like to include uppercase characters"
  );

  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false &&
    confirmNumericCharacter === false
  ) {
    alert("You must select at least one of the criteria");
    var confirmSpecialCharacter = confirm(
      "Click OK to confirm if you would like to include special characters"
    );
    var confirmNumericCharacter = confirm(
      "Click OK to confirm if you would like to include numeric characters"
    );
    var confirmLowerCase = confirm(
      "Click OK to confirm if you would like to include lowercase characters"
    );
    var confirmUpperCase = confirm(
      "Click OK to confirm if you would like to include uppercase characters"
    );
  }

  var passwordCharacters = [];

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChars);
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowercaseABC);
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(uppercaseABC);
  }

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
