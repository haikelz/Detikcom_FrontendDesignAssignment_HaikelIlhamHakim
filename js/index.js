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
  const photosArticleClass = document.getElementsByClassName(
    "with-photos-article"
  );
  const videosArticleClass = document.getElementsByClassName(
    "with-videos-article"
  );

  const tabPhoto = document.getElementById("tab-photo");
  const tabArticle = document.getElementById("tab-article");
  const tabVideo = document.getElementById("tab-video");

  tabArticle.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < photosArticleClass.length; i++) {
      photosArticleClass[i].classList.remove("show-photos-article");
      videosArticleClass[i].classList.remove("show-videos-article");
    }

    tabArticle.classList.add("tab-button-active");
    tabVideo.classList.remove("tab-button-active");
    tabPhoto.classList.remove("tab-button-active");
  });

  tabPhoto.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < photosArticleClass.length; i++) {
      photosArticleClass[i].classList.add("show-photos-article");
      videosArticleClass[i].classList.remove("show-videos-article");
    }

    tabPhoto.classList.add("tab-button-active");
    tabVideo.classList.remove("tab-button-active");
    tabArticle.classList.remove("tab-button-active");
  });

  tabVideo.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < videosArticleClass.length; i++) {
      photosArticleClass[i].classList.remove("show-photos-article");
      videosArticleClass[i].classList.add("show-videos-article");
    }

    tabPhoto.classList.remove("tab-button-active");
    tabVideo.classList.add("tab-button-active");
    tabArticle.classList.remove("tab-button-active");
  });
}
