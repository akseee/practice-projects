const uri = "https://api.unsplash.com"
const key = "RUusQi31FSk7-PTpliLl63jOj55n4TrX5All6S6e4II"

const searchInput = document.querySelector("#search")
const searchBtn = document.querySelector(".search-btn")

function setTemplate(data) {
  const imageTemplate = document.querySelector("#template-image").content
  const galleryList = document.querySelector(".gallery-list")

  const imageElement = imageTemplate
    .querySelector(".gallery-list__item")
    .cloneNode(true)

  imageElement.querySelector(".gallery-image").src = data.urls.small
  imageElement.querySelector(".gallery-image").alt =
    data.alt_description || "Image"

  // imageElement.addEventListener("click", () => {
  //   openPopup(data)
  // })

  return galleryList.append(imageElement)
}

async function getData(url) {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`)
    }
    const data = await res.json()
    if (data.total === 0) {
      alert("Проверьте данные поиска")
    }
    document.querySelector(".gallery-list").innerHTML = ""
    data.results.forEach((image) => setTemplate(image))
  } catch (error) {
    console.error("Ошибка получения данных:", error)
  }
}

function loadImages() {
  let searchedQuery = searchInput.value
  if (searchedQuery) {
    getData(`${uri}/search/photos?client_id=${key}&query=${searchInput.value}`)
  } else {
    getData(`${uri}/search/photos?client_id=${key}&query=${"black and white"}`)
  }
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value.trim()) {
    loadImages()
  }
})

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && searchInput.value.trim()) {
    loadImages()
  }
})

window.onload = function () {
  document.getElementById("search").focus()
}

loadImages()
