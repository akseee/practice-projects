const current = document.querySelector(
  ".pagination__current-button.pagination-active"
)

const lastPage = document.querySelector(
  ".double-arrow.pagination__forward-button"
)
const nextPage = document.querySelector(
  ".single-arrow.pagination__forward-button"
)

const firstPage = document.querySelector(
  ".double-arrow.pagination__back-button"
)

const prevPage = document.querySelector(".single-arrow.pagination__back-button")

const prevButtons = document.querySelectorAll(".pagination__back-button")
const nextButtons = document.querySelectorAll(".pagination__forward-button")

function getItemsCount() {
  const width = window.innerWidth
  if (width >= 1280) return 6
  if (width >= 768) return 8
  return 16
}

function generatePetArray() {
  let petArray = []
  for (let i = 0; i < 6; i++) {
    petArray = petArray.concat(shuffleArray(pets))
  }
  return petArray
}

const list = generatePetArray()

let currentPage = 1
let totalPages = getItemsCount()
let petsPerPage = Math.ceil(list.length / totalPages)

window.addEventListener("resize", () => {
  totalPages = getItemsCount()
  petsPerPage = Math.ceil(list.length / totalPages)
  renderPets(currentPage)
  updatePagination()
})

function renderPets(currentPage) {
  const petsContainer = document.querySelector(".pets__list")
  petsContainer.innerHTML = ""

  const start = (currentPage - 1) * petsPerPage
  const end = start + petsPerPage
  const petsToRender = list.slice(start, end)

  petsToRender.forEach((pet) => {
    petsTemplate(".pets__list", "#pets-template", pet)
  })
}

function updatePagination() {
  current.textContent = currentPage

  prevButtons.forEach((btn) => {
    btn.disabled = currentPage === 1
  })

  nextButtons.forEach((btn) => {
    btn.disabled = currentPage === totalPages
  })
}

firstPage.addEventListener("click", () => {
  currentPage = 1
  renderPets(currentPage)
  updatePagination()
})

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--
    renderPets(currentPage)
    updatePagination()
  }
})

nextPage.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++
    renderPets(currentPage)
    updatePagination()
  }
})

lastPage.addEventListener("click", () => {
  currentPage = totalPages
  renderPets(currentPage)
  updatePagination()
})

renderPets(currentPage)
updatePagination()
