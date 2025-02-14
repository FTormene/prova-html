function toggleMenu() {
    const header = document.querySelector('header');
    const menu = document.querySelector('menu');
    header.classList.toggle('active');
    menu.classList.toggle('active');
}