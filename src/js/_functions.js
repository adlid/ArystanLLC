// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

window.onscroll = function showHeader(){
  let header = document.querySelector('.top-line__top')
  if(window.pageYOffset > 200){
    header.classList.add('top-line__top--fixed')
  }else{
    header.classList.remove('top-line__top--fixed')
  }
}

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// const isMobile = {
//   Android: function() {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function() {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function() {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function() {
//     return navigator.userAgent.match(/Opera/i);
//   },
//   Windows: function() {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function() {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera ||
//       isMobile.Windows()
//     );
//   }
// };
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

import { gsap,Power2 } from "gsap";

// Подключение свайпера
//
 import Swiper, { Mousewheel, Navigation, Pagination, Parallax, Controller,Scrollbar,Autoplay } from 'swiper';
//  Swiper.use([Navigation, Pagination,Parallax,Mousewheel,Controller,Scrollbar,Autoplay]);
// const swiper = new Swiper(".slider-img", {
//   loop:false,
//   speed:2400,
//   parallax:true,
//   autoplay: {
//     delay: 3000,
//   },
// });
// const swiperText = new Swiper(".slider-text", {
//   loop:false,
//   speed:2400,
//
//   autoplay: {
//     delay: 3000,
//   },
//   scrollbar:{
//     el:'.swiper-scrollbar',
//     draggable:true
//   }
// });
//
// swiper.controller.control = swiperText
// swiperText.controller.control = swiper
//
// let gear = document.querySelector('.slider-gear')
//
// swiperText.on('slideNextTransitionStart',function(){
//   gsap.to(gear, 2.8,{
//     rotation: '+=60',
//     ease:Power2.easeOut
//
//   })
// })
// swiperText.on('slidePrevTransitionStart',function(){
//   gsap.to(gear, 2.8,{
//     rotation: '-=60',
//     ease:Power2.easeOut
//
//   })
// })

new Swiper('.deal-slider', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView:3,
  breakpoints:{
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});



// Now you can use all slider methods like


// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//   dataAosId:"",
//   animatedClassName:"work-items",
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//
// });
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.',
// {
//   speed: -2,
//   center: true,
//   round: true,
// }
// );

// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

