class VideoPlayer {
  constructor() {
    this.video = document.getElementById("video");
    this.playBtn = document.querySelector(".play-pause");
    this.stopBtn = document.querySelector(".stop");
    this.fullScreenBtn = document.querySelector(".fullscreen");
    this.progressBar = document.querySelector(".progress-bar");
    this.videoDuration = document.querySelector(".duration");
    this.currentTime = document.querySelector(".current-time");
  }

  playVideo() {
    const playVideo = this.video.play();
    return playVideo;
  }

  stopVideo() {
    const stopVideo = this.video.pause();
    this.video.currentTime = 0;
    return stopVideo;
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

  videoTimer() {
    let padMinutes;
    let padSeconds;
    const currentPlayTime = Math.floor(this.video.currentTime);
    let currentMinutes = Math.floor(currentPlayTime / 60);

    let remainingSeconds = currentMinutes * 60;
    let convertDuration = currentPlayTime - remainingSeconds;

    if (currentMinutes < 10) {
      padMinutes = "0".concat(currentMinutes);
    } else {
      padMinutes = currentMinutes;
    }

    if (convertDuration < 10) {
      padSeconds = "0".concat(convertDuration);
    } else {
      padSeconds = convertDuration;
    }

    this.currentTime.textContent = `${padMinutes}:${padSeconds}`;
  }

  onVideoTick() {
    let percent = (this.video.currentTime / this.video.duration) * 100;
    this.progressBar.value = percent;
  }

  addEventListeners() {
    this.playBtn.addEventListener("click", () => this.playVideo());

    this.stopBtn.addEventListener("click", () => this.stopVideo());
    this.fullScreenBtn.addEventListener("click", () => this.videoFullScreen());

    this.video.addEventListener("loadedmetadata", () =>
      this.totalVideoDuration()
    );

    this.video.addEventListener("timeupdate", () => {
      this.videoTimer();
      this.onVideoTick();
    });

    this.video.addEventListener("timeupdate", () => {
      this.progressBar.value =
        (this.video.currentTime / this.video.duration) * 100;
    });

    this.progressBar.addEventListener("input", () => this.onSliderDrag());
  }
}

const getPlayer = new VideoPlayer();
getPlayer.addEventListeners();
