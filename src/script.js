const menu = document.querySelector(".menu")
const navBar = document.querySelector(".navbar")

menu.addEventListener("click", () =>{
    menu.classList.toggle('active');
    navBar.classList.toggle('active');
})