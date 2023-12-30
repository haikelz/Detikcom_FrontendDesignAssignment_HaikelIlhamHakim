const navMenuMobile = document.getElementById("nav-menu-mobile");
const nav = document.getElementById("nav");
const openCloseNavIcon = document.getElementById("open-close-nav-icon");
const openCategory = document.querySelector(".open-category-btn");
const parentSelector = document.querySelector(".marquee");

window.addEventListener("load", () => {
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];

  let i = 0;

  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(() => {
    i += 2;
  }, 0);
});

function openCloseNav() {
  if (nav.className.split(" ")[nav.className.split(" ").length - 1] === "nav") {
    navMenuMobile.classList.add("show-nav-menu-mobile");
    nav.classList.remove("nav");
    nav.classList.add("nav-mobile");
    openCloseNavIcon.src = "static/images/close.svg";
  } else {
    navMenuMobile.classList.remove("show-nav-menu-mobile");
    nav.classList.remove("nav-mobile");
    nav.classList.add("nav");
    openCloseNavIcon.src = "static/images/category.svg";
  }
}
