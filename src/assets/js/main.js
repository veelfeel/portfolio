const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("ul > li");

console.log(menuLinks.length);

openButton.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu--open");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu--open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu--open");
  });
});
