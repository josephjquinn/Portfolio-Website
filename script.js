function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
function toggleVideo(videoId)
{
    var videoOverlay = document.getElementById(videoId);
    var videoPlayer = videoOverlay.querySelector('.video-player');
    if (videoOverlay.style.display === 'block') {
        videoOverlay.style.display = 'none';
        videoPlayer.pause(); // Pause the video
    } else {
        videoOverlay.style.display = 'block';
        videoPlayer.play(); // Play the video
    }
}