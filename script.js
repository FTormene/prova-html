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

function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}
