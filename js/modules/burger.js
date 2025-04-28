export const openBurger = function () {
    const burger = document.querySelector(".header-nav__menu-icon--mobile");
    const menu = document.querySelector(".header__mobile-menu");
    const closer = document.querySelector(".header__mobile-menu-closer-icon");

    burger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    closer.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}
