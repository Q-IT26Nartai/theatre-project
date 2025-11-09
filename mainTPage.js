const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.navMenu');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});