// ############################## swiper hero section #########################################
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
});
// ############################## swiper hero section #########################################

// ############################## swiper Review section #########################################
var swiper = new Swiper(".mySlider", {
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ############################## swiper Review section #########################################

// ############################## hide menu #########################################
let menuBar = document.querySelector("#menu-bar");
let menu = document.querySelector(".menu");

menuBar.onclick = () => {
  menuBar.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
// ############################## hide menu #########################################

// ############################## search button #########################################
let btnSearch = document.querySelector("#btn-search");
let search = document.querySelector(".search");
let close = document.querySelector("#close");

btnSearch.onclick = () => {
  search.classList.add("active");
};
close.onclick = () => {
  search.classList.remove("active");
};
// ############################## search button #########################################

// ############################## on scroll #########################################
let section = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav .menu a");

window.onscroll = () => {
  menuBar.classList.remove("fa-times");
  menu.classList.remove("active");
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 80;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav .menu a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
// ############################## on scroll #########################################

// ###################### Add Class Active ###########################
$(".nav .menu a").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// ###################### Add Class Active ###########################

// ###################### smooth scroll to div ###########################
$(".nav .menu a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top - 70,
    },
    1000
  );
});
// ###################### smooth scroll to div ###########################

// ###################### louder ###########################
function louder() {
  document.querySelector(".louder").classList.add("fade-out");
}

function fadeOut() {
  setInterval(louder, 3000);
}

window.onload = fadeOut;
// ###################### louder ###########################
