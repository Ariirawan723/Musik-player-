let audioPlayer = document.getElementById("audio-player");
const seekSlider = document.getElementById("range");
const cTime = document.getElementById("Ctime");
const maxTime = document.getElementById("AudioMax");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let daftar_musik =["/audio.mp3","/audio_1.mp3","/audio_2.mp3"]

let currentTrackIndex = 0;

next.addEventListener("click", function() {
  currentTrackIndex = (currentTrackIndex + 1) % daftar_musik.length;
  audioPlayer.src = daftar_musik[currentTrackIndex];
  audioPlayer.play();
});
previous.addEventListener("click", function() {
  currentTrackIndex = (currentTrackIndex - 1) % daftar_musik.length;
  if (currentTrackIndex < 0) {
    currentTrackIndex = daftar_musik.length - 1;
  }
  audioPlayer.src = daftar_musik[currentTrackIndex];
  audioPlayer.play();
});

audioPlayer.addEventListener("loadedmetadata", function() {
  seekSlider.max = audioPlayer.duration;
  const img = document.getElementById("img")
});
audioPlayer.src = "audio.mp3"
audioPlayer.addEventListener("timeupdate", function() {
  cTime.innerHTML = Convert(audioPlayer.currentTime);
  maxTime.innerHTML = Convert(audioPlayer.duration);
  seekSlider.setAttribute("max", `${audioPlayer.duration}`);
  seekSlider.setAttribute("value", `${audioPlayer.duration}`)
  seekSlider.value = audioPlayer.currentTime
  seekSlider.style.backgroundSize = `${(100 * audioPlayer.currentTime) / audioPlayer.duration}%`;
  img.style.transform = `rotate(${(audioPlayer.currentTime * (1.6 * 2))}deg)`
});
seekSlider.addEventListener("input", function() {
  audioPlayer.currentTime = seekSlider.value;
  //audioPlayer.currentTime = seekSlider.value;
  //seekSlider.style.backgroundSize = `${audioPlayer.currentTime}%`

});
var playPauseButton = document.getElementById("play");
var pauseBtn = document.querySelector(".fa-solid.fa-play.fa-2x")
playPauseButton.addEventListener("click", function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    pauseBtn.className = "fa-solid fa-pause fa-2x"
  } else  {
    audioPlayer.pause();
    pauseBtn.className = "fa-solid fa-play fa-2x"
  }
});

function Convert(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  return formattedTime;
}