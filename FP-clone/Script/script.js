document.addEventListener("DOMContentLoaded", function () {
  let submit = document.getElementById("form-submit");
  let login = document.querySelector("#login");

  submit.addEventListener("click", function () {
    event.preventDefault();
    isValid = validateEmail && validateMessage && validateName;
    if (isValid) {
      form.submit();
      alert("form successfully submitted");
    }
  });

});

function validateEmail() {
  let email = document.getElementById("contact-email");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errEmail = document.getElementById("err-email");

  let isValid = true;

  if (!email.value.trim()) {
    errName.innerText = "Please fill in the name field";
    email.focus();
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    errEmail.innerText =
      "Only alphabets, spaces, and tab characters are valid for the name field";
    email.focus();
    isValid = false;
  } else {
    errEmail.innerText = "";
    isValid = true;
  }

  return isValid;
}

export function validateName() {
  let nameField = document.getElementById("name");
  let namePattern = /^[A-Za-z\s\t]+$/;
  let errName = document.getElementById("err-name");
  let isValid = true;

  if (!nameField.value.trim()) {
    errName.innerText = "Please fill in the name field";
    nameField.focus();
    isValid = false;
  } else if (!namePattern.test(nameField.value)) {
    errName.innerText =
      "Only alphabets, spaces, and tab characters are valid for the name field";
    nameField.focus();
    isValid = false;
  } else {
    errName.innerText = "";
    isValid = true;
  }

  return isValid;
}
function validateEmail() {
  let email = document.getElementById("contact-email");

  let errEmail = document.getElementById("err-email");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = false;

  if (!email.value.trim()) {
    errName.innerText = "Please fill in the email field";
    email.focus();
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    errEmail.innerText = "Please enter correct email";
    email.focus();
    isValid = false;
  } else {
    errEmail.innerText = "";
    isValid = true;
  }

  return isValid;
}

function validateMessage() {
  let message = document.getElementById("message");
  let errMessage = document.getElementById("err-message");

  let isValid = false;

  if (!message.value || message.value.length == 0) {
    errMessage.innerText = "Please fill in the message";
    message.focus();
    isValid = false;
  } else {
    errMessage.innerText = "";
    isValid = true;
  }

  return isValid;
}
var active = false;
function toggleSwitch(id) {
  let change = document.getElementById(id);
  if (active) {
    let popups = document.getElementsByClassName("popup");
    for (let popup of popups) {
      if (popup.style.display == "block") {
        popup.style.display = "none";
      }
    }
    let signs = document.getElementsByClassName("sign");
    for (let sign of signs) {
      if (sign.id == id) {
        continue;
      }
      sign.innerText = "+";
    }
  }

  if (change.innerText == "+") {
    change.innerText = "-";
    document.getElementById(id + "-text").style.display = "block";

    active = true;
  } else {
    change.innerText = "+";
    document.getElementById(id + "-text").style.display = "none";
    active = false;
  }
}
