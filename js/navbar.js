const navmenu = document.querySelector('.hamb');
const body = document.querySelector('body');
const navbar = document.querySelector('.second');

const navlinks = document.querySelectorAll('.navlinks');

navmenu.addEventListener('click', () => {
  navmenu.classList.toggle('active');

  body.classList.toggle('active');

  navbar.classList.toggle('active');
});

navlinks.forEach((item) => {
  item.addEventListener('click', () => {
    navmenu.classList.remove('active');

    body.classList.remove('active');

    navbar.classList.remove('active');
  });
});
