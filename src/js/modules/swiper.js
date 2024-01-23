import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 1.2,
    spaceBetween: 5,

    breakpoints: {
        320: {
            spaceBetween: 6,
            slidesPerView: 1.3,
        },
        576: {
            spaceBetween: 8,
            slidesPerView: 1.5,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 1.8,
            // direction: 'vertical',  
        },
        992: {
            spaceBetween: 15,
            slidesPerView: 2.3,
        },
        1200: {
            spaceBetween: 20,
            slidesPerView: 2.3,
        }
    }
});