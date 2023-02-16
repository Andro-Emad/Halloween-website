/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
// let Home = document.getElementById("#home");
// let homeImg = document.querySelector(".home__img");
// let homeTree1 = document.querySelector(".home__tree-1");
// let homeTree2 = document.querySelector(".home__tree-1");

// window.onscroll = function () {
//   if (window.scrollY >= Home.offsetTop + 100) {
//     homeImg.classList.add("fadeInLeft");
//     homeTree1.classList.add("fadeInLeft");
//     homeTree2.classList.add("fadeInRight");
//   } else {
//     homeImg.classList.remove("fadeInLeft");
//     homeTree1.classList.remove("fadeInLeft");
//     homeTree2.classList.remove("fadeInRight");
//   }
// };

// let footer = document.querySelector(".footer");
// let footerTree1 = document.querySelector(".footer__tree-1");
// let footerTree2 = document.querySelector(".footer__tree-1");

// window.onscroll = function () {
//   if (window.scrollY >= footer.offsetTop - 100) {
//     footerTree1.classList.add("fadeInLeft");
//     footerTree2.classList.add("fadeInRight");
//   } else {
//     footerTree1.classList.remove("fadeInLeft");
//     footerTree2.classList.remove("fadeInRight");
//   }
// };

const sr = ScrollReveal().reveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset :true //Animations repeat
});

ScrollReveal().reveal(
  `.home__data, .footer__content, .footer__logo, .footer__description`
);
ScrollReveal(sr).reveal(`.home__terr-1`, { origin: "left", delay: 800 });
ScrollReveal(sr).reveal(`.home__img`, { delay: 800 });
ScrollReveal(sr).reveal(`.home__terr-2`, { origin: "right", delay: 800 });
ScrollReveal(sr).reveal(`.category__card, .items__card`, { interval: 100 });
ScrollReveal(sr).reveal(`.about__img, .about__data , .footer__tree-2`, {
  origin: "left",
});
ScrollReveal(sr).reveal(`.party__images, .party__data, .footer__tree-1`, {
  origin: "right",
});
/*==============================*/
// what year
const spanYear = document.querySelector(".footer__copy span:last-child ");
let dateNow = new Date();
spanYear.innerHTML = `${dateNow.getFullYear()}`;
/*==============================*/
console.log("Happy Halloween");
console.log("Made By Andro-Emad");
console.log("27/10/2022");
