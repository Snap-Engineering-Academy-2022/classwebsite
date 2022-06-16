

// Sticky nav bar: 
var navBar = document.getElementById(('nav-bar'))
window.addEventListener("scroll", () => { navBar.classList.toggle("sticky", window.scrollY > 0); });