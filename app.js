class VideoPlayer {
  constructor() {
    this.video = document.getElementById("video");
    this.playBtn = document.querySelector(".play-pause");
    this.fullScreenBtn = document.querySelector(".fullscreen");
    this.progressBar = document.querySelector(".progress-bar");
    this.videoDuration = document.querySelector(".duration");
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

  totalVideoDuration() {
    let padMinutes;
    let padSeconds;

    const videoDuration = Math.floor(this.video.duration);
    let wholeMinutes = Math.floor(videoDuration / 60);

    let remainingSeconds = wholeMinutes * 60;
    let convertDuration = videoDuration - remainingSeconds;

    if (wholeMinutes < 10) {
      padMinutes = "0".concat(wholeMinutes);
    } else {
      padMinutes = wholeMinutes;
    }

    if (convertDuration < 10) {
      padSeconds = "0".concat(convertDuration);
    } else {
      padSeconds = convertDuration;
    }

    this.videoDuration.textContent = `${padMinutes}:${padSeconds}`;
  }

  addEventListeners() {
    this.playBtn.addEventListener("click", () => this.playVideo());
    this.fullScreenBtn.addEventListener("click", () => this.videoFullScreen());

    this.video.addEventListener("loadedmetadata", () =>
      this.totalVideoDuration()
    );

    this.video.addEventListener("timeupdate", () => {
      this.progressBar.value =
        (this.video.currentTime / this.video.duration) * 100;
    });

    this.progressBar.addEventListener("input", () => this.onSliderDrag());
  }
}

const getPlayer = new VideoPlayer();
getPlayer.addEventListeners();
