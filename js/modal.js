const modalBackdrop = document.querySelector(".js-modal__backdrop");
const orderBtn = document.querySelector(".js-order-btn");
const modalCloseBtn = document.querySelector(".js-modal-close-btn");
const modal = document.querySelector(".modal__container");

orderBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
modal.addEventListener("click", (evt) => {
    evt.stopPropagation();
});

function openModal() {
    modalBackdrop.classList.add("is-open");
}

function closeModal() {
    modalBackdrop.classList.remove("is-open");
}
