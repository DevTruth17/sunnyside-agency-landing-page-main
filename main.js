const menuBtn = document.querySelector(".menu")
const menuBox = document.querySelector(".nav-mobile")
const arrow = document.querySelector(".arrow")

const header = document.querySelector("header")

window.addEventListener("scroll", (e) => {
    if(scrollY <= header.clientHeight ) {
        arrow.classList.toggle("show")
    }
}, {passive: true})

menuBtn.addEventListener("click", () => {
    menuBox.classList.toggle("move")
})

