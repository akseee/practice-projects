// const audioplayerContainer = document.querySelector(".audioplayer-container")
const audio = new Audio()

const playPauseBtn = document.querySelector(".play-pause")
const nextBtn = document.querySelector(".next")
const backBtn = document.querySelector(".back")

const progressBar = document.getElementById("progress-bar")
const passedTime = document.querySelector(".passed")
const leftTime = document.querySelector(".left")

const songTitle = document.querySelector(".song-title")
const songAuthor = document.querySelector(".song-author")
const songCover = document.querySelector(".audioplayer-img img")

const likeBtn = document.querySelector(".like")
const muteBtn = document.querySelector(".volume")
const repeatBtn = document.querySelector(".repeat")
const shuffleBtn = document.querySelector(".shuffle")

let isPlaying = false
let currentSongIndex = 0
let repeat = false
let shuffle = false

function loadSong(songIndex) {
  const song = songsList[songIndex]
  audio.src = song.files.song
  songTitle.textContent = song.songName
  songAuthor.textContent = song.artist
  songCover.src = song.files.cover
  document.body.style.backgroundColor = song.bg
  checkLike(songIndex)
}

function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = isPlaying
    ? `<svg width="30" height="33" viewBox="0 0 30 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="6" height="22" fill="currentColor"/>
          <rect x="18" y="6" width="6" height="22" fill="currentColor"/>
        </svg>`
    : `<svg width="30" height="33" viewBox="0 0 30 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 27.1295V6L22.0377 16.3706L8 27.1295Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
        </svg>`
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause()
  } else {
    audio.play()
  }
  isPlaying = !isPlaying
  updatePlayPauseIcon()
}

function updateProgress() {
  const currentTime = audio.currentTime
  const duration = audio.duration
  progressBar.value = (currentTime / duration) * 100
  passedTime.textContent = formatTime(currentTime)
  leftTime.textContent = formatTime(duration - currentTime)
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}

progressBar.addEventListener("input", (e) => {
  const value = e.target.value
  audio.currentTime = (value / 100) * audio.duration
})

function playNextSong() {
  if (repeat) {
    repeatSong()
    return
  }
  currentSongIndex = (currentSongIndex + 1) % songsList.length
  loadSong(currentSongIndex)
  audio.play()
  isPlaying = true
  updatePlayPauseIcon()
}

function playPreviousSong() {
  if (repeat) {
    repeatSong()
    return
  }
  currentSongIndex =
    (currentSongIndex - 1 + songsList.length) % songsList.length
  loadSong(currentSongIndex)
  audio.play()
  isPlaying = true
  updatePlayPauseIcon()
}

function checkLike(songIndex) {
  const song = songsList[songIndex]
  if (song.like) {
    likeBtn.classList.add("active")
  } else {
    likeBtn.classList.remove("active")
  }
}

function toggleLike() {
  const song = songsList[currentSongIndex]
  song.like = !song.like
  checkLike(currentSongIndex)
}

function toggleMute() {
  audio.muted = !audio.muted
  muteBtn.classList.toggle("active")
}

function toggleRepeat() {
  repeat = !repeat
  repeatBtn.classList.toggle("active")
}

function repeatSong() {
  loadSong(currentSongIndex)
  audio.play()
  isPlaying = true
  updatePlayPauseIcon()
}

function toggleShuffle() {
  shuffle = !shuffle
  shuffleBtn.classList.toggle("active")
  // console.log('не реализовано');
}

function shuffleArr(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

playPauseBtn.addEventListener("click", togglePlayPause)

nextBtn.addEventListener("click", playNextSong)
backBtn.addEventListener("click", playPreviousSong)

audio.addEventListener("ended", playNextSong)
audio.addEventListener("timeupdate", updateProgress)

likeBtn.addEventListener("click", toggleLike)
muteBtn.addEventListener("click", toggleMute)
repeatBtn.addEventListener("click", toggleRepeat)
shuffleBtn.addEventListener("click", toggleShuffle)

loadSong(currentSongIndex)
