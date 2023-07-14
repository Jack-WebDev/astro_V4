const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.querySelectorAll(".nav__link");

const openModal = () => {
  modal.classList.add("active");
};
const closeModal = () => {
  modal.classList.remove("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});

["click", "keydown"].forEach((event) => {
  hamburger.addEventListener(event, openModal);
  closeIcon.addEventListener(event, closeModal);
});
