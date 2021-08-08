
// Display Mobile Menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
}
menu.addEventListener("click", mobileMenu);

//Shows active web position on nav when scrolling
const navLogo = document.querySelector("#navbar__logo");
const highlightMenu = () => {
    const hl = document.querySelector(".highlight");
    const hlBtn = document.querySelector(".highlight-order-button");
    const Home = document.querySelector("#home-page");
    const Menu = document.querySelector("#menu-page");
    const servicesMenu = document.querySelector("#about-page");
    const orderNowBtn = document.querySelector("#order-now");

    let scrollPos = window.scrollY; // gives is current yPos


    // JS version of media queries then see how far we've scrolled.
    if (window.innerWidth > 960 && scrollPos < 760) { 
        Home.classList.add("highlight");
        Menu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        orderNowBtn.classList.remove("highlight-order-button");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1550) {
        Menu.classList.add("highlight");
        Home.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        orderNowBtn.classList.remove("highlight-order-button");
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2585) {
        servicesMenu.classList.add("highlight");
        Menu.classList.remove("highlight");
        Home.classList.remove("highlight");
        orderNowBtn.classList.remove("highlight-order-button");
        return;
    } else {
        orderNowBtn.classList.add("highlight-order-button");
        servicesMenu.classList.remove("highlight");
        Menu.classList.remove("highlight");
        Home.classList.remove("highlight");
        return;
    }

    if ((hl && window.innerWidth < 960 && scrollPos < 600) || hl) {
        hl.classList.remove("highlight");
    }

    if ((hlBtn && window.innerWidth < 960 && scrollPos < 600) || hlBtn) {
        hlBtn.classList.remove("highlight-order-button");
    }

}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// close mobile menu when clocking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");

    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }

}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);