const slider = document.querySelector(".slider");
const slides = [...document.querySelectorAll(".slider-line img")];
const controls = document.querySelector(".controls");
let slideIndex = 0;
const lengthSlides = slides.length;
const dotNavigation = document.querySelector(".dot-navigation");

function templateDotNavigation() {
    for (let i = 0; i < lengthSlides; i++) {
        dotNavigation.insertAdjacentHTML("beforeend", `<span data-id ="${i}" class="dot-item"></span>`);
    }
}

function showItem() {
    slides.forEach(function (slide, index) {
        if (index === slideIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    }
    )
};


slider.addEventListener("click", ({ target }) => {
    const btnPrev = target.closest(".prev");
    const btnNext = target.closest(".next");
    const dotItem = target.closest(".dot-item");
    if (btnPrev) {
        slideIndex = (slideIndex - 1 + lengthSlides) % lengthSlides;
        showItem()
    }
    if (btnNext) {
        slideIndex = (slideIndex + 1) % lengthSlides;
        showItem()
    }
    if (dotItem) {
        slideIndex = +target.dataset.id;
        showItem();

    }

});

showItem();
templateDotNavigation();