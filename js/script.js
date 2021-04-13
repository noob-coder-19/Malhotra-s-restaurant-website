window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const menutoggle = document.querySelector('header .menutoggle');
const icons = document.querySelectorAll('header .menutoggle i');
const nav = document.querySelector('header .nav');

menutoggle.addEventListener('click', ()=> {
    icons.forEach((icon) => {
        icon.classList.toggle('active');
    });
    nav.classList.toggle('active');
})