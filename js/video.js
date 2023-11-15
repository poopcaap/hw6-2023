document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".video");// Initialize video object and controls
    const play = document.querySelector("#play");
    const pause = document.querySelector("#pause");
    const slower = document.querySelector("#slower");
    const faster = document.querySelector("#faster");
    const skip = document.querySelector("#skip");
    const mute = document.querySelector("#mute");
    const volumeSlider = document.querySelector("#slider");
    const vintage = document.querySelector("#vintage");
    const original = document.querySelector("#orig");
    const volumeDisplay = document.querySelector("#volume");

    video.autoplay = false;// Set video properties
    video.loop = false;

    play.addEventListener("click", playVideo);// Event listeners
    pause.addEventListener("click", pauseVideo);
    slower.addEventListener("click", slowDownVideo);
    faster.addEventListener("click", speedUpVideo);
    skip.addEventListener("click", skipVideo);
    mute.addEventListener("click", toggleMute);
    volumeSlider.addEventListener("change", adjustVolume);
    vintage.addEventListener("click", applyVintageEffect);
    original.addEventListener("click", removeVintageEffect);

    function playVideo() {
        console.log("Play Video");
        video.play();
        updateVolumeDisplay();
    }// Play video

    function pauseVideo() {
        console.log("Pause Video");
        video.pause();
    }// Pause video

    function slowDownVideo() {
        video.playbackRate *= 0.9;
        console.log("New speed is " + video.playbackRate);
    }// Slow down video

    function speedUpVideo() {
        video.playbackRate /= 0.9;
        console.log("New speed is " + video.playbackRate);
    }// Speed up video

    function skipVideo() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
            console.log("Going back to the beginning");
        } else {
            video.currentTime += 10;
        }
        console.log("Current location " + video.currentTime);
    }// Skip video segment

    function toggleMute() {
        video.muted = !video.muted;
        mute.textContent = video.muted ? "Unmute" : "Mute";
    }// Toggle mute

    function adjustVolume() {
        video.volume = volumeSlider.value / 100;
        updateVolumeDisplay();
    }// Adjust volume

    function updateVolumeDisplay() {
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
    }// Update volume display


    function applyVintageEffect() {
        video.classList.add("oldSchool");
    }// Apply vintage effect

    function removeVintageEffect() {
        video.classList.remove("oldSchool");
    }// Remove vintage effect
});
