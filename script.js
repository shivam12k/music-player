const music = document.querySelector('audio');
const play = document.querySelector('#play');
const img = document.querySelector('.album');
let isplaying = false;
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
    img.classList.replace( 'loading','album');

}
    //toggle
    play.addEventListener('click', () => {
        
        if (isplaying) {
            PauseMusic();
        } else {
            PlayMusic();
        }

    })