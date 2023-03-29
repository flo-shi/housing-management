// Show/ hide password
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

var eyeIcon = document.getElementById("eye");
if (eyeIcon) {
  eyeIcon.addEventListener("click", showPassword);
}

var eyeSlashIcon = document.getElementById("eye-slash");
if (eyeSlashIcon) {
  eyeSlashIcon.addEventListener("click", showPassword);
}

// login function
function login(event) {
  event.preventDefault();
  var inputs = document.querySelectorAll("input");
  var email = inputs[0];
  var password = inputs[1];

  if (email.value === "") {
    alert("Please fill out this field!");
  } else if (password.value === "") {
    alert("Please fill out this field!");
  } else {
    // Verification
    document.location.href = "./../pages/houses.html";
  }
}
