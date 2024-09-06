const popup = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__close-btn")

popup.addEventListener("click", (e) => {
  e.stopPropagation()
  if (e.target.classList.contains("popup_is-opened")) closePopup()
})

closeButton.addEventListener("click", () => {
  closePopup()
})

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

function petsTemplate(data) {
  const cardTemplate = document.querySelector("#pets__item-template").content
  const card = document.querySelector(".pets__list")

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

for (let i = 0; i < 3; i++) {
  petsTemplate(pets[i])
}

function setPetData(data) {
  console.log(data)

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

// console.log(`pets__list-item
//   [x] попап появляется при нажатии на любое место карточки с описанием конкретного животного: +2
//   [x] окно попапа (не считая кнопку с крестиком) центрировано по всем осям, размеры элементов попапа и их расположение совпадают с макетом: +2
//   [x] часть страницы вне попапа затемняется: +2
//   [x] при открытии попапа вертикальный скролл страницы становится неактивным, при закрытии - снова активным: +2
//   [x] при нажатии на область вокруг попапа или на кнопку с крестиком попап закрывается (оба варианта должны быть реализованы), при этом при нажатии на сам попап ничего не происходит: +2
//   [x] кнопка с крестиком интерактивная: +2
// `)
