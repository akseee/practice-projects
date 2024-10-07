const rulesBtn = document.querySelector(".rules")
const rulesPopup = document.querySelector(".popup__type_rules")

const leaderboardBtn = document.querySelector(".leaderboard")
const leaderboardPopup = document.querySelector(".popup__type_leaderboard")

rulesBtn.addEventListener("click", () => {
  popupSetup(rulesPopup)
})

leaderboardBtn.addEventListener("click", () => {
  popupSetup(leaderboardPopup)
})

function openPopup(popup) {
  popup.classList.add("popup_is-opened")
  document.getElementsByTagName("body")[0].style.overflow = "hidden"
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
}

function popupSetup(popup) {
  openPopup(popup)
  const closeBtn = popup.querySelector(".popup__close-btn")
  closeBtn.addEventListener("click", () => {
    closePopup(popup)
  })
  popup.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.classList.contains("popup_is-opened")) closePopup(popup)
  })
}
