burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightnav = document.querySelector(".right-nav");
navlist = document.querySelector(".nav-list");
burger.addEventListener("click", function () {
  rightnav.classList.toggle("opacity");
  navlist.classList.toggle("opacity");
  navbar.classList.toggle("navresp");
});
