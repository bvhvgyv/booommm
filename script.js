console.log("Welcome to CHERYL");
let audioElement =new Audio ('song/1.mp3');
let masterplay = document.getElementById('masterplay')
let myProgressBar = document.getElementById('myProgressBar');
console.log(masterplay);
let songs = [
    {songName: "A Thousand Years", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/7.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/9.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/10.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/12.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/13.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/14.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/15.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/16.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/17.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/18.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/19.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/20.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/22.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/23.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/24.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/25.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/26.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/27.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/28.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/29.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/30.mp3", coverPath: "covers/1.jpg"},
    {songName: "CRY", filePath: "song/31.mp3", coverPath: "covers/1.jpg"},    
]
let songItems = document.querySelectorAll('.songitem');
let songIndex = 0; // Track which song is playing

function updateGif() {
    // Hide all GIFs
    songItems.forEach(item => {
        let gif = item.querySelector('#gif');
        if (gif) gif.style.opacity = 0;
    });
    // Show GIF for current song
    let currentGif = songItems[songIndex].querySelector('#gif');
    if (currentGif) currentGif.style.opacity = 1;
}

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        updateGif();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        // Hide all GIFs when paused
        songItems.forEach(item => {
            let gif = item.querySelector('#gif');
            if (gif) gif.style.opacity = 0;
        });
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});
let prevBtn = document.querySelector('.fa-step-backward');
let nextBtn = document.querySelector('.fa-step-forward');

// Next song
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    updateGif();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});

// Previous song
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    updateGif();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
// Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress || 0;
});

let playButtons = document.querySelectorAll('.songItemPlay');

playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        let idx = parseInt(btn.getAttribute('data-index'));
        songIndex = idx;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        updateGif();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    });
});
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    updateGif();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
