(function burger() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const btns = document.querySelector('.header__btns');
    const list = document.querySelectorAll('.header__nav li');
    burger.addEventListener('click', () => {
        menu.classList.toggle('_active');
        btns.classList.toggle('_active');
        burger.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');
    })
    for (let li of list) {
        li.addEventListener('click', () => {
            menu.classList.toggle('_active');
            btns.classList.toggle('_active');
            burger.classList.toggle('_active');
            document.body.classList.toggle('_noscroll');
        })
    }
})();

(function swiperjs() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            950: {
                slidesPerView: 2.5,
            },
            540: {
                slidesPerView: 1.5,
            },
        }
    });
})();

(function footer() {
    const chapters = document.querySelectorAll('.footer__chapter');
    for (let chapter of chapters) {
        chapter.addEventListener('click', () => {
            chapter.classList.toggle('_active')
        })
    }
})();
