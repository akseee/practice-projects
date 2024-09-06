const page = "main"

const popup = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__close-btn")

function petsTemplate(id, template, data) {
  const cardTemplate = document.querySelector(template).content
  const card = document.querySelector(id)

  const cardElement = cardTemplate
    .querySelector(".pets__list-item")
    .cloneNode(true)

  cardElement.querySelector(".pets-image").src = data.img
  cardElement.querySelector(".pets-image").alt = data.name
  cardElement.querySelector(".pets-item-title").textContent = data.name

  cardElement.addEventListener("click", () => {
    openPopup(data)
  })

  return card.append(cardElement)
}

function openPopup(data) {
  setPetData(data)
  overlay?.classList.add("active")
  overlay?.classList.remove("visually-hidden")
  popup.classList.add("popup_is-opened")
  document.getElementsByTagName("body")[0].style.overflow = "hidden"
}

function closePopup() {
  popup.classList.remove("popup_is-opened")
  overlay?.classList.remove("active")
  overlay?.classList.add("visually-hidden")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
}

function setPetData(data) {
  const image = document.querySelector(".popup__image")
  const title = popup.querySelector(".popup__name")
  const type = document.querySelector(".popup__type")
  const description = document.querySelector(".popup__description")
  const age = document.querySelector(".popup-age")
  const diseases = document.querySelector(".popup-diaseases")
  const parasites = document.querySelector(".popup-parasites")
  const inoculations = document.querySelector(".popup-inoculations")

  image.src = data.img
  title.textContent = data.name
  type.textContent = `${data.type}  -  ${data.breed}`
  description.textContent = data.description
  age.textContent = data.age
  inoculations.textContent = data.inoculations
  diseases.textContent = data.diseases
  parasites.textContent = data.parasites
}

popup.addEventListener("click", (e) => {
  e.stopPropagation()
  if (e.target.classList.contains("popup_is-opened")) closePopup()
})

closeButton.addEventListener("click", () => {
  closePopup()
})

// for (let i = 0; i < 3; i++) {
//   petsTemplate(".main-pets__list", "#main-pets-template", pets[i])
// }

for (let i = 0; i < 8; i++) {
  petsTemplate(".pets__list", "#pets-template", pets[i])
}
