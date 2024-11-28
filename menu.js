document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const closebtn = document.getElementById("closebtn")
    const header = document.getElementById ("header")
    const mediaQueary = window.matchMedia ('(min-width: 1024px)')
    mediaQueary.addEventListener("change", togglemenuoff)
    closebtn.addEventListener("click", togglemenuoff);
    console.log(hamburger);
    hamburger.addEventListener("click", togglemenuon);
});



function togglemenuon() {
    menu.style.display = "block"
    header.style.display = "none"
};

function togglemenuoff() {
    menu.style.display = "none"
    header.style.display = "flex"
}