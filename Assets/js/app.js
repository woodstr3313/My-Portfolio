const navToggleBtn = document.querySelector(".fa-bars");
const navClose = document.querySelector(".fa-times");
const navListCon = document.querySelector(".nav-list");

navToggleBtn.addEventListener("click", () => {
  navListCon.classList.add("show-nav");
});
navClose.addEventListener("click", () => {
  navListCon.classList.remove("show-nav");
});

const linkBtns = document.querySelectorAll(".nav-link");

linkBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navListCon.classList.remove("show-nav");
  });
});
