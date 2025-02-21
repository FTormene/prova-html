function toggleMenu() {
    const header = document.querySelector('header');
    const menu = document.querySelector('menu');

    header.classList.toggle('active');
    if (header.style.height === "0px" || !header.style.height) {
        header.style.height = header.scrollHeight + "px";
    } else {
        header.style.height = "0px";
    }

    menu.classList.toggle('active');
    if (menu.style.height === "0px" || !menu.style.height) {
        menu.style.height = menu.scrollHeight + "px";
    } else {
        menu.style.height = "0px";
    }
}
