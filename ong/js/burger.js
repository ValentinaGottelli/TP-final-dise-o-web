

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', function () {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');

  if (burger.classList.contains('open')) {
    burger.textContent = '✕';
  } else {
    burger.textContent = '☰';
  }
});

mobileMenu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    burger.textContent = '☰';
  });
});
