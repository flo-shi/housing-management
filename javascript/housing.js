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
