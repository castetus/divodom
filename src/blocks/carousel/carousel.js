let countSlides
let width = window.innerWidth

if (width <= 575){
    countSlides = 1
} else if (width > 575 && width <= 768){
    countSlides = 2
} else if (width > 768 && width < 1024){
    countSlides = 3
} else {
    countSlides = 4
}


const swiper = new Swiper('.swiper-container',
    {
        slidesPerView: countSlides,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-navigation_right',
            prevEl: '.swiper-navigation_left',
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        }
    }
);