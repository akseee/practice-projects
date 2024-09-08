function getItemsCount() {
  const width = window.innerWidth
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

let amount = getItemsCount()

const btnRight = document.querySelector(".slider__forward-button")
const btnLeft = document.querySelector(".slider__back-button")

const carousel = document.querySelector(".main-pets__list")

const leftSection = document.getElementById("cards-left")
const centralSection = document.getElementById("cards-central")
const rightSection = document.getElementById("cards-right")

let petsList = shuffleArray(pets)

if (petsList.length < 9) {
  let i = Math.floor(6 / Math.random())
  petsList.push(petsList[4])
}

function renderSections() {
  leftSection.innerHTML = ""
  centralSection.innerHTML = ""
  rightSection.innerHTML = ""

  for (let i = 0; i < amount; i++) {
    if (petsList[i]) {
      petsTemplate("#cards-left", "#main-pets-template", petsList[i])
    }

    if (petsList[i + amount]) {
      petsTemplate(
        "#cards-central",
        "#main-pets-template",
        petsList[i + amount]
      )
    }

    if (petsList[i + amount * 2]) {
      petsTemplate(
        "#cards-right",
        "#main-pets-template",
        petsList[i + amount * 2]
      )
    }
  }
}

window.addEventListener("resize", () => {
  amount = getItemsCount()
  renderSections()
})

btnRight.addEventListener("click", moveRight)
btnLeft.addEventListener("click", moveLeft)

carousel.addEventListener("animationend", (e) => {
  if (e.animationName === "move-left") {
    carousel.classList.remove("transition-left")
    updateSections("left")
    btnLeft.removeAttribute("disabled")
    btnRight.removeAttribute("disabled")
  }

  if (e.animationName === "move-right") {
    carousel.classList.remove("transition-right")
    updateSections("right")
    btnRight.removeAttribute("disabled")
    btnLeft.removeAttribute("disabled")
  }
})

function moveRight() {
  carousel.classList.add("transition-right")
  btnLeft.setAttribute("disabled", "")
  btnRight.setAttribute("disabled", "")
}

function moveLeft() {
  carousel.classList.add("transition-left")
  btnLeft.setAttribute("disabled", "")
  btnRight.setAttribute("disabled", "")
}

function updateSections(direction) {
  if (direction === "left") {
    const lastItems = petsList.splice(-amount, amount)
    petsList = [...lastItems, ...petsList]
  } else if (direction === "right") {
    const firstItems = petsList.splice(0, amount)
    petsList = [...petsList, ...firstItems]
  }

  renderSections()
}

renderSections()
