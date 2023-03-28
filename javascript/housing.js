// jquery
$('document').ready(function(){

$('.login').click(function(){
   window.location.href="./pages/login.html"
})
$('.signup').click(function(){
   window.location.href="./pages/sign-up.html"
})
$('#carousel').slick()
$('label').click(function(){
   $(this).css("color","rgb(236, 27, 97)")
})
})
 
// javascript
function showPassword(){
   var x = document.getElementById("password");
   var x = document.getElementById("eye");
   var x = document.getElementById("eye-slash");

   if( x.type === 'password'){
      x.type = "text";
      y.style.display = "block";
      z.style.display = "none";
   }
   else {
      x.type = "password";
      y.style.display = "none";
      z.style.display = "block";
   }
}
// Password check sign-up page
function checkPasswordStrength() {
	var password = document.getElementById("password");
	var passwordStrength = document.getElementById("password-strength");
   var specialChars = /[\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\;\"\"\'\'\<\>\?]/;
   var upperCaseChars = /[A-Z]/;
   var numbers = /[0-9]/;

	// Reset the password strength indicator
	passwordStrength.className = "";

// Check password length
if (specialChars.test(password.value) && numbers.test(password.value) && upperCaseChars.test(password.value)) {
   passwordStrength.classList.add("strong");
   passwordStrength.classList.remove("medium");
} else if (numbers.test(password.value) || upperCaseChars.test(password.value)) {
   passwordStrength.classList.add("medium");
   passwordStrength.classList.remove("weak");
} else {
      passwordStrength.classList.add("weak");
   }

//   ******
	// if (specialChars.test(password.value)) {
	// 	passwordStrength.classList.add("strong");
	// }

	// // Check for uppercase letters
	
	// if (upperCaseChars.test(password.value)) {
	// 	passwordStrength.classList.add("medium");
	// 	passwordStrength.classList.remove("weak");
	// }

	// // Check for numbers
	
	// if (numbers.test(password.value)) {
	// 	passwordStrength.classList.add("medium");
	// 	passwordStrength.classList.remove("weak");
	// }
}



// Paging
const pages = document.querySelectorAll('.page');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
console.log(prevButton)
let currentPage = 0;

function showPage(pageIndex) {
  pages[currentPage].classList.remove('active');
  pages[pageIndex].classList.add('active');
  currentPage = pageIndex;
}

function prevPage() {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}
 
prevButton.addEventListener('click', prevPage());
nextButton.addEventListener('click', nextPage());

// showPage(currentPage);

