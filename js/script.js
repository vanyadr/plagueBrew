
import { initSlider } from './modules/slider.js';
import { horizontalScrollAbout } from './modules/horizontal-scroll.js';
import { openBurger } from './modules/burger.js';

document.addEventListener('DOMContentLoaded', () => {
	initSlider('.leaders__slider', '.slider__list', '.slider__item', '.slider__button_prev', '.slider__button_next');
    openBurger ();
    window.addEventListener('scroll', () => {
        horizontalScrollAbout();
    });
});