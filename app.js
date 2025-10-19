class VideoPlayer {
  constructor() {
    this.video = document.getElementById("video");
    this.playBtn = document.querySelector(".play-pause");
    this.fullScreenBtn = document.querySelector(".fullscreen");
    this.progressBar = document.querySelector(".progress-bar");
  }

  playVideo() {
    const playVideo = this.video.play();
    return playVideo;
  }

  videoFullScreen() {
    return this.video.requestFullscreen();
  }

  onSliderDrag() {
    let seekTime = (this.progressBar.value / 100) * this.video.duration;
    this.video.currentTime = seekTime;
  }

  addEventListeners() {
    this.playBtn.addEventListener("click", () => this.playVideo());
    this.fullScreenBtn.addEventListener("click", () => this.videoFullScreen());

    this.video.addEventListener("timeupdate", () => {
      this.progressBar.value =
        (this.video.currentTime / this.video.duration) * 100;
    });

    this.progressBar.addEventListener("input", () => this.onSliderDrag());
  }
}

const getPlayer = new VideoPlayer();
getPlayer.addEventListeners();
