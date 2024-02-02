let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
song.onloadedmetadata = function(){
    progress.max = song.duration ;
    progress.value = song.currentTime;
}

// ctrlIcon.style.transitionDuration = "1s";

let imgTracker =  'assets/pause.svg'
function playPause() {
        if ( imgTracker === 'assets/pause.svg') {
            song.pause();
            // ctrlIcon.src.remove();
            ctrlIcon.src = 'assets/play.svg';
            imgTracker = 'assets/play.svg'
        }
        else {
            song.play();
            // ctrlIcon.src.remove();
            ctrlIcon.src = 'assets/pause.svg';
            imgTracker = 'assets/pause.svg';
        }
}


if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1000);
}

progress.onchange = function(){
    song.currentTime = progress.value;
}