const music = document.querySelector('audio');
const play = document.querySelector('#play');
const img = document.querySelector('img');
let isplaying = false;
let music_name = document.getElementsByTagName('h2');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
//array of songs
const songs = [
    {
        name: "Airtel"
    },
    {
        name: "I Like How It Feels"
    },
    {
        name: "Tumko To Aana Hi Tha"
    },

]

// play functionality
const PlayMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.replace('album', 'loading');

}

//pause functionality
const PauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play')
    img.classList.replace('loading', 'album');

}

//toggle
play.addEventListener('click', () => {

    if (isplaying) {
        PauseMusic();
    } else {
        PlayMusic();
    }

})

//changing the music
const loadSong = (songs) => {
    console.log("hello");
    music_name.textContent = songs.name;
    music.src = `songs/${songs.name}.mp3`
    img.src = `albums/${songs.name}.jpg`;
}

loadSong(songs[2]);
