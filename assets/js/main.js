// ===== SHOW MENU =====
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle("show-menu");
    })
}

showMenu('nav-toggle', 'nav-menu');


// ===== REMOVE MENU MOBILE =====
const navLink =  document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction);
})

    // ===== SCROLL SECTIONS ACTIVE LINK =====
    // selecciono todas las secciones
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        // obtengo el scroll actual
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            // Obtengo la altura de la seccion actual
            const sectionHeight = current.offsetHeight
            // Obtengo la distancia del elemento respecto al borde superior de la ventana
            const sectionTop = current.offsetTop - 50;
            // Obtengo el id del section actual
            let sectionId = current.getAttribute('id');

            // Si el scroll se encuentra dentro del section actual
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        })
    }
window.addEventListener('scroll', scrollActive);

// ===== CHANGE BACKGROUND HEADER =====
const scrollHeader = () => {
    const header = document.getElementById('header');
    // this hace referencia a window
    if (this.scrollY >= 200){
        header.classList.add('scroll-header'); 
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

















