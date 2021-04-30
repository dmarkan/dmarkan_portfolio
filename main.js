const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let wrapper = document.querySelector(".wrapper");
let treci = document.querySelector("#treci");
let drugi = document.querySelector("#drugi");
let cetvrti = document.querySelector("#cetvrti");
let prvi = document.querySelector("#prvi");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

}

init();


// Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

}

$(document).ready(function () {
  $("#drugi").click(function () {
    $(".obrazovanje").fadeIn(1000);
    $(".o_meni").fadeOut(1000);
    $(".kontakt").fadeOut(1000);
  });
});
$(document).ready(function () {
  $("#prvi").click(function () {
    $(".o_meni").fadeIn(1000);
    $(".obrazovanje").fadeOut(1000);
    $(".kontakt").fadeOut(1000);
  });
});
$(document).ready(function () {
  $("#treci").click(function () {
    $(".obrazovanje").fadeOut(1000);
    $(".o_meni").fadeOut(1000);
    $(".kontakt").fadeOut(1000);
  });
});
$(document).ready(function () {
  $("#cetvrti").click(function () {
    $(".kontakt").fadeIn(1000);
    $(".obrazovanje").fadeOut(1000);
    $(".o_meni").fadeOut(1000);
  });
});

treci.addEventListener("click", function () {
  wrapper.style.visibility = "visible";
})

prvi.addEventListener("click", function () {
  wrapper.style.visibility = "hidden";
})

drugi.addEventListener("click", function () {
  wrapper.style.visibility = "hidden";
})

cetvrti.addEventListener("click", function () {
  wrapper.style.visibility = "hidden";
})