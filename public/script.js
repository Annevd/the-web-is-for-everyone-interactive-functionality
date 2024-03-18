document.addEventListener('DOMContentLoaded', function () {

const openMenuButton = document.querySelector(".menu-button.home")
const closeMenuButton = document.querySelector(".menu-button.menu")
const navShown = document.querySelector("nav")

// Opent het menu
openMenuButton.addEventListener('click', function() {
    document.documentElement.classList.add("no-scroll") // zorgt dat je de body niet kan scrollen als je in het menu bent
    navShown.classList.add("menu-open") // opent het menu
    openMenuButton.classList.add("hidden-menu") // verbergt het open menu knopje
    document.querySelector(".menu-button.menu").style.display = "flex";
})

// Sluit het menu
closeMenuButton.addEventListener('click', function() {
    document.documentElement.classList.remove("no-scroll")
    navShown.classList.remove("menu-open") // sluit het menu
    openMenuButton.classList.remove("hidden-menu") // laat het open menu knopje weer zien
    document.querySelector(".menu-button.menu").style.display = "none";
})

})
