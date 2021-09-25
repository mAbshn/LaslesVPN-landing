(function burger() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const btns = document.querySelector('.header__btns');
    burger.addEventListener('click', () => {
        menu.classList.toggle('_active');
        btns.classList.toggle('_active');
        burger.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');
    })
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
    const chapter1 = document.querySelector('#chapter1');
    const chapter2 = document.querySelector('#chapter2');
    const chapter3 = document.querySelector('#chapter3');
    const list1 = document.querySelectorAll('#chapter1 > li');
    const list2 = document.querySelectorAll('#chapter2 > li');
    const list3 = document.querySelectorAll('#chapter3 > li');
    chapter1.addEventListener('click', () => {
        for (let item of list1) {
            item.classList.toggle('_active');
        }
    })
    chapter2.addEventListener('click', () => {
        for (let item of list2) {
            item.classList.toggle('_active');
        }
    })
    chapter3.addEventListener('click', () => {
        for (let item of list3  ) {
            item.classList.toggle('_active');
        }
    })
})();
