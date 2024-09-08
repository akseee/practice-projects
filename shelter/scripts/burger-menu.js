// Реализация burger menu на обеих страницах
let burgerState = false

const burgerBtn = document.getElementById("burger-icon")
const burgerMenu = document.querySelector(".header__sidebar-menu")

const pageWidth = window.matchMedia("(width > 768px)")

burgerBtn?.addEventListener("click", () =>
  burgerState ? closeMenu() : showMenu()
)

pageWidth.addEventListener("change", handleHideBurger)
overlay?.addEventListener("click", closeMenu)

burgerMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu)
})

function showMenu() {
  burgerState = true
  burgerMenu?.classList.remove("visually-hidden")
  burgerMenu?.classList.add("active")

  burgerBtn?.classList.add("active")

  overlay?.classList.add("active")
  overlay?.classList.remove("visually-hidden")

  document.getElementsByTagName("body")[0].style.overflow = "hidden"
}

function closeMenu() {
  burgerState = false
  burgerMenu?.classList.remove("active")

  burgerBtn?.classList.remove("active")

  overlay?.classList.remove("active")
  overlay?.classList.add("visually-hidden")

  document.getElementsByTagName("body")[0].style.overflow = "visible"
}

function handleHideBurger() {
  if (pageWidth.matches && burgerState) {
    closeMenu()
    burgerMenu?.classList.add("visually-hidden")
  }
}
