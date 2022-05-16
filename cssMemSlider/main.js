const slides = document.querySelectorAll('.slider__slide');
const btns = document.querySelectorAll('.slider__navigation-btn');
const slideNames =  document.querySelectorAll('.slide__name');
let currentSlide = 1;

const makeSlideActive = index => {
    slides.forEach( slide => {
        slide.classList.remove('active');
    });
    btns.forEach( btn => {
        btn.classList.remove('active');
    });
    slideNames.forEach( slideName => {
        slideName.classList.remove('active');
    });
    slides[index].classList.add('active');
    btns[index].classList.add('active');
    slideNames[index].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        makeSlideActive(i);
        currentSlide = i;
    })
})

