const burger = document.querySelector(".menu-icon");
const menu__nav = document.querySelector(".menu__nav");
const body = document.body;

// якшо на сторінці є і burger i menu__nav
if (burger && menu__nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu__nav.classList.toggle("_active");
    body.classList.toggle("lock");
  });
}
