const navMenuMobile = document.getElementById("nav-menu-mobile");
const nav = document.getElementById("nav");
const openCloseNavIcon = document.getElementById("open-close-nav-icon");
const openCategory = document.querySelector(".open-category-btn");

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

function openTab() {
  const withPhotosArticle = document.getElementById("with-photos-article");
  const withVideosArticle = document.getElementById("with-videos-article");

  const tabPhoto = document.getElementById("tab-photo");
  const tabArticle = document.getElementById("tab-article");
  const tabVideo = document.getElementById("tab-video");

  tabArticle.addEventListener("click", (e) => {
    e.preventDefault();

    withPhotosArticle.style.display = "none";
    withVideosArticle.style.display = "none";

    tabArticle.classList.add("tab-button-active");
    tabVideo.classList.remove("tab-button-active");
    tabPhoto.classList.remove("tab-button-active");
  });

  tabPhoto.addEventListener("click", (e) => {
    e.preventDefault();

    withPhotosArticle.style.display = "flex";
    withVideosArticle.style.display = "none";

    tabPhoto.classList.add("tab-button-active");
    tabVideo.classList.remove("tab-button-active");
    tabArticle.classList.remove("tab-button-active");
  });

  tabVideo.addEventListener("click", (e) => {
    e.preventDefault();

    withVideosArticle.style.display = "flex";
    withPhotosArticle.style.display = "none";

    tabPhoto.classList.remove("tab-button-active");
    tabVideo.classList.add("tab-button-active");
    tabArticle.classList.remove("tab-button-active");
  });
}
