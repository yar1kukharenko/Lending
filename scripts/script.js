/* eslint-disable no-undef */
/* eslint-disable no-new */
$(document).ready(() => {
  $('.slider').slick({
    dots: true,
    easing: 'ease',
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: '1024',
        settings: {
          arrows: false,
        },
      },
    ],

  });
});

const btn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

// ..........Кнопка Меню..........

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

// Эффект параллакса при движении мыши

if (window.Parallax) {
  new Parallax(document.getElementById('volunteers__scene1'));
  new Parallax(document.getElementById('volunteers__scene2'));
  new Parallax(document.getElementById('volunteers__scene3'));
  new Parallax(document.getElementById('volunteers__scene4'));
  new Parallax(document.getElementById('volunteers__scene5'));
  new Parallax(document.getElementById('volunteers__scene6'));

  new Parallax(document.getElementById('activity__scene1'));
  new Parallax(document.getElementById('activity__scene2'));
  new Parallax(document.getElementById('activity__scene3'));
  new Parallax(document.getElementById('activity__scene4'));

  new Parallax(document.getElementById('visit__scene1'));
  new Parallax(document.getElementById('visit__scene2'));
  new Parallax(document.getElementById('visit__scene3'));
  new Parallax(document.getElementById('visit__scene4'));
  new Parallax(document.getElementById('visit__scene5'));

  new Parallax(document.getElementById('festival__scene1'));
  new Parallax(document.getElementById('festival__scene2'));
  new Parallax(document.getElementById('festival__scene3'));
  new Parallax(document.getElementById('festival__scene4'));
  new Parallax(document.getElementById('festival__scene5'));
}

// Анимации

const testimonials = document.querySelector('.testimonials');
const activity = document.querySelector('.activity');
const visit = document.querySelector('.visit');
const festival = document.querySelector('.festival');

function AnimateOnScroll(div, speed = 100, offset = 0) {
  const ScrollPercent = window.pageYOffset - div.offsetTop;
  return (ScrollPercent + offset) / speed;
}

if (window.anime) {
  const animationText = anime({
    targets: '.testimonials__text',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 3000,
    autoplay: false,
  });
  const animationImg = anime({
    targets: '.activity__pic',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 2000,
    autoplay: false,
  });
  const animationActivity = anime({
    targets: '.activity__box',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 8000,
    autoplay: false,
  });
  const animationImgVisit = anime({
    targets: ['.small_pic', '.visit__pic-big'],
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 2000,
    autoplay: false,
  });
  const animationVisit = anime({
    targets: '.visit__box',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 8000,
    autoplay: false,
  });

  const animationImgFestival = anime({
    targets: '.festival__pic',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 2000,
    autoplay: false,
  });

  const animationFestival = anime({
    targets: '.festival__box',
    opacity: [
      { value: [0, 1], duration: 200, easing: 'easeOutQuad' },
    ],
    translateY: [
      { value: [-100, 0], duration: 200, easing: 'easeOutQuad' },
    ],
    duration: 8000,
    autoplay: false,
  });

  window.onscroll = () => {
    animationText.seek(AnimateOnScroll(testimonials, 300, 300) * animationText.duration);
    animationImg.seek(AnimateOnScroll(activity, 300, 300) * animationImg.duration);
    animationActivity.seek(AnimateOnScroll(activity, 800, 600) * animationActivity.duration);
    animationImgVisit.seek(AnimateOnScroll(visit, 300, 200) * animationActivity.duration);
    animationVisit.seek(AnimateOnScroll(visit, 800, 600) * animationActivity.duration);
    animationImgFestival.seek(AnimateOnScroll(festival, 300, 200) * animationActivity.duration);
    animationFestival.seek(AnimateOnScroll(festival, 800, 600) * animationActivity.duration);
  };

  // eslint-disable-next-line no-unused-vars
  const animationVolunteers = anime({
    targets: ['.volunteers__pic'],
    opacity: [
      { value: [0, 1] },
    ],
    translateY: [
      { value: [-100, 0] },
    ],

    duration: 3000,

  });
  // eslint-disable-next-line no-unused-vars
  const animationVolunteersText = anime({
    targets: '.volunteers__text',
    opacity: [
      { value: [0, 1] },
    ],
    translateY: [
      { value: [-150, 0] },
    ],
    easing: 'easeOutQuad',
    duration: 1000,

  });
}
