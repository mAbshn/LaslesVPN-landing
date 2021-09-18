(function() {
    const burger = document.querySelector('.header__burger');
    const sidemenu = document.querySelector('.header__nav-btns-wrapper');
    burger.addEventListener('click', () => {
        sidemenu.classList.toggle('_active');
    })
}())