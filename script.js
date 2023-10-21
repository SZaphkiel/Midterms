const burger=document.querySelector(".toggle_menu");
const headerButts=document.querySelector(".burger__menu");
burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    headerButts.classList.toggle("open");
});