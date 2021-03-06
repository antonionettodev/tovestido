const showMenu = (e, t) => {
  const n = document.getElementById(e),
    o = document.getElementById(t);
  n &&
    o &&
    n.addEventListener('click', () => {
      o.classList.toggle('show');
    });
};
showMenu('nav-toggle', 'nav-menu');
const navLink = document.querySelectorAll('.nav__link'),
  navMenu = document.getElementById('nav-menu');
function linkAction() {
  navMenu.classList.remove('show');
}
navLink.forEach((e) => e.addEventListener('click', linkAction));
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  var e = window.pageYOffset;
  sections.forEach((t) => {
    var n = t.offsetHeight,
      o = t.offsetTop - 50;
    (sectionId = t.getAttribute('id')),
      o < e && e <= o + n
        ? document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('nav-active')
        : document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('nav-active');
  });
}
function initSmoothScroll() {
  const e = document.querySelectorAll('[href^="#"]');
  if (e.length) {
    function t(e) {
      e.preventDefault();
      const t = e.currentTarget.getAttribute('href');
      document
        .querySelector(t)
        .scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    e.forEach((e) => {
      e.addEventListener('click', t);
    });
  }
}
function initScrollReveal() {
  const e = document.querySelectorAll('.js-reveal-section');
  if (e.length) {
    const t = 0.6 * window.innerHeight,
      n = 'active';
    (window.onload = e[0].classList.add(n)),
      window.addEventListener('scroll', function () {
        e.forEach((e) => {
          e.getBoundingClientRect().top - t < 0 && e.classList.add(n);
        });
      });
  }
}
window.addEventListener('scroll', scrollActive),
  (window.onscroll = () => {
    const e = document.getElementById('header');
    200 <= this.scrollY
      ? e.classList.add('scroll-header')
      : e.classList.remove('scroll-header');
  }),
  initSmoothScroll(),
  initScrollReveal();
