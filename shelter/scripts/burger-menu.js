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
  if (pageWidth.matches) {
    closeMenu()
    burgerMenu?.classList.add("visually-hidden")
  }
}

// console.log(`
//     [x] при ширине страницы меньше 768рх панель навигации скрывается, появляется бургер-иконка: +2
//     [x] при нажатии на бургер-иконку, справа плавно появляется адаптивное меню шириной 320px, бургер-иконка плавно поворачивается на 90 градусов: +4
//     [x] высота адаптивного меню занимает всю высоту экрана: +2
//     [x] при повторном нажатии на бургер-иконку или на свободное от бургер-меню пространство (оба варианта должны быть реализованы) адаптивное меню плавно скрывается уезжая за правую часть экрана, бургер-иконка плавно поворачивается на 90 градусов обратно: +4
//     [x] бургер-иконка создана при помощи html+css, без использования изображений: +2
//     [x] ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям, сохраняются заданные на первом этапе выполнения задания требования интерактивности элементов меню: +2
//     [x] при клике по любой ссылке (интерактивной или неинтерактивной) в меню адаптивное меню плавно скрывается вправо, бургер-иконка поворачивается на 90 градусов обратно: +2
//     [x] расположение и размеры элементов в бургер-меню соответствует макету (центрирование по вертикали и горизонтали элементов меню, расположение иконки). При этом на странице Pets цветовая схема может быть как темная, так и светлая: +2
//     [x] область, свободная от бургер-меню, затемняется: +2
//     [x] страница под бургер-меню не прокручивается: +4
// `)
