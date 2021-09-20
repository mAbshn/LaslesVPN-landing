(function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const btns = document.querySelector('.header__btns');
    burger.addEventListener('click', () => {
        menu.classList.toggle('_active');
        btns.classList.toggle('_active');
    })
}())