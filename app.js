class VideoPlayer {
  constructor() {
    this.video = document.getElementById("video");
    this.playBtn = document.querySelector(".play-pause");
    this.fullScreenBtn = document.querySelector(".fullscreen");
  }

  playVideo() {
    const playVideo = this.video.play();
    return playVideo;
  }

  videoFullScreen() {
    return this.video.requestFullscreen();
  }

  addEventListeners() {
    this.playBtn.addEventListener("click", () => this.playVideo());
    this.fullScreenBtn.addEventListener("click", () => this.videoFullScreen());
  }
}

const getPlayer = new VideoPlayer();
getPlayer.addEventListeners();
