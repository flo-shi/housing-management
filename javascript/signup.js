// javascript
// Enable
function showPassword() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.getElementById("eye");
  var eyeSlashIcon = document.getElementById("eye-slash");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
  } else {
    passwordInput.type = "password";
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
  }
}

function showPasswordCp() {
  var passwordInputCp = document.getElementById("confirm-password");
  var eyeIconCp = document.getElementById("eye-c-p");
  var eyeSlashIconCp = document.getElementById("eye-slash-c-p");

  if (passwordInputCp.type === "password") {
    passwordInputCp.type = "text";
    eyeIconCp.style.display = "none";
    eyeSlashIconCp.style.display = "inline";
  } else {
    passwordInputCp.type = "password";
    eyeIconCp.style.display = "inline";
    eyeSlashIconCp.style.display = "none";
  }
}

var eyeIcon = document.getElementById("eye");
if (eyeIcon) {
  eyeIcon.addEventListener("click", showPassword);
}

var eyeSlashIcon = document.getElementById("eye-slash");
if (eyeSlashIcon) {
  eyeSlashIcon.addEventListener("click", showPassword);
}
var eyeIconCp = document.getElementById("eye-c-p");
if (eyeIconCp) {
  eyeIconCp.addEventListener("click", showPasswordCp);
}

var eyeSlashIconCp = document.getElementById("eye-slash-c-p");
if (eyeSlashIconCp) {
  eyeSlashIconCp.addEventListener("click", showPasswordCp);
}

// Password strength check sign-up page
function checkPasswordStrength() {
  var password = document.getElementById("password");
  var passwordStrength = document.getElementById("password-strength");
  var specialChars = /[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\;\"\"\'\'\<\>\?]/;
  var upperCaseChars = /[A-Z]/;
  var numbers = /[0-9]/;

  // Reset the password strength indicator
  passwordStrength.className = "";

  // Check password length
  if (
    specialChars.test(password.value) &&
    numbers.test(password.value) &&
    upperCaseChars.test(password.value)
  ) {
    passwordStrength.classList.add("strong");
    passwordStrength.classList.remove("medium");
  } else if (
    numbers.test(password.value) ||
    upperCaseChars.test(password.value)
  ) {
    passwordStrength.classList.add("medium");
    passwordStrength.classList.remove("weak");
  } else {
    passwordStrength.classList.add("weak");
  }
}
// Password match check
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

function validatePassword() {
  var isValid = false;
  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match";
    confirmPassword.setCustomValidity("Passwords do not match");
    isValid = false;
  } else {
    message.textContent = "";
    confirmPassword.setCustomValidity("");
    isValid = true;
  }
  return isValid;
}

//  submitBtn.addEventListener('click', validatePassword);

//  signup function
function signUp(event) {
  event.preventDefault();
  var inputs = document.querySelectorAll("input");
  var firstName = inputs[0];
  var lastName = inputs[1];
  var email = inputs[2];
  var password = inputs[3];
  var confirmPassword = inputs[4];

  if (firstName.value === "") {
    alert("First name required!");
  } else if (lastName.value === "") {
    alert("Last name required!");
  } else if (email.value === "") {
    alert("Email required!");
  } else if (password.value === "") {
    alert("Password required!");
  } else if (confirmPassword === "") {
    alert("Please confirm your password");
  } else {
    if (validatePassword() === true) {
      // simulate AJAX to call backend
      document.location.href = "./../pages/houses.html";
    }
  }
}
