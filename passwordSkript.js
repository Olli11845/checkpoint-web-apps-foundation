const firstPassword = document.querySelector("#firstInput");
const secondPassword = document.querySelector("#secondInput");

const changeButton = document.querySelector("#changeButton");

const answerEqual = document.querySelector("#answerEqual");
const answerTenCharacters = document.querySelector("#answerTenCharacters");
const answerLowerCase = document.querySelector("#answerLowerCase");
const answerUpperCase = document.querySelector("#answerUpperCase");
const answerContainsNumbers = document.querySelector("#answerContainsNumbers");

secondPassword.addEventListener("change", startCheck);
firstPassword.addEventListener("change", startCheck);

function startCheck() {
  checkLength();
  checkNumber();
  checkUpperCase();
  checkLowerCase();

  //must be last
  checkEqual();
  //must be last
}

function checkEqual() {
  if (firstPassword.value === secondPassword.value) {
    answerEqual.innerHTML = "yes";
  } else {
    answerEqual.innerHTML = "no";
    answerTenCharacters.innerHTML = "no";
    answerUpperCase.innerHTML = "no";
    answerLowerCase.innerHTML = "no";
    answerContainsNumbers.innerHTML = "no";
  }
}

function checkLength() {
  if (firstPassword.value.length >= 10) {
    answerTenCharacters.innerHTML = "yes";
  } else {
    answerTenCharacters.innerHTML = "no";
  }
}

function checkNumber() {
  let checknumber = 0;

  for (let i = 0; firstPassword.value.length > i; i++) {
    if (isNaN(firstPassword.value[i])) {
    } else {
      checknumber++;
      console.log(checknumber);
    }
  }
  if (checknumber === 0) {
    answerContainsNumbers.innerHTML = "no";
  } else {
    answerContainsNumbers.innerHTML = "yes";
  }
}

function checkUpperCase() {
  let numberCase = 0;

  for (let i = 0; i < firstPassword.value.length; i++) {
    if (
      firstPassword.value[i] === firstPassword.value[i].toUpperCase() &&
      isNaN(firstPassword.value[i])
    )
      numberCase++;
  }
  if (numberCase > 0) {
    answerUpperCase.innerHTML = "yes";
  } else {
    answerUpperCase.innerHTML = "no";
  }
}

function checkLowerCase() {
  let numberCase = 0;

  for (let i = 0; i < firstPassword.value.length; i++) {
    if (
      firstPassword.value[i] === firstPassword.value[i].toLowerCase() &&
      isNaN(firstPassword.value[i])
    )
      numberCase++;
  }
  if (numberCase > 0) {
    answerLowerCase.innerHTML = "yes";
  } else {
    answerLowerCase.innerHTML = "no";
  }
}

// ab hier Button Change
changeButton.addEventListener("click", changeHidden);

function changeHidden() {
  if (firstPassword.type === "password") {
    firstPassword.type = "text";
    secondPassword.type = "text";
  } else {
    firstPassword.type = "password";
    secondPassword.type = "password";
  }
}
