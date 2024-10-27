const mobileMenu = document.querySelector(".js-mobile-menu");
const mobileMenuToggle = document.querySelector(".js-menu-toggle");
const mobileMenuCloseBtn = document.querySelector(".js-mobile-menu-close-btn");

mobileMenuToggle.addEventListener("click", openMobileMenu);
mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
}
