const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },


  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: 'Следующий слайд',
    nextSlideMessage: 'Предыдущий слайд',
  },


});


$(".accordion").accordion();

/* $(".accordion").accordion({
  heightStyle: "content"
  }); */

/*   $( ".accordion" ).accordion({
    animate: 500
  }); */

  $( ".accordion" ).accordion({
    collapsible: true
  });

  $( ".question_list" ).accordion({
    active: 5
  });






  /* Tabu */

  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){

    tabsBtn.addEventListener('click', function(e){

      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){

        btn.classList.remove('tabs-nav__btn--active')});

        e.currentTarget.classList.add('tabs-nav__btn--active');

        document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){

          tabsBtn.classList.remove('tabs-item--active')});

          document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

        });
      });



/* let menu = document.querySelector('.menu_lupa__open');
let oupen = document.querySelector('.header_searh__menu');
let clouse = document.querySelector('.menu_lupa__close');

menu.addEventListener('click', function () {
  menu.classList.add('lupa_closed');
  oupen.classList.add('header_searh__visible');
  oupen.classList.add('header_searh__text');
});

clouse.addEventListener('click', function () {
  oupen.classList.add('header_searh__closed');
  menu.classList.add('lupa_visible');
}); */

let menu = document.querySelector('.menu_lupa__open');
let oupen = document.querySelector('.header_searh__menu');
let clouse = document.querySelector('.menu_lupa__close');

menu.addEventListener('click', function () {
  menu.classList.add('lupa_closed');
  oupen.classList.add('header_searh__visible');
  oupen.classList.add('header_searh__text');
});

clouse.addEventListener('click', function () {
  menu.classList.remove('lupa_closed');
  oupen.classList.remove('header_searh__visible');
  oupen.classList.remove('header_searh__text');
});



/* Меню бургер */
/*
let burger = document.querySelector('.menu_burger__open')
let menuBurger = document.querySelector('.menu_burger')
let btmClose = document.querySelector('.menu_burger__close')

burger.addEventListener('click', function(){
  menuBurger.classList.add('menu_burger__open')
  burger.classList.add('buttom_open')
  btmClose.classList.add('buttom_close')
});

btmClose.addEventListener('click', function(){
  btmClose.classList.add('btm_close')
  burger.classList.toggle('buttom_close')
  menuBurger.classList.add('menu_close')
}); */

let burger = document.querySelector('.menu_burger__open')
let menuBurger = document.querySelector('.menu_burger')
let btmClose = document.querySelector('.menu_burger__close')

burger.addEventListener('click', function(){
  menuBurger.classList.add('menu_burger__open')
  burger.classList.add('buttom_open')
  btmClose.classList.add('buttom_close')
});

btmClose.addEventListener('click', function(){
  menuBurger.classList.remove('menu_burger__open')
  burger.classList.remove('buttom_open')
  btmClose.classList.remove('buttom_close')
});

