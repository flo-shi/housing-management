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

/*function Hi(){
   window.location.href="./pages/login.html";
}
var signUpBtn= document.getElementsByClassName("signup")[0];
signUpBtn.addEventListener('click',function(){
   window.location.href="./pages/sign-up.html"; 
})*/

// const label = document.querySelectorAll(".label")
// const labelArray = [...label]
// label.forEach((element) => {
//    element.addEventListener("click" , () => {
//       element.classList.add("active")
//    })
// })

// console.log(labelArray)