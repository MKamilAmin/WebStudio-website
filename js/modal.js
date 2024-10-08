const modal = document.querySelector(".modal__backdrop");
const orderBtn = document.querySelector(".js-order-btn");
const modalCloseBtn = document.querySelector(".js-modal-close-btn");

orderBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("is-open");
}

function closeModal() {
    modal.classList.remove("is-open");
}
