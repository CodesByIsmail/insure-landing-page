const openToggle = document.querySelector('.open__menu');
const closeToggle = document.querySelector('.close__menu');
const navMenu = document.querySelector('.nav__menu');

openToggle.addEventListener('click', function () {
    openToggle.classList.toggle('hidden');
    closeToggle.classList.toggle('hidden');
    navMenu.style.display = 'flex';
});

closeToggle.addEventListener('click', function () {
    openToggle.classList.toggle('hidden');
    closeToggle.classList.toggle('hidden');
    navMenu.style.display = 'none';
});

navMenu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault();
        openToggle.classList.toggle('hidden');
        closeToggle.classList.toggle('hidden');

        document
            .querySelector(e.target.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
        navMenu.style.display = 'none';
    }
});
