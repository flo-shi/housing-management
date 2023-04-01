// jquery
$("document").ready(function () {
  $(".login").click(function () {
    window.location.href = "./pages/login.html";
  });
  $(".signup").click(function () {
    window.location.href = "./pages/sign-up.html";
  });
  $("#carousel").slick();
  $("label").click(function () {
    $(this).css("color", "rgb(236, 27, 97)");
  });
});

// expand
// var media = document.querySelectorAll(".media");
// var background = document.getElementsByTagName("body")[0];
// var moreContent = document.getElementsByClassName("more-content");

function expandContent() {
  return;
  this.classList.toggle("expand");
  this.background.classList.add("blurred");
  moreContent.style.display = "inline";
}

// for (var i = 0; i < media.length; i++) {
//   media[i].addEventListener("click", expandContent);
// }

// Paging
// const pages = document.querySelectorAll(".page");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");
// console.log(prevButton);
// let currentPage = 0;

// function showPage(pageIndex) {
//   pages[currentPage].classList.remove("active");
//   pages[pageIndex].classList.add("active");
//   currentPage = pageIndex;
// }

// function prevPage() {
//   if (currentPage > 0) {
//     showPage(currentPage - 1);
//   }
// }

// function nextPage() {
//   if (currentPage < pages.length - 1) {
//     showPage(currentPage + 1);
//   }
// }

// prevButton.addEventListener("click", prevPage());
// nextButton.addEventListener("click", nextPage());

// showPage(currentPage);
