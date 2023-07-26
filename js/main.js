const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl,index) => {
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  slidesPerView: 5,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();